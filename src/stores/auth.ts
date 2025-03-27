import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, linkWithPopup, signInWithPopup, type User } from 'firebase/auth';
import { useFirebaseStore } from './firebase';

export const useAuthenticationStore = defineStore('auth', () => {

    const { firebaseApp } = useFirebaseStore();

    const auth = getAuth(firebaseApp);
    
    if(import.meta.env.DEV) {
        connectAuthEmulator(auth, "http://127.0.0.1:9099");
    }
    
    const user: Ref<User|null> = ref(null);

    function setUser(_user: User|null) {
        user.value = _user;
    }

    function isAnonymous(_user: User|null) {
        return _user === null || _user.isAnonymous;
    }

    async function signUpWithGoogle() {
        const provider = new GoogleAuthProvider();
    
        await linkWithPopup(user.value!, provider);
    }

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
    
        await signInWithPopup(auth, provider);
    }

    return {
        user: computed(() => user),
        setUser,
        auth,
        isAnonymous,
        signUpWithGoogle,
        signInWithGoogle,
    };
})
