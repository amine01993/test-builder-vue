<script setup lang="ts">
import { useMainStore } from '@/stores/main';
import AppHeader from './AppHeader.vue';
import AppMenu from './AppMenu.vue';
import Breadcrumb from './Breadcrumb.vue';

const { test_id, question_id } = defineProps<{test_id?: string, question_id?: string}>();
const {isMenuOpen} = useMainStore();

</script>

<template>
    <AppHeader />
    <AppMenu />

    <div class="app-container" :class="{'open': isMenuOpen}">
        <Breadcrumb :test_id="test_id" :question_id="question_id" />

        <slot />
    </div>
</template>

<style scoped lang="scss">
</style>