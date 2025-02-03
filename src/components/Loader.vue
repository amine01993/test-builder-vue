<script setup lang="ts">
import { Modal } from 'bootstrap';
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/main';

const {t} = useI18n();
const {loading, loadStatus, LoadingStatus} = useMainStore();
const modalEl = useTemplateRef('loader-modal');
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
    if(modalEl.value && modal) {
        if(loading.value) modal.show();
        else modal.hide();
    }
});
</script>

<template>
    <div class="modal loader" tabindex="-1" ref="loader-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="spinner-border text-light" role="status"></div>
                    <template v-if="loadStatus === LoadingStatus.CONNECTING">{{ t('Connecting') }} ...</template>
                    <template v-else>{{ t('Loading') }} ...</template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.loader.modal {
    .modal-dialog {
        width: 225px;
        text-align: center;
        margin: auto;

        .modal-content {
            background-color: vars.$app-blue;
            color: vars.$app-white;
            font-style: italic;

            .modal-body {
                display: flex;
                justify-content: center;
                gap: 2vh;
                align-items: center;
            }
        }
    }
}
</style>