<script setup lang="ts">
import { QuestionType, type Question } from '@/models/Question';
import { useMainStore } from '@/stores/main';
import { useQuestionServiceStore } from '@/stores/questionService';
import { Modal } from 'bootstrap';
import { computed, onMounted, onUnmounted, useTemplateRef } from 'vue';


const { test_id, question } = defineProps<{test_id?: string, question?: Question}>();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteQuestion} = useQuestionServiceStore();
const questionConfirmDeletionModalEl = useTemplateRef('confirm-deletion-modal');
const currentDate = new Date();
let questionConfirmDeletionModal: Modal|null = null;

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

onMounted(() => {
    if(questionConfirmDeletionModalEl.value) {
        questionConfirmDeletionModal = new Modal(questionConfirmDeletionModalEl.value);
    }
});

onUnmounted(() => {
    if(questionConfirmDeletionModal) {
        questionConfirmDeletionModal.dispose();
    }
});

function confirmQuestiondeletion() {
    if(questionConfirmDeletionModal) {
        questionConfirmDeletionModal.show();
    }
}

async function deleteDQuestion() {
    if(questionConfirmDeletionModal) {
        questionConfirmDeletionModal.hide();
    }

    if(test_id && question) {
        try {
            startLoading();
            await deleteQuestion(test_id, question);
            console.log('question deleted with success');
            showMessage('success', 'Question deleted with success.');
        }
        catch(error) {
            console.log('question deletion error', error);
            showMessage('failure', 'Question can not be deleted.');
        }
        finally {
            endLoading();
        }
    }
}
</script>

<template>
    <div class="question-item-container" v-if="question">
        <div class="question-item-sort-handler">
            <i class="bi bi-arrow-down-up"></i>
        </div>
        <div class="question-item-content">
            <div class="question-item-title">{{ question.text }}</div>
            <hr class="question-item-divider">
            <div class="question-item-info">
                <div class="question-property">Max Points: {{ question.max_points }}</div>
                <div class="question-property">Type: {{ questionType }}</div> 
                <div class="question-property">Position: {{ question.position }}</div> 
                <div class="question-last-update">Last updated at: {{ updatedAt }}</div>
            </div>
            <hr class="question-item-divider">
            <div class="question-item-actions">
                <RouterLink :to="{name: 'preview-question', params: {test_id, question_id: question.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                <RouterLink :to="{name: 'edit-question', params: {test_id, question_id: question.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                <button type="button" class="btn btn-danger" @click="confirmQuestiondeletion"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>

        <div class="modal" tabindex="-1" ref="confirm-deletion-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this question: "{{ question.text }}"?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" @click="deleteDQuestion">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="question-item-container placeholder-wave" v-else>
        <div class="question-item-content">
            <div class="question-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div>
            <hr class="question-item-divider">
            <div class="question-item-info">
                <div class="placeholder col-12 bg-secondary" style="min-height: 4em;"></div>
                <div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div>
            </div>
            <hr class="question-item-divider">
            <div class="question-item-actions placeholder col-9 offset-3 placeholder-lg bg-secondary"></div>
        </div>
    </div>
</template>