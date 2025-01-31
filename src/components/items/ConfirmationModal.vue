<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { Modal } from 'bootstrap';
import { useModalStore } from '@/stores/modal';

const confirmModalEl = useTemplateRef('confirm-deletion-modal');
const {open, content, actionText, actionCb} = useModalStore();
let confirmModal: Modal|null = null;

watch(open, () => {
    if(confirmModal) {
        if(open.value) confirmModal.show();
        else confirmModal.hide();
    }
})

onMounted(() => {
    if(confirmModalEl.value) {
        confirmModal = new Modal(confirmModalEl.value);
    }
});

onUnmounted(() => {
    if(confirmModal) {
        confirmModal.dispose();
    }
});

async function confirmationAction() {
    open.value = false;
    if(actionCb.value) {
        actionCb.value();
    }
}

</script>

<template>
    <div class="modal" tabindex="-1" ref="confirm-deletion-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ content }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <template v-if="actionCb">
                        <button type="button" class="btn btn-danger" @click="confirmationAction">{{ actionText }}</button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>