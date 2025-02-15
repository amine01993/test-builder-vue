import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CreateTestView from "../CreateTestView.vue";

describe('CreateTestView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push('/test/create');
        await router.isReady();

        setActivePinia(createPinia());
        
        wrapper = mount(CreateTestView, {
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
                    // addTest: (test: Test) => new Promise<void>(resolve => resolve()),
                }
            },
        });

        await flushPromises();
    });

    it('check breadcrumb', async () => {
        const container = wrapper?.findComponent(AppContainer);
        expect(container?.exists()).toBe(true);

        const breadcrumb = container?.findComponent(Breadcrumb);
        expect(breadcrumb?.exists()).toBe(true);

        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        expect(breadcrumbContainer?.exists()).toBe(true);

        const items = breadcrumbContainer?.findAll('li');
        expect(items?.length).toBe(3);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(false);
        expect(items?.at(2)?.html()).toContain('Create a Test');
    });

    it('check title', () => {
        const title = wrapper?.find('.test-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Create New Test');
    });

    it('check inputs', () => {
        const name = wrapper?.find('#test-input-name');
        const description = wrapper?.find('#test-input-description');
        const timeLimit = wrapper?.find('#test-input-timelimit');

        expect(name?.exists()).toBe(true);
        expect(description?.exists()).toBe(true);
        expect(timeLimit?.exists()).toBe(true);
    });

    it('check labels and submit btn', () => {
        const name = wrapper?.find('.test-form [for="test-input-name"]');
        const description = wrapper?.find('.test-form [for="test-input-description"]');
        const timeLimit = wrapper?.find('.test-form [for="test-input-timelimit"]');
        const submitBtn = wrapper?.find('.test-form [type="button"]');

        expect(name?.exists()).toBe(true);
        expect(description?.exists()).toBe(true);
        expect(timeLimit?.exists()).toBe(true);
        expect(submitBtn?.exists()).toBe(true);

        expect(name?.html()).toContain('Name');
        expect(description?.html()).toContain('Description');
        expect(timeLimit?.html()).toContain('Time Limit');
        expect(submitBtn?.html()).toContain('Create');
    });
    
    it('check popover', () => {
        const timeLimitInfo = wrapper?.find('.test-form .label-info');

        expect(timeLimitInfo?.exists()).toBe(true);
        expect(timeLimitInfo?.attributes('data-bs-content')).toBe('The test Time Limit is in seconds.<br>0 = no Time Limit');
    });

    it('submit invalid values', async () => {
        const name = wrapper?.find('#test-input-name');
        const timeLimit = wrapper?.find('#test-input-timelimit');

        await name?.setValue('Test name');
        await timeLimit?.setValue(-1);

        const submitBtn = wrapper?.find('.test-form [type="button"]');
        await submitBtn?.trigger('click');

        const nameFeed = wrapper?.find('#test-input-name + .invalid-feedback')
        const descriptionFeed = wrapper?.find('#test-input-description + .invalid-feedback')
        const timeLimitFeed = wrapper?.find('#test-input-timelimit + .invalid-feedback')

        expect(nameFeed?.exists()).toBe(false);
        expect(descriptionFeed?.exists()).toBe(false);
        expect(timeLimitFeed?.exists()).toBe(true);
        expect(timeLimitFeed?.html()).toContain('The time limit can\'t be a negatif number');
    });
        
    it('submit valid values', async () => {
        const name = wrapper?.find('#test-input-name');
        const timeLimit = wrapper?.find('#test-input-timelimit');

        await name?.setValue('Test name');
        await timeLimit?.setValue(123);

        const submitBtn = wrapper?.find('.test-form [type="button"]');
        await submitBtn?.trigger('click');

        expect(submitBtn?.html()).toContain('Creating');

        const nameFeed = wrapper?.find('#test-input-name + .invalid-feedback')
        const descriptionFeed = wrapper?.find('#test-input-description + .invalid-feedback')
        const timeLimitFeed = wrapper?.find('#test-input-timelimit + .invalid-feedback')

        expect(nameFeed?.exists()).toBe(false);
        expect(descriptionFeed?.exists()).toBe(false);
        expect(timeLimitFeed?.exists()).toBe(false);

    });
});