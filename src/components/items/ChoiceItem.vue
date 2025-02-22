<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLocalizationStore } from '@/stores/localization';
import type { Choice } from '@/models/Choice';
import { useChoiceItem } from '@/composables/items/choiceItem';

const {t} = useI18n();
const { test_id, question_id, choice } = defineProps<{test_id?: string, question_id?: string, choice?: Choice}>();
const {updatedAt, confirmChoicedeletion} = useChoiceItem(test_id, question_id, choice);
const {spaceLabel} = useLocalizationStore();
</script>

<template>
    <div class="choice-item-container" :class="{'placeholder-wave': !choice}">
        <template v-if="choice">
            <div class="choice-item-sort-handler">
                <i class="bi bi-arrow-down-up"></i>
            </div>
            <div class="choice-item-content">
                <div class="choice-item-title">{{ choice.text }}</div>
                <hr class="choice-item-divider">
                <div class="choice-item-info">
                    <div class="choice-property">{{ t('Points') }}{{ spaceLabel }}: {{ choice.points }}</div>
                    <div class="choice-property">{{ t('Correctness') }}{{ spaceLabel }}: {{ choice.is_correct }}</div> 
                    <div class="choice-property">{{ t('Position') }}{{ spaceLabel }}: {{ choice.position }}</div> 
                    <div class="choice-last-update">{{ t('Last updated at') }}{{ spaceLabel }}: {{ updatedAt }}</div>
                </div>
                <hr class="choice-item-divider">
                <div class="choice-item-actions">
                    <RouterLink :to="{name: 'edit-choice', params: {test_id, question_id, choice_id: choice.id}}" class="btn btn-success" :aria-label="t('edit choice &quot;{text}&quot;', {text: choice.text})">
                        <i class="bi bi-pencil-fill"></i>
                    </RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmChoicedeletion" :aria-label="t('delete choice &quot;{text}&quot;', {text: choice.text})">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="choice-item-content">
                <div class="choice-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div>
                <hr class="choice-item-divider">
                <div class="choice-item-info">
                    <div class="placeholder col-12 bg-secondary" style="min-height: 4em;"></div>
                    <div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div>
                </div>
                <hr class="choice-item-divider">
                <div class="choice-item-actions placeholder col-9 offset-3 placeholder-lg bg-secondary"></div>
            </div>
        </template>
    </div>
</template>