import { beforeEach, describe, expect, it, vitest, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import router from '@/router';
import i18n from '@/i18n';
import { useMainStore } from "@/stores/main";
import { useLocalizationStore } from "@/stores/localization";
import { useAuthenticationStore } from "@/stores/auth";
import AppHeader from "../AppHeader.vue";


describe('AppHeader', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());

        vitest.spyOn(window, 'fetch').mockResolvedValue(<any>{ 
            json: () => new Promise<Response>(resolve => resolve(<any>{ok: true})) 
        });
        // Response
        wrapper = mount(AppHeader, {
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
            mocks: {
                t: (msg: string) => msg
            },
        });
    });

    it('toggle menu from header', async () => {
        const {isMenuOpen} = useMainStore();
        const menuBtn = wrapper?.find('.menu-btn');

        expect(menuBtn?.exists()).toBe(true);

        expect(isMenuOpen.value).toBe(false);

        await menuBtn?.trigger('click');
        expect(isMenuOpen.value).toBe(true);

        await menuBtn?.trigger('click');
        expect(isMenuOpen.value).toBe(false);
    });

    it('test clicking on logo and navigating to home page', async () => {
        const push = vitest.spyOn(router, 'push');
        const homeBtn = wrapper?.find('.logo a');

        expect(homeBtn?.exists()).toBe(true);
        await homeBtn?.trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'home'});
    });

    it('toggle locale', async () => {
        const {lang} = useLocalizationStore();

        expect(lang.value).toBe('EN');
        
        const localeBtn = wrapper?.find('.localization');
        expect(localeBtn?.exists()).toBe(true);

        await localeBtn?.trigger('click');
        expect(lang.value).toBe('FR');

        await localeBtn?.trigger('click');
        expect(lang.value).toBe('EN');
    });

    it('test clicking on dropdown as anonymous user', async () => {
        const push = vitest.spyOn(router, 'push');
        const dropdown = wrapper?.find({ref: 'user-dropdown'});

        expect(dropdown?.exists()).toBe(true);
        await dropdown?.trigger('click');

        const name = wrapper?.find('.dropdown-item-text');
        expect(name?.exists()).toBe(true);
        expect(name?.text()).toContain('Anonymous');

        const link = wrapper?.find('a.dropdown-item');
        expect(link?.exists()).toBe(true);
        await link?.trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'login'});
    });

    it('test clicking on dropdown as authenticated user', async () => {
        const {user, setUser} = useAuthenticationStore();
        setUser(<any>{
            displayName: "Test Guy 204",
            email: "test204@anonymous.com",
            isAnonymous: false,
        });
        const dropdown = wrapper?.find({ref: 'user-dropdown'});

        expect(dropdown?.exists()).toBe(true);
        await dropdown?.trigger('click');

        const name = wrapper?.find('.dropdown-item-text');
        expect(name?.exists()).toBe(true);
        expect(name?.text()).not.toContain('Anonymous');
        expect(name?.text()).toContain('Welcome ' + user.value?.displayName);

        const link = wrapper?.find('a.dropdown-item');
        expect(link?.exists()).toBe(true);
    });
});