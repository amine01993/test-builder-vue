<script setup lang="ts">
import type { Choice } from '@/models/Choice';
import { useChoiceItem } from '@/composables/items/choiceItem';

const { test_id, question_id, choice } = defineProps<{test_id?: string, question_id?: string, choice?: Choice}>();
const {updatedAt, confirmChoicedeletion} = useChoiceItem(test_id, question_id, choice);
</script>

<template>
    <tr class="choice-item-container" :class="{'placeholder-wave': !choice}">
        <template v-if="choice">
            <td class="choice-item-sort-handler-container">
                <div class="choice-item-sort-handler">
                    <i class="bi bi-arrow-down-up"></i>
                </div>
            </td>
            <th>{{ choice.text }}</th>
            <td class="choice-property">{{ choice.points }}</td>
            <td class="choice-property">{{ choice.is_correct }}</td>
            <td class="choice-property">{{ choice.position }}</td>
            <td class="choice-last-update">{{ updatedAt }}</td>
            <td class="choice-item-actions-container">
                <div class="choice-item-actions">
                    <RouterLink :to="{name: 'edit-choice', params: {test_id, question_id, choice_id: choice.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmChoicedeletion"><i class="bi bi-trash3-fill"></i></button>
                </div>
            </td>
        </template>
        <template v-else>
            <td colspan="7" class="placeholder bg-secondary"></td>
        </template>
    </tr>
</template>