<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import Breadcrumb from '@/components/items/Breadcrumb.vue';

const { test_id } = defineProps<{test_id: string}>();

</script>

<template>
    <AppHeader />
    <Breadcrumb />
    <AppMenu />

    <div class="app-main">
    </div>
</template>

<style scoped lang="scss">

</style>