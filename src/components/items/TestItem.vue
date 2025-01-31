<script setup lang="ts">
import type { Test } from '@/models/Test';
import { useTestItem } from '@/composables/items/testItem';

const { test } = defineProps<{test?: Test}>();
const {showMore, description, updatedAt, confirmTestdeletion, copyTestLink} = useTestItem(test);

</script>

<template>
    <div class="test-item-container" :class="{'placeholder-wave': !test}">
        <div class="test-item-content" v-if="test">
            <div class="test-item-title">{{ test.name }}</div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="test-description" :class="{'full-text': showMore}" ref="test-description" v-html="description"></div>
                <div class="test-property">Max Score: {{ test.max_points }}</div>
                <div class="test-property">Time Limit: {{ test.time_limit }}</div> 
                <div class="test-property" v-if="test.questionCount">Total number of questions: {{ test.questionCount }}</div> 
                <div class="test-last-update">Last updated at: {{ updatedAt }}</div>
            </div>
            <hr class="test-item-divider">
            <div class="test-item-actions">
                <RouterLink :to="{name: 'preview-test', params: {test_id: test.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                <RouterLink :to="{name: 'edit-test', params: {test_id: test.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                <button type="button" class="btn btn-danger" @click="confirmTestdeletion"><i class="bi bi-trash3-fill"></i></button>
                <button type="button" class="btn btn-warning" @click="copyTestLink"><i class="bi bi-copy"></i></button>
            </div>
        </div>
        <div class="test-item-content" v-else>
            <div class="test-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="placeholder col-12 bg-secondary" style="min-height: 4em;"></div>
                <div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div>
            </div>
            <hr class="test-item-divider">
            <div class="test-item-actions placeholder col-9 offset-3 placeholder-lg bg-secondary"></div>
        </div>
    </div>
</template>