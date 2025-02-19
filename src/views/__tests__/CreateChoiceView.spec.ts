import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import router from "@/router";
import i18n from "@/i18n";
import { useQuestionServiceStore } from "@/stores/questionService";
import {fullQuestion} from '@/components/items/__tests__/questionData';
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CreateChoiceView from "../CreateChoiceView.vue";

describe('CreateChoiceView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push(`/test/${fullQuestion.test_id}/question/${fullQuestion.id}/choice/create`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());
        
        wrapper = mount(CreateChoiceView, {
            props: {
                test_id: fullQuestion.test_id,
                question_id: fullQuestion.id,
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
    });

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        expect(container?.exists()).toBe(true);

        const breadcrumb = container?.findComponent(Breadcrumb);
        expect(breadcrumb?.exists()).toBe(true);

        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        expect(breadcrumbContainer?.exists()).toBe(true);

        const items = breadcrumbContainer?.findAll('li');
        expect(items?.length).toBe(5);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(true);
        expect(items?.at(2)?.html()).toContain('Edit Test');
        expect(items?.at(3)?.find('a').exists()).toBe(true);
        expect(items?.at(3)?.html()).toContain('Edit Question');
        expect(items?.at(4)?.find('a').exists()).toBe(false);
        expect(items?.at(4)?.html()).toContain('Create a Choice');
    });

    it('check title', () => {
        const title = wrapper?.find('.choice-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Create Choice');
    });

    it('check inputs', () => {
        const text = wrapper?.find('#choice-input-text');
        const pts = wrapper?.find('#choice-input-pts');
        const correctness = wrapper?.find('#choice-input-correctness');
        const position = wrapper?.find('#choice-input-position');

        expect(text?.exists()).toBe(true);
        expect(pts?.exists()).toBe(true);
        expect(correctness?.exists()).toBe(true);
        expect(position?.exists()).toBe(true);
    });

    it('check question name, labels and submit btn', async () => {
        const {question} = useQuestionServiceStore();
        question.value = fullQuestion;
        await nextTick();

        const questionText = wrapper?.find('.choice-form .question-text');
        const text = wrapper?.find('.choice-form [for="choice-input-text"]');
        const pts = wrapper?.find('.choice-form [for="choice-input-pts"]');
        const correctness = wrapper?.find('.choice-form [for="choice-input-correctness"]');
        const position = wrapper?.find('.choice-form [for="choice-input-position"]');
        const submitBtn = wrapper?.find('.choice-form [type="button"]');

        expect(questionText?.exists()).toBe(true);
        expect(text?.exists()).toBe(true);
        expect(pts?.exists()).toBe(true);
        expect(correctness?.exists()).toBe(true);
        expect(submitBtn?.exists()).toBe(true);

        expect(questionText?.html()).toContain(fullQuestion.text);
        expect(text?.html()).toContain('Choice');
        expect(pts?.html()).toContain('Points');
        expect(correctness?.html()).toContain('Correct Choice');
        expect(position?.html()).toContain('Position');
        expect(submitBtn?.html()).toContain('Create');
    });
    
    it('check popover', () => {
        const positionInfo = wrapper?.find('.choice-form .label-info');

        expect(positionInfo?.exists()).toBe(true);
        expect(positionInfo?.attributes('data-bs-content')).toBe('The position of the choice in the question.');
    });

    it('submit invalid values', async () => {
        const text = wrapper?.find('#choice-input-text');
        const pts = wrapper?.find('#choice-input-pts');
        const position = wrapper?.find('#choice-input-position');

        await text?.setValue('');
        await pts?.setValue('test');
        await position?.setValue('not a number');

        const submitBtn = wrapper?.find('.choice-form [type="button"]');
        await submitBtn?.trigger('click');

        const textFeed = wrapper?.find('#choice-input-text + .invalid-feedback')
        const ptsFeed = wrapper?.find('#choice-input-pts + .invalid-feedback')
        const correctnessFeed = wrapper?.find('#choice-input-correctness + .invalid-feedback')
        const positionFeed = wrapper?.find('#choice-input-position + .invalid-feedback')

        expect(textFeed?.exists()).toBe(true);
        expect(textFeed?.html()).toContain('Choice required');
        expect(ptsFeed?.exists()).toBe(true);
        expect(ptsFeed?.html()).toContain('Max points must be a number');
        expect(correctnessFeed?.exists()).toBe(false);
        expect(positionFeed?.exists()).toBe(true);
        expect(positionFeed?.html()).toContain('The position must be a number');
    });
        
    it('submit valid values', async () => {
        const text = wrapper?.find('#choice-input-text');
        const pts = wrapper?.find('#choice-input-pts');
        const position = wrapper?.find('#choice-input-position');
        const correctness = wrapper?.find('#choice-input-correctness');

        await text?.setValue('Answer question nbr 100');
        await pts?.setValue(2);
        await position?.setValue(-1);
        await correctness?.setValue(true);

        const submitBtn = wrapper?.find('.choice-form [type="button"]');
        await submitBtn?.trigger('click');

        expect(submitBtn?.html()).toContain('Creating');

        const textFeed = wrapper?.find('#choice-input-text + .invalid-feedback')
        const ptsFeed = wrapper?.find('#choice-input-pts + .invalid-feedback')
        const correctnessFeed = wrapper?.find('#choice-input-correctness + .invalid-feedback')
        const positionFeed = wrapper?.find('#choice-input-position + .invalid-feedback')

        expect(textFeed?.exists()).toBe(false);
        expect(ptsFeed?.exists()).toBe(false);
        expect(correctnessFeed?.exists()).toBe(false);
        expect(positionFeed?.exists()).toBe(false);
    });
});