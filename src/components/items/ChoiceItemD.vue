<script setup lang="ts">
import { computed } from 'vue';
import { useChoiceServiceStore } from '@/stores/choiceService';
import { useMainStore } from '@/stores/main';
import { useModalStore } from '@/stores/modal';
import type { Choice } from '@/models/Choice';

const { test_id, question_id, choice } = defineProps<{test_id?: string, question_id?: string, choice?: Choice}>();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteChoice} = useChoiceServiceStore();
const {confirm: confirmDeletion} = useModalStore();
const currentDate = new Date();

const updatedAt = computed(() => {
    const updated_at = choice!.updated_at!.toDate();
        return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(updated_at);
});

function confirmChoicedeletion() {
    if(choice) {
        confirmDeletion(
            `Are you sure you want to delete this choice: "${choice.text}"?`,
            'Delete', deleteDChoice
        );
    }
}

async function deleteDChoice() {
    if(test_id && question_id && choice?.id) {
        try {
            startLoading();
            await deleteChoice(test_id, question_id, choice.id);
            showMessage('success', 'Choice deleted with success.');
        }
        catch(error) {
            showMessage('failure', 'Choice can not be deleted.');
        }
        finally {
            endLoading();
        }
    }
}
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