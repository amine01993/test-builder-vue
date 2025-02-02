<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMainStore } from './stores/main';
import { useAuthenticationStore } from './stores/auth';
import Loader from './components/Loader.vue';
import ToastMessage from './components/ToastMessage.vue';
import ConfirmationModal from './components/items/ConfirmationModal.vue';
import { useLocalizationStore } from './stores/localization';

const {t} = useI18n();
const {initLocale} = useLocalizationStore();
const {LoadingStatus, loadStatus, loading, startLoading, endLoading, initIsDesktop} = useMainStore();
const {auth, setUser} = useAuthenticationStore();

const title = computed(() => t('Test Builder App'));
watch(title, () => {
    document.title = title.value;
});

initIsDesktop();

const onAuthEventDispose = onAuthStateChanged(auth, (user) => {
    console.log('onAuthStateChanged', user)
    if(user === null) { // signin anonymously
        signInAnonymously(auth)
        .then(() => {
            // signed in
        })
        .catch(error => {
            console.log('signInAnonymously.error');
            console.log(error.code, error.message);
        });
    }
    setUser(user);

    initLocale(user)
    .then(() => {})
    .catch(error => {
        console.log('initlocale.error');
        console.log(error.code, error.message);
    });

    if(loading.value && loadStatus.value === LoadingStatus.CONNECTING) {
        endLoading();
    }
});

onMounted(() => {
    startLoading(LoadingStatus.CONNECTING);
});

onUnmounted(() => {
    onAuthEventDispose();
});
</script>

<template>
    <RouterView />
    <Loader />
    <ToastMessage />
    <ConfirmationModal />
</template>

<style scoped>

</style>
