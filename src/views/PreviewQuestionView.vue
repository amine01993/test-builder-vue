<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import Breadcrumb from '@/components/items/Breadcrumb.vue';

const { test_id, question_id } = defineProps<{test_id: string, question_id: string}>();

</script>

<template>
    <AppHeader />
    <Breadcrumb :test_id="test_id" />
    <AppMenu />

    <div class="app-main">
    </div>
</template>
