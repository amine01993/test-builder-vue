import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter, Timestamp, updateDoc, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import { useQuestionServiceStore } from "./questionService";
import { useAuthenticationStore } from "./auth";
import type { Test } from "@/models/Test";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();
    const userId: Ref<string|undefined> = ref();
    const testCount: Ref<number|undefined> = ref();
    const testsPerPage: number = 25;
    let lastDoc:any = null;
    const tests: Ref<Test[]|null> = ref(null);
    const {deleteQuestion, getQuestions} = useQuestionServiceStore();

    function updateQuestionCount(test_id: string, count: number) {
        const test = tests.value?.find(t => t.id === test_id);
        if(test) {
            test.questionCount = count;
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

    async function getTest(test_id: string, loadQuestions: boolean = false): Promise<Test|undefined> {
        const {user} = useAuthenticationStore();
        if(!userId.value && user.value?.uid === userId.value) {
            const test = tests.value?.find(t => t.id === test_id);
            if(test) return test;
        }

        const testRef = doc(db, 'tests', test_id);
        const snap = await getDoc(testRef);
        if(!snap.exists()) {
            return;
        }
        const test = <Test>snap.data();
        test.id = snap.id;

        if(loadQuestions) {
            test.questions = await getQuestions(snap.id);
        }

        return test;
    }

    async function loadTestCount(user_id: string) {
        if(userId.value === user_id && testCount.value === undefined) return;

        userId.value = user_id;

        const testsRef = collection(db, 'tests');
        const testCounyQuery = query(testsRef, where('user_id', '==', user_id));

        const countSnap = await getCountFromServer(testCounyQuery);
        testCount.value = countSnap.data().count;
    }

    async function loadTests(user_id: string) {        
        if(userId.value === user_id && tests.value === undefined) return;

        const testsRef = collection(db, 'tests');
        const q = query(testsRef, where('user_id', '==', user_id), orderBy('updated_at', 'desc'), limit(testsPerPage));
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
            tests.value.unshift(test);
        }
        else {
            tests.value = [test];
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
                    // tests.value.splice(index, 1);
                    // tests.value.unshift(_test);
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
        else testCount.value = 0;

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
        getTest,
        testCount: computed(() => testCount),
        tests: computed(() => tests),
        loadTestCount,
        loadTests,
        loadMoreTests,
        addTest,
        updateTest,
        updateQuestionCount,
        updateMaxPoints,
        deleteTest,
    }
});
