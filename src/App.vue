<script setup lang="ts">
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { RouterView } from 'vue-router';
import { useAuthenticationStore } from './stores/auth';

const {auth, setUser} = useAuthenticationStore();

onAuthStateChanged(auth, (user) => {
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
});
</script>

<template>
    <RouterView />
</template>

<style scoped>

</style>
