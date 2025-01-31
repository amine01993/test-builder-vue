<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { useTestServiceStore } from '@/stores/testService';
import { useModalStore } from '@/stores/modal';
import type { Test } from '@/models/Test';

const { test } = defineProps<{test?: Test}>();
const router = useRouter();
const {showMessage, startLoading, endLoading} = useMainStore();
const {deleteTest} = useTestServiceStore();
const {confirm: confirmDeletion} = useModalStore();
const testDescriptionEl = useTemplateRef('test-description');
const showMore = ref(false);
const currentDate = new Date();
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
});

onUnmounted(() => {
    if(testDescriptionEl.value) {
        testDescriptionEl.value.removeEventListener('click', showMoreDescription);
    }
});

function showMoreDescription() {
    showMore.value = true;
}

function confirmTestdeletion() {
    if(test) {
        confirmDeletion(
            `Are you sure you want to delete this test: "${test.name}"?`,
            'Delete', deleteDTest
        );
    }
}

async function deleteDTest() {
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
    <tr class="test-item-container" :class="{'placeholder-wave': !test}">
        <template v-if="test">
            <th>{{ test.name }}</th>
            <td class="test-description" :class="{'full-text': showMore}" ref="test-description" v-html="description"></td>
            <td class="test-property">{{ test.max_points }}</td>
            <td class="test-property">{{ test.time_limit }}</td>
            <td class="test-property">{{ test.questionCount }}</td>
            <td class="test-last-update">{{ updatedAt }}</td>
            <td class="test-item-actions-container">
                <div class="test-item-actions">
                    <RouterLink :to="{name: 'preview-test', params: {test_id: test.id}}" class="btn btn-primary"><i class="bi bi-eye-fill"></i></RouterLink>
                    <RouterLink :to="{name: 'edit-test', params: {test_id: test.id}}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></RouterLink>
                    <button type="button" class="btn btn-danger" @click="confirmTestdeletion"><i class="bi bi-trash3-fill"></i></button>
                    <button type="button" class="btn btn-warning" @click="copyTestLink"><i class="bi bi-copy"></i></button>
                </div>
            </td>
        </template>
        <template v-else>
            <td colspan="7" class="placeholder bg-secondary"></td>
        </template>
    </tr>
</template>