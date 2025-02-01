<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { computed, onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Dropdown } from 'bootstrap';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';

const {locale, t} = useI18n();
const router = useRouter();
const route = useRoute();
const { toggleMenu, showMessage, toggleLocale } = useMainStore();
const { user, auth, isAnonymous } = useAuthenticationStore();
const userDropdown = useTemplateRef('user-dropdown');
let dropdown: null|Dropdown = null;

const title = computed(() => t('Test Builder App'));
const lang = computed(() => locale.value === 'fr' ? 'FR' : 'EN');

watch(title, () => {
    document.title = title.value
});

function updateLocale() {
    toggleLocale(locale, router, route);
}

if(route.params.locale && typeof route.params.locale === 'string') {
    locale.value = route.params.locale;
}

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
            <div class="localization" @click="updateLocale">
                <i class="bi bi-globe"></i> {{ lang }}
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