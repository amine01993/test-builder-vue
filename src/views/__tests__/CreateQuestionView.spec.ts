import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import router from "@/router";
import i18n from "@/i18n";
import { useTestServiceStore } from "@/stores/testService";
import {tests as testsData} from '@/components/items/__tests__/testData';
import type { Test } from "@/models/Test";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CreateQuestionView from "../CreateQuestionView.vue";

describe('CreateQuestionView', () => {
    let wrapper: (VueWrapper|null) = null;
    let testData: Test = testsData[1];

    beforeEach(async () => {
        router.push(`/test/${testData.id}/question/create`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());
        
        wrapper = mount(CreateQuestionView, {
            props: {
                test_id: testData.id!,
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
                mocks: {
                    t: (msg: string) => msg,
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
        expect(items?.length).toBe(4);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(true);
        expect(items?.at(2)?.html()).toContain('Edit Test');
        expect(items?.at(3)?.find('a').exists()).toBe(false);
        expect(items?.at(3)?.html()).toContain('Create a Question');
    });

    it('check title', () => {
        const title = wrapper?.find('.question-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Create Question');
    });

    it('check inputs', () => {
        const text = wrapper?.find('#question-input-text');
        const type = wrapper?.find('#question-input-type');
        const position = wrapper?.find('#question-input-position');

        expect(text?.exists()).toBe(true);
        expect(type?.exists()).toBe(true);
        expect(position?.exists()).toBe(true);
    });

    it('check test name, labels and submit btn', async () => {
        const {test} = useTestServiceStore();
        test.value = testData;
        await nextTick();

        const testName = wrapper?.find('.question-form .test-name');
        const text = wrapper?.find('.question-form [for="question-input-text"]');
        const type = wrapper?.find('.question-form [for="question-input-type"]');
        const position = wrapper?.find('.question-form [for="question-input-position"]');
        const submitBtn = wrapper?.find('.question-form [type="button"]');

        expect(testName?.exists()).toBe(true);
        expect(text?.exists()).toBe(true);
        expect(type?.exists()).toBe(true);
        expect(position?.exists()).toBe(true);
        expect(submitBtn?.exists()).toBe(true);

        expect(testName?.html()).toContain(testData.name);
        expect(text?.html()).toContain('Question');
        expect(type?.html()).toContain('Question Type');
        expect(position?.html()).toContain('Position');
        expect(submitBtn?.html()).toContain('Create');
    });
    
    it('check popover', () => {
        const positionInfo = wrapper?.find('.question-form .label-info');

        expect(positionInfo?.exists()).toBe(true);
        expect(positionInfo?.attributes('data-bs-content')).toBe('The position of the question in the test.');
    });

    it('submit invalid values', async () => {
        const text = wrapper?.find('#question-input-text');
        const position = wrapper?.find('#question-input-position');

        await text?.setValue('');
        await position?.setValue('not a number');

        const submitBtn = wrapper?.find('.question-form [type="button"]');
        await submitBtn?.trigger('click');

        const textFeed = wrapper?.find('#question-input-text + .invalid-feedback')
        const typeFeed = wrapper?.find('#question-input-type + .invalid-feedback')
        const positionFeed = wrapper?.find('#question-input-position + .invalid-feedback')

        expect(textFeed?.exists()).toBe(true);
        expect(textFeed?.html()).toContain('Question required');
        expect(typeFeed?.exists()).toBe(false);
        expect(positionFeed?.exists()).toBe(true);
        expect(positionFeed?.html()).toContain('The position must be a number');
    });
        
    it('submit valid values', async () => {
        const text = wrapper?.find('#question-input-text');
        const position = wrapper?.find('#question-input-position');

        await text?.setValue('Test question nbr 10');
        await position?.setValue(10);

        const submitBtn = wrapper?.find('.question-form [type="button"]');
        await submitBtn?.trigger('click');

        expect(submitBtn?.html()).toContain('Creating');

        const textFeed = wrapper?.find('#question-input-text + .invalid-feedback')
        const typeFeed = wrapper?.find('#question-input-type + .invalid-feedback')
        const positionFeed = wrapper?.find('#question-input-position + .invalid-feedback')

        expect(textFeed?.exists()).toBe(false);
        expect(typeFeed?.exists()).toBe(false);
        expect(positionFeed?.exists()).toBe(false);

    });
});