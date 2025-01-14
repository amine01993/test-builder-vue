<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';
import { signOut } from 'firebase/auth';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { Dropdown } from 'bootstrap';

const router = useRouter();
const { toggleMenu } = useMainStore();
const { user, auth, isAnonymous } = useAuthenticationStore();
const userDropdown = useTemplateRef('user-dropdown');
let dropdown: null|Dropdown = null;

onMounted(() => {
    // const dropdownEl = document.querySelector('.app-header .user.dropdown');
    if(userDropdown.value) {
        console.log('new Dropdown', userDropdown.value);
        dropdown = new Dropdown(userDropdown.value);
    }
});

onUnmounted(() => {
    if(dropdown) {
        console.log('dropdown dispose')
        dropdown.dispose();
        dropdown = null;
    }
});

async function signOutUser() {
    try {
        await signOut(auth);
        console.log('signOut successful');
        // redirect to home page
        router.push({name: 'home'});
    }
    catch(error) {
        console.log('error', error);
    }
}
</script>

<template>
    <div class="app-header">
        <div class="left-side">
            <div class="menu-btn" @click="toggleMenu">
                <i class="bi bi-list"></i>
            </div>
            <div class="logo">
                <RouterLink :to="{name: 'home'}">
                    <img alt="Test Builder Logo" src="@/assets/logo.svg">
                </RouterLink>
            </div>
        </div>
        <div class="right-side">
            <div class="localization">
                <i class="bi bi-globe"></i> EN
            </div>
            <div class="user dropdown" ref="user-dropdown">
                <button type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-person-circle"></i>
                </button>
                <ul class="dropdown-menu">
                    <template v-if="!isAnonymous(user)">
                        <li><span class="dropdown-item-text">{{ user.email }}</span></li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item di-icon" href="#" @click.prevent="signOutUser">
                                <i class="bi bi-box-arrow-right"></i><span>Sign Out</span>
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li><span class="dropdown-item-text">Anonymous</span></li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <RouterLink class="dropdown-item di-icon" :to="{name: 'login'}">
                                <i class="bi bi-box-arrow-in-right"></i><span>Sign In</span>
                            </RouterLink>
                        </li>
                    </template>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>