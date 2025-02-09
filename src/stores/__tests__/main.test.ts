import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import {useMainStore} from '@/stores/main';
import { validateEmail } from "@/helpers/utils";

describe('main store', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('open menu', () => {
        const {isMenuOpen, openMenu} = useMainStore();

        expect(isMenuOpen.value).toBe(false);
        openMenu();
        expect(isMenuOpen.value).toBe(true);
    });

    it('open menu then close it', () => {
        const {isMenuOpen, openMenu, closeMenu} = useMainStore();

        expect(isMenuOpen.value).toBe(false);
        openMenu();
        expect(isMenuOpen.value).toBe(true);
        closeMenu();
        expect(isMenuOpen.value).toBe(false);
    });

    it('toggle menu', () => {
        const {isMenuOpen, toggleMenu} = useMainStore();

        expect(isMenuOpen.value).toBe(false);
        toggleMenu();
        expect(isMenuOpen.value).toBe(true);
        toggleMenu();
        expect(isMenuOpen.value).toBe(false);
    });

    it('check email validation', () => {
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('test@anonymous.com')).toBe(true);
        expect(validateEmail('myemmail')).toBe(false);
        expect(validateEmail('mailing@test')).toBe(false);
        expect(validateEmail('hello@world.org')).toBe(true);
    });

    it('start loading', () => {
        const {loading, loadStatus, LoadingStatus, startLoading} = useMainStore();

        expect(loading.value).toBe(false);
        expect(loadStatus.value).toBe(LoadingStatus.CONNECTING);
        startLoading();
        expect(loading.value).toBe(true);
        expect(loadStatus.value).toBe(LoadingStatus.LOADING);
    });

    it('loading cycle', () => {
        const {loading, loadStatus, LoadingStatus, startLoading, endLoading} = useMainStore();

        expect(loading.value).toBe(false);
        expect(loadStatus.value).toBe(LoadingStatus.CONNECTING);
        startLoading();
        expect(loading.value).toBe(true);
        expect(loadStatus.value).toBe(LoadingStatus.LOADING);
        startLoading(LoadingStatus.CONNECTING);
        expect(loading.value).toBe(true);
        expect(loadStatus.value).toBe(LoadingStatus.CONNECTING);
        endLoading();
        expect(loading.value).toBe(false);
    });

    it('show toast message', () => {
        const {toastOpt, showMessage} = useMainStore();
        const msg = 'Hello World!';

        expect(toastOpt.value.message).toBe('');
        expect(toastOpt.value.status).toBe('');
        showMessage('failure', msg);
        expect(toastOpt.value.message).toBe(msg);
        expect(toastOpt.value.status).toBe('failure');
    });

});