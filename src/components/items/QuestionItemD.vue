<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useModalStore } from '@/stores/modal';
import { QuestionType, type Question } from '@/models/Question';

const { test_id, question } = defineProps<{test_id?: string, question?: Question}>();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteQuestion} = useQuestionServiceStore();
const {confirm: confirmDeletion} = useModalStore();
const currentDate = new Date();

const questionType = computed(() => {
    switch(question?.type) {
        case QuestionType.MultipleChoice:
            return 'Multiple Choice';
        case QuestionType.Number:
            return 'Number';
        case QuestionType.SingleChoice:
            return 'Single Choice';
        default:
            return 'Text';
    }
});
const updatedAt = computed(() => {
    const updated_at = question!.updated_at!.toDate();
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(updated_at);
});

function confirmQuestiondeletion() {
    if(question) {
        confirmDeletion(
            `Are you sure you want to delete this question: "${question.text}"?`,
            'Delete', deleteDQuestion
        );
    }
}

async function deleteDQuestion() {
    if(test_id && question?.id) {
        try {
            startLoading();
            await deleteQuestion(test_id, question.id);
            showMessage('success', 'Question deleted with success.');
        }
        catch(error) {
            showMessage('failure', 'Question can not be deleted.');
        }
        finally {
            endLoading();
        }
    }
}
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