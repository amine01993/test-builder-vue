import { defineStore } from "pinia";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { useFirebaseStore } from "./firebase";

export const useFirestoreStore = defineStore('firestore', () => {

    const {firebaseApp} = useFirebaseStore();

    const db = getFirestore(firebaseApp);

    if(import.meta.env.DEV) {
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
    }
    return {
        db,
    };
});