import { beforeEach, describe, expect, it, vitest } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import router from '@/router';
import i18n from '@/i18n';
import { useMainStore } from "@/stores/main";
import AppContainer from '@/components/AppContainer.vue';
import AppHeader from "../AppHeader.vue";
import AppMenu from "../AppMenu.vue";
import Breadcrumb from "../Breadcrumb.vue";

describe('AppContainer', () => {
    let wrapper: (VueWrapper | null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());

        wrapper = mount(AppContainer, {
            slots: {
                default: '<div class="test-default-slot">Main Content</div>',
            },
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

    it('AppContainer has AppHeader Component', () => {
        const header = wrapper?.findAllComponents(AppHeader);
        expect(header?.length).toBe(1);
        expect(header?.at(0)?.exists()).toBe(true);
    });

    it('AppContainer has AppMenu Component', () => {
        const menu = wrapper?.findAllComponents(AppMenu);
        expect(menu?.length).toBe(1);
        expect(menu?.at(0)?.exists()).toBe(true);
    });

    it('AppContainer has .app-container', () => {
        const container = wrapper?.findAll('.app-container');
        expect(container?.length).toBe(1);
        expect(container?.at(0)?.exists()).toBe(true);
    });

    it('AppContainer has .open depending on Menu state', async () => {
        const {isMenuOpen} = useMainStore();
        const container = wrapper?.find('.app-container');

        expect(isMenuOpen.value).toBe(false);
        expect(container?.classes('open')).toBe(false);

        const header = wrapper?.findComponent(AppHeader);
        await header?.find('.menu-btn').trigger('click');

        expect(isMenuOpen.value).toBe(true);
        expect(container?.classes('open')).toBe(true);

        await header?.find('.menu-btn').trigger('click');

        expect(isMenuOpen.value).toBe(false);
        expect(container?.classes('open')).toBe(false);
    });

    it('AppContainer has Breadcrumb', () => {
        const breadcrumb = wrapper?.findAllComponents(Breadcrumb);
        expect(breadcrumb?.length).toBe(1);
        expect(breadcrumb?.at(0)?.exists()).toBe(true);
    });

    it('AppContainer slot tag works', () => {
        const slot = wrapper?.find('.test-default-slot');

        expect(slot?.exists()).toBe(true);
        expect(slot?.html()).toContain('Main Content');
    });
});