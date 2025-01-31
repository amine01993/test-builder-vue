import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export const useModalStore = defineStore('modal', () => {

    const open = ref(false);
    const content = ref('');
    const actionText = ref('');
    const actionCb: Ref<(() => void)|undefined> = ref();

    function confirm(_content: string, _actionText: string, action: (() => void)) {
        content.value = _content;
        actionText.value = _actionText;
        actionCb.value = action;
        open.value = true;
    }

    return {
        open: computed(() => open),
        content: computed(() => content),
        actionText: computed(() => actionText),
        actionCb: computed(() => actionCb),
        confirm,
    };
});