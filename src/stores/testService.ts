import { defineStore } from "pinia";
import { useFirestoreStore } from "./firestore";
import type { Test } from "@/models/Test";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const useTestServiceStore = defineStore('testService', () => {

    const {db} = useFirestoreStore();

    async function addTest(test: Test) {
        const testRef = await addDoc(collection(db, 'tests'), test);
        return testRef;
    }

    async function getTests(user_id: string): Promise<Test[]> {
        const testsRef = collection(db, 'tests');
        const q = query(testsRef, where('user_id', '==', user_id));
        const snaps = await getDocs(q);
        const tests = snaps.docs.map(snap => {
            const test = <Test>snap.data();
            test.id = snap.id;
            return test;
        })
        return tests;
    }

    return {
        addTest,
        getTests,
    }
});
