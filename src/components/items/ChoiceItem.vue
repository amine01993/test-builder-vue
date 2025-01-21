<script setup lang="ts">
import { Modal } from 'bootstrap';
import { computed, onMounted, onUnmounted, useTemplateRef } from 'vue';
import type { Choice } from '@/models/Choice';
import { useChoiceServiceStore } from '@/stores/choiceService';
import { useMainStore } from '@/stores/main';


const { test_id, question_id, choice } = defineProps<{test_id?: string, question_id?: string, choice?: Choice}>();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteChoice} = useChoiceServiceStore();
const choiceConfirmDeletionModalEl = useTemplateRef('confirm-deletion-modal');
const currentDate = new Date();
let choiceConfirmDeletionModal: Modal|null = null;

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

onMounted(() => {
    if(choiceConfirmDeletionModalEl.value) {
        choiceConfirmDeletionModal = new Modal(choiceConfirmDeletionModalEl.value);
    }
});

onUnmounted(() => {
    if(choiceConfirmDeletionModal) {
        choiceConfirmDeletionModal.dispose();
    }
});

function confirmChoicedeletion() {
    if(choiceConfirmDeletionModal) {
        choiceConfirmDeletionModal.show();
    }
}

async function deleteDChoice() {
    if(choiceConfirmDeletionModal) {
        choiceConfirmDeletionModal.hide();
    }

    if(test_id && question_id && choice?.id) {
        try {
            startLoading();
            await deleteChoice(test_id, question_id, choice.id);
            console.log('choice deleted with success');
            showMessage('success', 'Choice deleted with success.');
        }
        catch(error) {
            console.log('choice deletion error', error);
            showMessage('failure', 'Choice can not be deleted.');
        }
        finally {
            endLoading();
        }
    }
}
</script>

<template>
    <div class="choice-item-container" v-if="choice">
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

        <div class="modal" tabindex="-1" ref="confirm-deletion-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this choice: "{{ choice.text }}"?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" @click="deleteDChoice">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="choice-item-container placeholder-wave" v-else>
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
    </div>
</template>