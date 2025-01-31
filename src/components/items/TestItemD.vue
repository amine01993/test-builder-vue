<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Test } from '@/models/Test';
import { useTestItem } from '@/composables/items/testItem';

const { test } = defineProps<{test?: Test}>();
const {showMore, description, updatedAt, confirmTestdeletion, copyTestLink} = useTestItem(test);

</script>

<template>
    <tr class="test-item-container" :class="{'placeholder-wave': !test}">
        <template v-if="test">
            <th>{{ test.name }}</th>
            <td class="test-description" :class="{'full-text': showMore}" ref="test-description" v-html="description"></td>
            <td class="test-property">{{ test.max_points }}</td>
            <td class="test-property">{{ test.time_limit }}</td>
            <td class="test-property">{{ test.questionCount }}</td>
            <td class="test-last-update">{{ updatedAt }}</td>
            <td class="test-item-actions-container">
                <div class="test-item-actions">
                    <RouterLink :to="{name: 'preview-test', params: {test_id: test.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                    <RouterLink :to="{name: 'edit-test', params: {test_id: test.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmTestdeletion"><i class="bi bi-trash3-fill"></i></button>
                    <button type="button" class="btn btn-warning" @click="copyTestLink"><i class="bi bi-copy"></i></button>
                </div>
            </td>
        </template>
        <template v-else>
            <td colspan="7" class="placeholder bg-secondary"></td>
        </template>
    </tr>
</template>