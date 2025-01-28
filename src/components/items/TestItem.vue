<script setup lang="ts">
import type { Test } from '@/models/Test';
import { useMainStore } from '@/stores/main';
import { useTestServiceStore } from '@/stores/testService';
import { Modal } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';

const { test } = defineProps<{test?: Test}>();
const router = useRouter();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteTest} = useTestServiceStore();
const testDescriptionEl = useTemplateRef('test-description');
const testConfirmDeletionModalEl = useTemplateRef('confirm-deletion-modal');
const showMore = ref(false);
const currentDate = new Date();
let testConfirmDeletionModal: Modal|null = null;
const description = computed(() => {
    if(showMore.value) {
        return test!.description.replace(/\n/g, "<br />");
    }
    else {
        return test!.description.replace(/\n/g, "");
    }
});
const updatedAt = computed(() => {
    const updated_at = test!.updated_at!.toDate();
        return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(updated_at);
});

onMounted(() => {
    if(testDescriptionEl.value) {
        testDescriptionEl.value.addEventListener('click', showMoreDescription);
    }
    if(testConfirmDeletionModalEl.value) {
        testConfirmDeletionModal = new Modal(testConfirmDeletionModalEl.value);
    }
});

onUnmounted(() => {
    if(testDescriptionEl.value) {
        testDescriptionEl.value.removeEventListener('click', showMoreDescription);
    }

    if(testConfirmDeletionModal) {
        testConfirmDeletionModal.dispose();
    }
});

function showMoreDescription() {
    showMore.value = true;
}

function confirmTestdeletion() {
    if(testConfirmDeletionModal) {
        testConfirmDeletionModal.show();
    }
}

async function deleteDTest() {
    if(testConfirmDeletionModal) {
        testConfirmDeletionModal.hide();
    }

    if(test?.id) {
        try {
            startLoading();
            await deleteTest(test.id);
            showMessage('success', 'Test deleted with success.');
        }
        catch(error) {
            showMessage('failure', 'Test can not be deleted.');
        }
        finally {
            endLoading();
        }
    }
}

function copyTestLink() {
    const routeLocation = router.resolve({name: 'test-portal', params: {test_id: test!.id}});
    const testLink = location.origin + routeLocation.fullPath;
    navigator.clipboard.writeText(testLink)
    .then(() => {
        showMessage('success', 'Test link copied!');
    })
    .catch(() => {
        showMessage('failure', 'Sorry, Test link couldn\'t be copied!');
    });
}
</script>

<template>
    <div class="test-item-container" :class="{'placeholder-wave': !test}">
        <div class="test-item-content" v-if="test">
            <div class="test-item-title">{{ test.name }}</div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="test-description" :class="{'full-text': showMore}" ref="test-description" v-html="description"></div>
                <div class="test-property">Max Score: {{ test.max_points }}</div>
                <div class="test-property">Time Limit: {{ test.time_limit }}</div> 
                <div class="test-property" v-if="test.questionCount">Total number of questions: {{ test.questionCount }}</div> 
                <div class="test-last-update">Last updated at: {{ updatedAt }}</div>
            </div>
            <hr class="test-item-divider">
            <div class="test-item-actions">
                <RouterLink :to="{name: 'preview-test', params: {test_id: test.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                <RouterLink :to="{name: 'edit-test', params: {test_id: test.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                <button type="button" class="btn btn-danger" @click="confirmTestdeletion"><i class="bi bi-trash3-fill"></i></button>
                <button type="button" class="btn btn-warning" @click="copyTestLink"><i class="bi bi-copy"></i></button>
            </div>
        </div>
        <div class="test-item-content" v-else>
            <div class="test-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="placeholder col-12 bg-secondary" style="min-height: 4em;"></div>
                <div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div>
            </div>
            <hr class="test-item-divider">
            <div class="test-item-actions placeholder col-9 offset-3 placeholder-lg bg-secondary"></div>
        </div>

        <div class="modal" tabindex="-1" ref="confirm-deletion-modal" v-if="test">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this test: "{{ test.name }}"?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" @click="deleteDTest">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>