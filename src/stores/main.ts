import { defineStore } from 'pinia';
import { ref, computed, type Ref } from 'vue';

export const useMainStore = defineStore('main', () => {
    enum LoadingStatus {
        CONNECTING,
        LOADING,
    };

    const isMenuOpen = ref(false);
    const loading = ref(false);
    const loadStatus: Ref<LoadingStatus> = ref(LoadingStatus.CONNECTING);
    const toastOpt: Ref<{message: string, status: 'success'|'failure'|''}> = ref({message: '', status: ''});
    const isDesktop = ref(false);
    const DesktopMinWidth = 1024;

    function openMenu() {
        isMenuOpen.value = true;
        if(isDesktop.value) {
            localStorage.setItem('is-open-menu-d', String(isMenuOpen.value));
        }
    }

    function closeMenu() {
        if(!isDesktop.value)  {
            isMenuOpen.value = false;
        }
    }

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
        if(isDesktop.value) {
            localStorage.setItem('is-open-menu-d', String(isMenuOpen.value));
        }
    }

    function startLoading(status: LoadingStatus = LoadingStatus.LOADING) {
        loading.value = true;
        loadStatus.value = status;
    }

    function endLoading() {
        loading.value = false;
    }

    function showMessage(status: 'success'|'failure'|'', message: string) {
        toastOpt.value = {status, message};
    }

    function initIsDesktop() {
        isDesktop.value = window.matchMedia(`(min-width: ${DesktopMinWidth}px)`).matches;
        if(isDesktop.value) {
            const isMenuOpenD = localStorage.getItem('is-open-menu-d');
            if(isMenuOpenD !== null && isMenuOpenD === 'true') {
                isMenuOpen.value = true;
            }
        }
    }

    return {
        isMenuOpen: computed(() => isMenuOpen),
        openMenu, closeMenu, toggleMenu,
        loading: computed(() => loading),
        loadStatus: computed(() => loadStatus), LoadingStatus,
        startLoading, endLoading,
        toastOpt: computed(() => toastOpt),
        showMessage,
        isDesktop: computed(() => isDesktop),
        initIsDesktop,
    };
})
