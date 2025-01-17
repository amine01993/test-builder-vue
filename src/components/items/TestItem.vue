<script setup lang="ts">
import type { Test } from '@/models/Test';
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';


const { test } = defineProps<{test: Test}>();
const testDescriptionEl = useTemplateRef('test-description');
const showMore = ref(false);
const currentDate = new Date();
const description = computed(() => {
    if(showMore.value) {
        return test.description.replace(/\n/g, "<br />");
    }
    else {
        return test.description.replace(/\n/g, "");
    }
});
const updatedAt = computed(() => {
    const updated_at = test.updated_at.toDate();
        return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(updated_at);
});

onMounted(() => {
    if(testDescriptionEl.value) {
        testDescriptionEl.value.addEventListener('click', showMoreDescription);
    }
});

onUnmounted(() => {
    if(testDescriptionEl.value) {
        testDescriptionEl.value.removeEventListener('click', showMoreDescription);
    }
});

function showMoreDescription() {
    showMore.value = true;
}

function deleteTest() {

}

function copyTestLink() {

}
</script>

<template>
    <div class="test-item-container">
        <!-- <div class="test-item-sort-handler">
            <i class="bi bi-arrow-down-up"></i>
        </div> -->
        <div class="test-item-content">
            <div class="test-item-title">{{ test.name }}</div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="test-description" :class="{'full-text': showMore}" ref="test-description" v-html="description"></div>
                <div class="test-property">Max Score: {{ test.max_points }}</div>
                <div class="test-property">Time Limit: {{ test.time_limit }}</div> 
                <div class="test-last-update">Last updated at: {{ updatedAt }}</div>
            </div>
            <hr class="test-item-divider">
            <div class="test-item-actions">
                <RouterLink :to="{name: 'view-test', params: {test_id: test.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                <RouterLink :to="{name: 'edit-test', params: {test_id: test.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                <button type="button" class="btn btn-danger" @click="deleteTest"><i class="bi bi-trash3-fill"></i></button>
                <button type="button" class="btn btn-warning" @click="copyTestLink"><i class="bi bi-copy"></i></button>
            </div>
        </div>
    </div>
</template>