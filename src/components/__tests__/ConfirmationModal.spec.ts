import { createTestingPinia } from "@pinia/testing";
import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { nextTick } from "vue";
import i18n from "@/i18n";
import { useModalStore } from "@/stores/modal";
import ConfirmationModal from '@/components/ConfirmationModal.vue';

describe('ConfirmationModal', () => {

    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        wrapper = mount(ConfirmationModal, {
            global: {
                plugins: [
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

    it('open modal', async () => {
        const {confirm} = useModalStore();
        const modal = wrapper?.find({ref: 'confirm-modal'});
        const body = wrapper?.find('.modal-body');
        const content = '<b>Do Confirm your action?</b>';
        const actionTxt = 'Submit';

        expect(modal?.exists()).toBe(true);
        expect(body?.exists()).toBe(true);

        confirm(content, actionTxt, async () => {});
        await nextTick();

        expect(body?.html()).toContain(content);

        expect(modal?.classes('show')).toBe(true);
    });

    it('open modal && close modal using btn-close', async () => {
        const {confirm} = useModalStore();
        const modal = wrapper?.find({ref: 'confirm-modal'});
        const closeBtn = wrapper?.find('.btn-close');
        const content = 'Do Confirm your action?';
        const actionTxt = 'Submit';

        expect(closeBtn?.exists()).toBe(true);

        confirm(content, actionTxt, async () => {});
        await nextTick();

        await closeBtn?.trigger('click');

        expect(modal?.classes('show')).toBe(false);
    });

    it('open modal && close modal using Cancel', async () => {
        const {confirm} = useModalStore();
        const modal = wrapper?.find({ref: 'confirm-modal'});
        const cancelBtn = wrapper?.find('.modal-footer [data-bs-dismiss="modal"]');
        const content = 'Do Confirm your action?';
        const actionTxt = 'Submit';

        expect(cancelBtn?.exists()).toBe(true);
        expect(cancelBtn?.text()).toContain('Cancel');

        confirm(content, actionTxt, async () => {});
        await nextTick();

        await cancelBtn?.trigger('click');

        expect(modal?.classes('show')).toBe(false);
    });

    it('open modal && click submit', async () => {
        const {confirm} = useModalStore();
        const modal = wrapper?.find({ref: 'confirm-modal'});
        const content = 'Do Confirm your action?';
        const actionTxt = 'Submit';
        let modalStatus = 'before submit';

        confirm(content, actionTxt, async () => {
            modalStatus = 'after submit';
        });
        await nextTick();

        const submitBtn = wrapper?.find('.modal-footer .btn-submit');

        expect(submitBtn?.exists()).toBe(true);
        expect(submitBtn?.text()).toContain(actionTxt);
        expect(modalStatus).toBe('before submit');

        await submitBtn?.trigger('click');

        expect(modalStatus).toBe('after submit');
        expect(modal?.classes('show')).toBe(false);
    });
});