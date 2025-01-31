<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';
import { signOut } from 'firebase/auth';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { Dropdown } from 'bootstrap';

const router = useRouter();
const { toggleMenu, showMessage } = useMainStore();
const { user, auth, isAnonymous } = useAuthenticationStore();
const userDropdown = useTemplateRef('user-dropdown');
let dropdown: null|Dropdown = null;

onMounted(() => {
    if(userDropdown.value) {
        dropdown = new Dropdown(userDropdown.value);
    }
});

onUnmounted(() => {
    if(dropdown) {
        dropdown.dispose();
        dropdown = null;
    }
});

async function signOutUser() {
    try {
        await signOut(auth);
        // redirect to home page
        router.push({name: 'home'});
    }
    catch(error) {
        showMessage('failure', 'Failed to Sign out.')
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
                        <li>
                            <span class="dropdown-item-text" v-if="user!.displayName">Welcome {{ user!.displayName }}</span>
                            <span class="dropdown-item-text" v-else>{{ user!.email }}</span>
                        </li>
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