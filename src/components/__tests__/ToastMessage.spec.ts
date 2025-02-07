import { createTestingPinia } from "@pinia/testing";
import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { nextTick } from "vue";
import i18n from "@/i18n";
import router from "@/router";
import ToastMessage from '@/components/ToastMessage.vue';
import { useMainStore } from "@/stores/main";

describe('ToastMessage', () => {

    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        wrapper = mount(ToastMessage, {
            global: {
                plugins: [
                    router,
                    i18n,
                    createTestingPinia({
                        createSpy: vitest.fn,
                        stubActions: false,
                    }),
                ],
            },
        });
    });

    it('show default message', async () => {
        const {showMessage} = useMainStore();
        const toast = wrapper?.find({ref: 'toast-message'});
        const message = toast?.find('.toast-body');
        const txt = 'Welcome';

        expect(toast?.exists()).toBe(true);
        expect(message?.exists()).toBe(true);

        showMessage('', txt);
        await nextTick();

        expect(toast?.classes('show')).toBe(true);
        expect(message?.text()).toContain(txt);
    });

    it('show success message', async () => {
        const {showMessage} = useMainStore();
        const toast = wrapper?.find({ref: 'toast-message'});
        const message = toast?.find('.toast-body');
        const txt = 'Welcome';

        showMessage('success', txt);
        await nextTick();

        expect(toast?.classes('show')).toBe(true);
        expect(toast?.classes('text-bg-success')).toBe(true);
        expect(message?.text()).toContain(txt);
    });

    it('show error message', async () => {
        const {showMessage} = useMainStore();
        const toast = wrapper?.find({ref: 'toast-message'});
        const message = toast?.find('.toast-body');
        const txt = 'Welcome';

        showMessage('failure', txt);
        await nextTick();

        expect(toast?.classes('show')).toBe(true);
        expect(toast?.classes('text-bg-danger')).toBe(true);
        expect(message?.text()).toContain(txt);
    });
});