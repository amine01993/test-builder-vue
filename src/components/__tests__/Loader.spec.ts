import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import router from "@/router";
import i18n from "@/i18n";
import { useMainStore } from "@/stores/main";
import Loader from '@/components/Loader.vue';

describe('Loader', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        wrapper = mount(Loader, {
            global: {
                plugins: [
                    router,
                    i18n,
                    createTestingPinia({
                        createSpy: vitest.fn,
                        stubActions: false,
                    }),
                ],
                mocks: {
                    t: (msg: string) => msg,
                },
            },
        });
    });

    it('show Loader status Loading and hide it', async () => {
        const {startLoading, endLoading} = useMainStore();
        const modal = wrapper?.find({ref: 'loader-modal'});
        const content = modal?.find('.modal-body');

        expect(modal?.exists()).toBe(true);
        expect(content?.exists()).toBe(true);

        startLoading();
        await nextTick();

        expect(modal?.classes('show')).toBe(true);
        expect(content?.text()).toContain('Loading');

        endLoading();
        await nextTick();

        expect(modal?.classes('show')).toBe(false);
    });

    it('show Loader status Connecting and hide it', async () => {
        const {LoadingStatus, startLoading, endLoading} = useMainStore();
        const modal = wrapper?.find({ref: 'loader-modal'});
        const content = modal?.find('.modal-body');

        expect(modal?.exists()).toBe(true);
        expect(content?.exists()).toBe(true);

        startLoading(LoadingStatus.CONNECTING);
        await nextTick();

        expect(modal?.classes('show')).toBe(true);
        expect(content?.text()).toContain('Connecting');

        endLoading();
        await nextTick();

        expect(modal?.classes('show')).toBe(false);
    });
});