import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter, Timestamp, updateDoc, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import { useQuestionServiceStore } from "./questionService";
import { useAuthenticationStore } from "./auth";
import type { Test } from "@/models/Test";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();
    const {deleteQuestion, getQuestions} = useQuestionServiceStore();
    const {user} = useAuthenticationStore();

    const userId: Ref<string|undefined> = ref();
    const testCount: Ref<number|undefined> = ref();
    const testsPerPage: number = 25;
    let lastDoc:any = null;
    const tests: Ref<Test[]|undefined> = ref();
    const test: Ref<Test|undefined> = ref();
    const time_limit: Ref<number> = ref(180);

    function incrementQuestionCount(test_id: string) {
        const test = tests.value?.find(t => t.id === test_id);
        if(test?.questionCount) {
            test.questionCount++;
        }
    }

    function decrementQuestionCount(test_id: string) {
        const test = tests.value?.find(t => t.id === test_id);
        if(test?.questionCount) {
            test.questionCount--;
        }
    }

    function updateMaxPoints(test_id: string) {
        if(!tests.value) return;

        const test = tests.value.find(t => t.id === test_id);
        if(!test) return;

        const {questions} = useQuestionServiceStore();
        if(!questions.value) return;

        test.max_points = questions.value.reduce((acc, val) => acc + (val.max_points ?? 0), 0);
    }

    async function loadTest(test_id: string, loadQuestions: boolean = false): Promise<number|undefined> {
        if(user.value && userId.value === user.value?.uid && tests.value) {
            const _test = tests.value?.find(t => t.id === test_id);
            if(_test) {
                test.value = _test;
            }
        }

        if(!test.value) {
            const testRef = doc(db, 'tests', test_id);
            const snap = await getDoc(testRef);
            if(!snap.exists()) {
                return;
            }
            const _test = <Test>snap.data();
            _test.id = snap.id;
    
            test.value = _test;
        }


        if(loadQuestions) {
            test.value.questions = await getQuestions(test_id);

            time_limit.value = test.value.time_limit;

            if(time_limit.value > 0) {
                let interval: number|undefined = setInterval(() => {
                    time_limit.value--;
                    if(time_limit.value === 0) {
                        clearInterval(interval);
                        interval = undefined;
                    }
                }, 1000);
                return interval;
            }
        }
    }

    async function loadTestCount() {
        if(userId.value === user.value?.uid && testCount.value !== undefined) return;

        userId.value = user.value?.uid;

        const testsRef = collection(db, 'tests');
        const testCounyQuery = query(testsRef, where('user_id', '==', user.value?.uid));

        const countSnap = await getCountFromServer(testCounyQuery);
        testCount.value = countSnap.data().count;
    }

    async function loadTests() {        
        if(userId.value === user.value?.uid && tests.value) return;

        userId.value = user.value?.uid;

        const testsRef = collection(db, 'tests');
        const q = query(testsRef, where('user_id', '==', user.value?.uid), orderBy('updated_at', 'desc'), limit(testsPerPage));
        const snaps = await getDocs(q);
        tests.value = snaps.docs.map(snap => {
            const test = <Test>snap.data();
            test.id = snap.id;
            return test;
        });

        lastDoc = snaps.docs.length === 0 ? null : snaps.docs[snaps.docs.length - 1];
    }

    async function loadMoreTests() {
        if(!tests.value || !lastDoc) return;

        const testsRef = collection(db, 'tests');

        const q = query(testsRef, where('user_id', '==', userId.value), orderBy('updated_at', 'desc'), startAfter(lastDoc), limit(testsPerPage))
        const snaps = await getDocs(q);

        const newTests = snaps.docs.map(snap => {
            const test = <Test>snap.data();
            test.id = snap.id;
            return test;
        });

        lastDoc = snaps.docs.length === 0 ? null : snaps.docs[snaps.docs.length - 1];

        tests.value = tests.value.concat(newTests);
    }

    async function addTest(test: Test) {
        const {user} = useAuthenticationStore();
        test.user_id = user.value?.uid;
        const testRef = await addDoc(collection(db, 'tests'), test);
        
        test.id = testRef.id;
        test.updated_at = Timestamp.fromDate(new Date);

        if(tests.value) {
            tests.value = [test, ...tests.value];
        }

        if(testCount.value) testCount.value++;
        else testCount.value = 1;

        return testRef;
    }

    async function updateTest(test_id: string, test: Test) {
        await updateDoc(doc(db, 'tests', test_id), {
            name: test.name,
            description: test.description,
            time_limit: test.time_limit,
        });

        if(tests.value) {
            const index = tests.value.findIndex(t => t.id === test_id);
            if(index > -1) {
                const _test = tests.value[index];
                _test.name = test.name;
                _test.description = test.description;
                _test.time_limit = test.time_limit;
                _test.updated_at = Timestamp.fromDate(new Date);

                if(index != 0) {
                    tests.value = [_test, ...tests.value.slice(0, index), ...tests.value.slice(index + 1)];
                }
            }
        }
    }

    async function deleteTest(test_id: string) {
        const testRef = doc(db, 'tests', test_id);
        await deleteDoc(testRef);

        if(tests.value) {
            const index = tests.value.findIndex(test => test.id === test_id);
            if(index > -1) tests.value.splice(index, 1);
        }

        if(testCount.value) testCount.value--;

        // delete questions and choices
        const questionsRef = collection(db, 'tests', test_id, 'questions');
        const listQuestions = query(questionsRef, where('user_id', '==', userId.value));
        await getDocs(listQuestions)
        .then(snaps => {
            const promises: Promise<void>[] = [];
            snaps.forEach(snap => {
                promises.push(deleteQuestion(test_id, snap.id));
            });
            return Promise.all(promises);
        });
    }

    return {
        test: computed(() => test),
        time_limit: computed(() => time_limit),
        testCount: computed(() => testCount),
        tests: computed(() => tests),
        loadTest,
        loadTestCount,
        loadTests,
        loadMoreTests,
        addTest,
        updateTest,
        incrementQuestionCount,
        decrementQuestionCount,
        updateMaxPoints,
        deleteTest,
    }
});
