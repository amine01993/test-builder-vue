import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import SettingsView from "../SettingsView.vue";
import router from "@/router";
import i18n from "@/i18n";
import { createTestingPinia } from "@pinia/testing";
import { createPinia, setActivePinia } from "pinia";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import AppMenu from "@/components/AppMenu.vue";

describe('SettingsView', () => {
    let wrapper: VueWrapper|null = null;

    beforeEach(async () => {
        router.push('/settings');
        await router.isReady();

        setActivePinia(createPinia());

        wrapper = mount(SettingsView, {
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

    it('check active menu link', () => {
        const container = wrapper?.findComponent(AppContainer);
        const menu = container?.findComponent(AppMenu);
        const menuItems = menu?.findAll('.menu-item');

        const homeLink = menuItems?.at(0)?.find('a');
        const testsLink = menuItems?.at(1)?.find('a');
        const settingsLink = menuItems?.at(2)?.find('a');

        expect(homeLink?.classes('selected-item')).toBe(false);
        expect(testsLink?.classes('selected-item')).toBe(false);
        expect(settingsLink?.classes('selected-item')).toBe(true);
    });

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);

        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(1);
        expect(items?.at(0)?.html()).not.toContain('<a>');
        expect(items?.at(0)?.html()).toContain('Settings');
    });

    it('check fullname form', () => {
        const fnForm = wrapper?.find('.personal-info-form');
        expect(fnForm?.exists()).toBe(true);

        const title = fnForm?.find('.form-title');
        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Personal Information');

        const label = fnForm?.find('[for="test-input-name"]');
        const input = fnForm?.find('#test-input-name');
        expect(label?.exists()).toBe(true);
        expect(label?.html()).toContain('Full Name');
        expect(input?.exists()).toBe(true);

        const saveBtn = fnForm?.find('[type="button"]');
        expect(saveBtn?.exists()).toBe(true);
        expect(saveBtn?.html()).toContain('Save');
    });


    it('submit invalid fullname', async () => {
        const fnForm = wrapper?.find('.personal-info-form');
        const input = fnForm?.find('#test-input-name');
        const saveBtn = fnForm?.find('[type="button"]');

        await input?.setValue('');
        await saveBtn?.trigger('click');

        const inputFeed = fnForm?.find('#test-input-name + .invalid-feedback');
        expect(inputFeed?.exists()).toBe(true);
        expect(inputFeed?.html()).toContain('Full Name required');
    });
});