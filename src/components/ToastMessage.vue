<script setup lang="ts">
import { Toast } from 'bootstrap';
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { useMainStore } from '@/stores/main';

const {toastOpt} = useMainStore();
const toastEl = useTemplateRef('toast-message');
let toast: Toast|null = null;
let className = '';

onMounted(() => {
    if(toastEl.value) {
        toast = new Toast(toastEl.value);
        toastEl.value.addEventListener('hidden.bs.toast', resetColor);
    }
});

onUnmounted(() => {
    if(toast) toast.dispose();

    if(toastEl.value) {
        toastEl.value.removeEventListener('hidden.bs.toast', resetColor);
    }
});

watch(toastOpt, () => {
    if(toastEl.value && toast) {
        if(className) toastEl.value.classList.remove(className);

        switch(toastOpt.value.status) {
            case '':
                className = '';
                break;
            case 'success':
                className = 'text-bg-success';
                break;
            case 'failure':
                className = 'text-bg-danger';
                break;
        }

        if(className) toastEl.value.classList.add(className);

        toast.show();
    }
});

function resetColor() {
    if(className) toastEl.value!.classList.remove(className);    
}
</script>

<template>
    <div class="toast toast-message border-0" role="alert" aria-live="assertive" aria-atomic="true" ref="toast-message">
        <div class="d-flex">
            <div class="toast-body">
                {{ toastOpt.message }}
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.toast-message.toast {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
}
</style>