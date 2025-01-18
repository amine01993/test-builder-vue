import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Test } from "@/models/Test";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();
    const tests: Ref<Test[]> = ref([]);

    async function addTest(test: Test) {
        const testRef = await addDoc(collection(db, 'tests'), test);
        return testRef;
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

    async function deleteTest(test_id: string) {
        const testRef = doc(db, 'tests', test_id);
        await deleteDoc(testRef);
        const index = tests.value.findIndex(test => test.id === test_id);
        if(index > -1) tests.value.splice(index, 1);
    }

    return {
        addTest,
        deleteTest,
        tests: computed(() => tests),
        loadTests,
    }
});
