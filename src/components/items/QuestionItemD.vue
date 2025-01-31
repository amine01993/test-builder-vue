<script setup lang="ts">
import type { Question } from '@/models/Question';
import { useQuestionItem } from '@/composables/items/questionItem';

const { test_id, question } = defineProps<{test_id?: string, question?: Question}>();
const {questionType, updatedAt, confirmQuestiondeletion} = useQuestionItem(test_id, question);
</script>

<template>
    <tr class="question-item-container" :class="{'placeholder-wave': !question}">
        <template v-if="question">
            <td class="question-item-sort-handler-container">
                <div class="question-item-sort-handler">
                    <i class="bi bi-arrow-down-up"></i>
                </div>
            </td>
            <th>{{ question.text }}</th>
            <td class="question-property">{{ question.max_points }}</td>
            <td class="question-property">{{ questionType }}</td>
            <td class="question-property">{{ question.position }}</td>
            <td class="question-property">{{ question.choiceCount }}</td>
            <td class="question-last-update">{{ updatedAt }}</td>
            <td class="question-item-actions-container">
                <div class="question-item-actions">
                    <RouterLink :to="{name: 'preview-question', params: {test_id, question_id: question.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                    <RouterLink :to="{name: 'edit-question', params: {test_id, question_id: question.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmQuestiondeletion"><i class="bi bi-trash3-fill"></i></button>
                </div>
            </td>
        </template>
        <template v-else>
            <td colspan="8" class="placeholder bg-secondary"></td>
        </template>
    </tr>
</template>