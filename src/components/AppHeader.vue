<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Dropdown } from 'bootstrap';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';
import { useLocalizationStore } from '@/stores/localization';

const {locale, t} = useI18n();
const router = useRouter();
const {lang, toggleLocale} = useLocalizationStore();
const { isMenuOpen, toggleMenu, showMessage } = useMainStore();
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
        showMessage('failure', t('Failed to Sign out.'))
    }
}
</script>

<template>
    <div class="app-header">
        <div class="left-side">
            <button class="menu-btn" @click="toggleMenu" :aria-label="isMenuOpen ? t('close menu') : t('open menu')">
                <i class="bi bi-list"></i>
            </button>
            <div class="logo">
                <RouterLink :to="{name: 'home'}">
                    <img :alt="t('Test Builder Logo')" src="@/assets/logo.svg">
                </RouterLink>
            </div>
        </div>
        <div class="right-side">
            <button class="localization" @click="toggleLocale" :aria-label="locale === 'fr' ? 'switch to english' : 'passer au français'">
                <i class="bi bi-globe"></i> {{ lang }}
            </button>
            <div class="user dropdown" ref="user-dropdown">
                <button type="button" data-bs-toggle="dropdown" aria-label="{{ t('open user menu dropdown') }}">
                    <i class="bi bi-person-circle"></i>
                </button>
                <ul class="dropdown-menu">
                    <template v-if="!isAnonymous(user)">
                        <li>
                            <span class="dropdown-item-text" v-if="user!.displayName">{{ t('Welcome {name}', {name: user!.displayName}) }}</span>
                            <span class="dropdown-item-text" v-else>{{ user!.email }}</span>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item di-icon" href="#" @click.prevent="signOutUser">
                                <i class="bi bi-box-arrow-right"></i><span>{{ t('Sign Out') }}</span>
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li><span class="dropdown-item-text">{{ t('Anonymous') }}</span></li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <RouterLink class="dropdown-item di-icon" :to="{name: 'login'}">
                                <i class="bi bi-box-arrow-in-right"></i><span>{{ t('Sign In') }}</span>
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