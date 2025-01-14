import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const isMenuOpen = ref(false);

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

    return {
        isMenuOpen: computed(() => isMenuOpen),
        openMenu, closeMenu, toggleMenu,
        validateEmail
    };
})
