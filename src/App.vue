<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import { RouterView } from 'vue-router';
import { useAuthenticationStore } from './stores/auth';

const {auth, setUser} = useAuthenticationStore();

onAuthStateChanged(auth, (user) => {
    console.log('onAuthStateChanged', user)
    setUser(user);
});
</script>

<template>
    <RouterView />
</template>

<style scoped>

</style>
