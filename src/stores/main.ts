import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const isMenuOpen = ref(false);
    const loading = ref(false);
    const toastOpt: Ref<{message: string, status: 'success'|'failure'|''}> = ref({message: '', status: ''});

    function openMenu() {
        isMenuOpen.value = true;
    }

    function closeMenu() {
        isMenuOpen.value = false;
    }

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

    function validateEmail(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    function startLoading() {
        loading.value = true;
    }

    function endLoading() {
        loading.value = false;
    }

    function showMessage(status: 'success'|'failure'|'', message: string) {
        toastOpt.value = {status, message};
    }

    return {
        isMenuOpen: computed(() => isMenuOpen),
        openMenu, closeMenu, toggleMenu,
        validateEmail,
        loading: computed(() => loading),
        startLoading, endLoading,
        toastOpt: computed(() => toastOpt),
        showMessage,
    };
})
