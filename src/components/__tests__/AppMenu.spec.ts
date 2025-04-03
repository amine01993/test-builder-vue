import { beforeEach, describe, expect, it, vitest } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import router from "@/router";
import i18n from "@/i18n";
import { useMainStore } from "@/stores/main";
import AppMenu from "../AppMenu.vue";

describe('AppMenu', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());

        wrapper = mount(AppMenu, {
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
                }
            },
        });
    });

    it('test menu opening class', async () => {
        const {openMenu, closeMenu} = useMainStore();
        const overlay = wrapper?.find('.app-menu-overlay');
        const menu = wrapper?.find('.app-menu');

        expect(overlay?.exists()).toBe(true);
        expect(menu?.exists()).toBe(true);

        expect(overlay?.classes('open')).toBe(false);
        expect(menu?.classes('open')).toBe(false);

        openMenu();
        await nextTick();
        expect(overlay?.classes('open')).toBe(true);
        expect(menu?.classes('open')).toBe(true);

        closeMenu();
        await nextTick();
        expect(overlay?.classes('open')).toBe(false);
        expect(menu?.classes('open')).toBe(false);
    });

    it('test menu items', () => {
        const items = wrapper?.findAll('.menu-item');

        expect(items?.length).toBe(4);
    });

    it('navigate to home page', async () => {
        const push = vitest.spyOn(router, 'push');
        const {openMenu} = useMainStore();
        const menuItems = wrapper?.findAll('.menu-item');

        openMenu();
        await nextTick();

        const home = menuItems?.at(0);
        expect(home?.exists()).toBe(true);

        const link = home?.find('a');
        expect(link?.exists()).toBe(true);
        expect(link?.text()).toContain('Home');

        await link?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'home'});
    });

    it('navigate to tests page', async () => {
        const push = vitest.spyOn(router, 'push');
        const {openMenu} = useMainStore();
        const menuItems = wrapper?.findAll('.menu-item');

        openMenu();
        await nextTick();

        const tests = menuItems?.at(1);
        expect(tests?.exists()).toBe(true);

        const link = tests?.find('a');
        expect(link?.exists()).toBe(true);
        expect(link?.text()).toContain('Tests');

        await link?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'tests'});
    });

    it('navigate to settings page', async () => {
        const push = vitest.spyOn(router, 'push');
        const {openMenu} = useMainStore();
        const menuItems = wrapper?.findAll('.menu-item');

        openMenu();
        await nextTick();

        const settings = menuItems?.at(2);
        expect(settings?.exists()).toBe(true);

        const link = settings?.find('a');
        expect(link?.exists()).toBe(true);
        expect(link?.text()).toContain('Settings');

        await link?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'settings'});
    });

    it('navigate to contact us page', async () => {
        const push = vitest.spyOn(router, 'push');
        const {openMenu} = useMainStore();
        const menuItems = wrapper?.findAll('.menu-item');

        openMenu();
        await nextTick();

        const contactUs = menuItems?.at(3);
        expect(contactUs?.exists()).toBe(true);

        const link = contactUs?.find('a');
        expect(link?.exists()).toBe(true);
        expect(link?.text()).toContain('Contact us');

        await link?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'contact-us'});
    });
});