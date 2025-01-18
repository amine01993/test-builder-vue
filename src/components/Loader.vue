<script setup lang="ts">
import { Modal } from 'bootstrap';
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { useMainStore } from '@/stores/main';

const {loading} = useMainStore();
const modalEl = useTemplateRef('confirm-deletion-modal');
let modal: Modal|null = null;

onMounted(() => {
    if(modalEl.value) {
        modal = new Modal(modalEl.value, {backdrop: 'static'});
    }
});

onUnmounted(() => {
    if(modal) modal.dispose();
});

watch(loading, () => {
    console.log('watching.loading', loading.value);
    if(modalEl.value && modal) {
        if(loading.value) modal.show();
        else modal.hide();
    }
});
</script>

<template>
    <div class="modal loader" tabindex="-1" ref="confirm-deletion-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    Loading ...
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.loader.modal {
    .modal-dialog {
        width: 160px;
        text-align: center;
        margin: auto;

        .modal-content {
            background-color: vars.$app-blue;
            color: vars.$app-white;
            font-style: italic;
        }
    }
}
</style>