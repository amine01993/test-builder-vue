import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { getAuth, type User } from 'firebase/auth'
import { useFirebaseStore } from './firebase';

export const useAuthenticationStore = defineStore('auth', () => {

    const { firebaseApp } = useFirebaseStore();

    const auth = getAuth(firebaseApp);

    const user: Ref<User|null> = ref(null);

    function setUser(_user: User|null) {
        user.value = _user;
    }

    function isAnonymous(_user: User|null) {
        return _user === null || _user.isAnonymous;
    }

    return {
        user: computed(() => user),
        setUser,
        auth,
        isAnonymous,
    };
})
