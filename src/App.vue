<script setup lang="ts">
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useMainStore } from './stores/main';
import { useAuthenticationStore } from './stores/auth';
import Loader from './components/Loader.vue';
import ToastMessage from './components/ToastMessage.vue';
import ConfirmationModal from './components/items/ConfirmationModal.vue';

const {LoadingStatus, loadStatus, loading, startLoading, endLoading, initIsDesktop} = useMainStore();
const {auth, setUser} = useAuthenticationStore();

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
