<script setup lang="ts">
import { computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMainStore } from './stores/main';
import { useAuthenticationStore } from './stores/auth';
import { useLocalizationStore } from './stores/localization';
import Loader from './components/Loader.vue';
import ToastMessage from './components/ToastMessage.vue';
import ConfirmationModal from './components/ConfirmationModal.vue';

const {t} = useI18n();
const {initLocale} = useLocalizationStore();
const {LoadingStatus, loadStatus, loading, startLoading, endLoading, initIsDesktop} = useMainStore();
const {auth, setUser} = useAuthenticationStore();

const title = computed(() => t('Test Builder App'));
const metaDescription = computed(() => t('A Web App for creating customized Tests and sharing them with others through a unique link, while keeping track of all test results.'));
const metaDescriptionElem = document.querySelector('meta[name="description"]');

watchEffect(() => {
    document.title = title.value;
    if(metaDescriptionElem) {
        metaDescriptionElem.setAttribute('content', metaDescription.value);
    }
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
