import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Test } from "@/models/Test";
import { useAuthenticationStore } from "./auth";
import { useQuestionServiceStore } from "./questionService";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();
    const tests: Ref<Test[]|null> = ref(null);
    const {deleteQuestion} = useQuestionServiceStore();

    async function getTest(test_id: string): Promise<Test|undefined> {
        const testRef = doc(db, 'tests', test_id);
        const snap = await getDoc(testRef);
        if(!snap.exists()) {
            return;
        }
        const test = <Test>snap.data();
        test.id = snap.id;
        return test;
    }

    async function loadTests(user_id: string) {
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
        test.updated_at = test.created_at = Timestamp.fromDate(new Date);
        test.user_id = user.value?.uid;
        const testRef = await addDoc(collection(db, 'tests'), test);
        return testRef;
    }

    async function updateTest(test_id: string, test: Test) {
        await updateDoc(doc(db, 'tests', test_id), {
            name: test.name,
            description: test.description,
            max_points: test.max_points,
            time_limit: test.time_limit,
            updated_at: Timestamp.fromDate(new Date),
        });
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
