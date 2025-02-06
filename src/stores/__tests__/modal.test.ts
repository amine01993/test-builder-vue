import { beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import {useModalStore} from '@/stores/modal';

describe('modal store', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('open confirmation modal', async () => {
        const {open, content, actionText, actionCb, confirm} = useModalStore();

        const _content = 'Are you sure about this action?';
        const _actionText = 'Confirm';
        const _actionCb = async () => {};

        expect(open.value).toBe(false);
        expect(content.value).toBe('');
        expect(actionText.value).toBe('');
        expect(actionCb.value).toBe(undefined);

        confirm(_content, _actionText, _actionCb);

        expect(open.value).toBe(true);
        expect(content.value).toBe(_content);
        expect(actionText.value).toBe(_actionText);
        expect(actionCb.value).toBe(_actionCb);
    });

    it('open & close confirmation modal', () => {
        const {open, confirm, close} = useModalStore();

        expect(open.value).toBe(false);

        confirm('', '', async () => {});

        expect(open.value).toBe(true);

        close();

        expect(open.value).toBe(false);
    });
});