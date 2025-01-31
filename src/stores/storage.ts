import { defineStore } from "pinia";
import { getStorage, ref } from "firebase/storage";
import { useFirebaseStore } from "./firebase";

export const useStorageStore = defineStore('store', () => {

    const { firebaseApp } = useFirebaseStore();
    const storage = getStorage(firebaseApp);

    function uploadProfilePicture(file: File) {
        const imgRef = ref(storage, `images/${file.name}`);

    }

    return {
        uploadProfilePicture,
    };
});