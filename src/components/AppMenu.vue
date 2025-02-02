<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/main';

const {t} = useI18n();
const { isMenuOpen, closeMenu } = useMainStore();
</script>

<template>
    <div class="app-menu-overlay" :class="{'open': isMenuOpen}" @click="closeMenu"></div>
    <div class="app-menu" :class="{'open': isMenuOpen}">
        <div class="menu-item">
            <RouterLink exactActiveClass="selected-item" :to="{name: 'home'}" @click="closeMenu">
                {{ t('Home') }}
            </RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink exactActiveClass="selected-item" :to="{name: 'tests'}" @click="closeMenu">
                {{ t('Tests') }}
            </RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink exactActiveClass="selected-item" :to="{name: 'settings'}" @click="closeMenu">
                {{ t('Settings') }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>