<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLocalizationStore } from '@/stores/localization';
import type { Question } from '@/models/Question';
import { useQuestionItem } from '@/composables/items/questionItem';

const {t} = useI18n();
const { test_id, question } = defineProps<{test_id?: string, question?: Question}>();
const {spaceLabel} = useLocalizationStore();
const {questionType, updatedAt, confirmQuestiondeletion} = useQuestionItem(test_id, question);

</script>

<template>
    <div class="question-item-container" :class="{'placeholder-wave': !question}">
        <template v-if="question">
            <div class="question-item-sort-handler">
                <i class="bi bi-arrow-down-up"></i>
            </div>
            <div class="question-item-content">
                <div class="question-item-title">{{ question.text }}</div>
                <hr class="question-item-divider">
                <div class="question-item-info">
                    <div class="question-property">{{ t('Max Points') }}{{ spaceLabel }}: {{ question.max_points }}</div>
                    <div class="question-property">{{ t('Type') }}{{ spaceLabel }}: {{ questionType }}</div> 
                    <div class="question-property">{{ t('Position') }}{{ spaceLabel }}: {{ question.position }}</div> 
                    <div class="question-property" v-if="question.choiceCount">{{ t('Total number of choices') }}{{ spaceLabel }}: {{ question.choiceCount }}</div> 
                    <div class="question-last-update">{{ t('Last updated at') }}: {{ updatedAt }}</div>
                </div>
                <hr class="question-item-divider">
                <div class="question-item-actions">
                    <RouterLink :to="{name: 'preview-question', params: {test_id, question_id: question.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                    <RouterLink :to="{name: 'edit-question', params: {test_id, question_id: question.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmQuestiondeletion"><i class="bi bi-trash3-fill"></i></button>
                </div>
            </div>
        </template>
        <template v-else>
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
        </template>
    </div>
</template>