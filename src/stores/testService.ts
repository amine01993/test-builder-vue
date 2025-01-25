import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Test } from "@/models/Test";
import { useQuestionServiceStore } from "./questionService";
import { useAuthenticationStore } from "./auth";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();
    const userId: Ref<string|undefined> = ref();
    const tests: Ref<Test[]|null> = ref(null);
    const {deleteQuestion, getQuestions} = useQuestionServiceStore();

    async function getTest(test_id: string, loadQuestions: boolean = false): Promise<Test|undefined> {
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

    async function loadTests(user_id: string) {
        if(userId.value === user_id) return;

        userId.value = user_id;

        const testsRef = collection(db, 'tests');
        const q = query(testsRef, where('user_id', '==', user_id), orderBy('updated_at', 'desc'));
        const snaps = await getDocs(q);
        tests.value = snaps.docs.map(snap => {
            const test = <Test>snap.data();
            test.id = snap.id;
            return test;
        });
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
        return testRef;
    }

    async function updateTest(test_id: string, test: Test) {
        await updateDoc(doc(db, 'tests', test_id), {
            name: test.name,
            description: test.description,
            max_points: test.max_points,
            time_limit: test.time_limit,
        });

        if(tests.value) {
            const index = tests.value.findIndex(t => t.id === test_id);
            if(index > -1) {
                const _test = tests.value[index];
                _test.name = test.name;
                _test.description = test.description;
                _test.max_points = test.max_points;
                _test.time_limit = test.time_limit;
                _test.updated_at = Timestamp.fromDate(new Date);

                if(index != 0) {
                    tests.value.splice(index, 1);
                    tests.value.unshift(_test);
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

        // delete questions and choices
        const questionsRef = collection(db, 'tests', test_id, 'questions');
        await getDocs(questionsRef)
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
        tests: computed(() => tests),
        loadTests,
        addTest,
        updateTest,
        deleteTest,
    }
});
