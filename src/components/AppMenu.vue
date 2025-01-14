<script setup lang="ts">
import { useMainStore } from '@/stores/main';

const { isMenuOpen, closeMenu } = useMainStore();
</script>

<template>
    <div class="app-menu-overlay" :class="{'open': isMenuOpen}" @click="closeMenu"></div>
    <div class="app-menu" :class="{'open': isMenuOpen}">
        <div class="menu-item">
            <RouterLink exactActiveClass="selected-item" :to="{name: 'home'}">
                Home
            </RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>