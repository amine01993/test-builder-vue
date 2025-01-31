<script setup lang="ts">
import { useChoiceItem } from '@/composables/items/choiceItem';
import type { Choice } from '@/models/Choice';

const { test_id, question_id, choice } = defineProps<{test_id?: string, question_id?: string, choice?: Choice}>();
const {updatedAt, confirmChoicedeletion} = useChoiceItem(test_id, question_id, choice);

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
                    <div class="choice-property">Points: {{ choice.points }}</div>
                    <div class="choice-property">Correctness: {{ choice.is_correct }}</div> 
                    <div class="choice-property">Position: {{ choice.position }}</div> 
                    <div class="choice-last-update">Last updated at: {{ updatedAt }}</div>
                </div>
                <hr class="choice-item-divider">
                <div class="choice-item-actions">
                    <RouterLink :to="{name: 'edit-choice', params: {test_id, question_id, choice_id: choice.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmChoicedeletion"><i class="bi bi-trash3-fill"></i></button>
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