import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import router from "@/router";
import i18n from "@/i18n";
import { useQuestionServiceStore } from "@/stores/questionService";
import type { Test } from "@/models/Test";
import { tests as testsData } from "@/components/items/__tests__/testData";
import { questions as questionsData } from "@/components/items/__tests__/questionData";
import EditTestView from "../EditTestView.vue";
import QuestionItem from "@/components/items/QuestionItem.vue";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

describe('EditTestView', () => {
    let wrapper: (VueWrapper|null) = null;
    let testData: Test = testsData[1];

    beforeEach(async () => {
        router.push('/test/wgLwri0DvrTiT5yhPSnM/edit');
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(EditTestView, {
            props: {
                test_id: "wgLwri0DvrTiT5yhPSnM",
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

        await wrapper.find('#test-input-name').setValue(testData.name);
        await wrapper.find('#test-input-description').setValue(testData.description);
        await wrapper.find('#test-input-timelimit').setValue(testData.time_limit);
    });

    it('check breadcrumb', async () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(3);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(false);
        expect(items?.at(2)?.html()).toContain('Edit Test');
    });

    it('check title', () => {
        const title = wrapper?.find('.test-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Edit Test');
    });

    it('check test input values', async () => {
        const name = wrapper?.find('#test-input-name');
        const description = wrapper?.find('#test-input-description');
        const timeLimit = wrapper?.find('#test-input-timelimit');

        expect((<any>name?.element).value).toBe(testData.name);
        expect((<any>description?.element).value).toBe(testData.description);
        expect(Number((<any>timeLimit?.element).value)).toBe(testData.time_limit);
    });

    it('create new question btn', async () => {
        const push = vitest.spyOn(router, 'push');
        const newQuestion = wrapper?.find('.create-question');

        expect(newQuestion?.exists()).toBe(true);
        await newQuestion?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'create-question', params: {test_id: testData.id}});
    });

    it('check question count when undefined', () => {
        const count = wrapper?.find('.question-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(true);
        expect(count?.find('.question-info-label').exists()).toBe(false);
    });
    
    it('check question count when (questionCount = 0)', async () => {
        const {questionCount} = useQuestionServiceStore();
        questionCount.value = 0;
        await nextTick();

        const count = wrapper?.find('.question-info');

        expect(count?.exists()).toBe(false);
    });
        
    it('check question count when defined', async () => {
        const {questionCount} = useQuestionServiceStore();
        questionCount.value = 10;
        await nextTick();
        
        const count = wrapper?.find('.question-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(false);
        expect(count?.find('.question-info-label').exists()).toBe(true);
        expect(count?.text()).toContain('Total number of questions: ' + questionCount.value);
    });

    it('check question list when undefined', async () => {
        const list = wrapper?.find('.question-list');
        const questionItems = wrapper?.findAllComponents(QuestionItem);

        expect(list?.exists()).toBe(true);
        expect(questionItems?.length).toBe(3);
        expect(questionItems?.at(0)?.find('.question-item-container').classes('placeholder-wave')).toBe(true);
    });

    it('check question list when defined', async () => {
        const {questions, questionCount} = useQuestionServiceStore();
        const list = wrapper?.find('.question-list');

        questions.value = questionsData;
        questionCount.value = questionsData.length;
        await nextTick();
        const questionItems = wrapper?.findAllComponents(QuestionItem);

        expect(list?.exists()).toBe(true);
        expect(questionItems?.length).toBe(questionsData.length);
        expect(questionItems?.at(0)?.find('.question-item-container').classes('placeholder-wave')).toBe(false);
    });

    it('check question item preview-test link', async () => {
        const push = vitest.spyOn(router, 'push');
        const {questions} = useQuestionServiceStore();

        questions.value = questionsData;
        await nextTick();
        const questionItems = wrapper?.findAllComponents(QuestionItem);
        const preview = questionItems?.at(0)?.find('.question-item-actions .btn-primary');

        expect(preview?.exists()).toBe(true);
        expect(preview?.html()).toContain(`<i class="bi bi-eye-fill"></i>`);

        await preview?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'preview-question', params: {test_id: questionsData[0].test_id, question_id: questionsData[0].id}});
    });

    it('check test item edit-test link', async () => {
        const push = vitest.spyOn(router, 'push');
        const {questions} = useQuestionServiceStore();

        questions.value = questionsData;
        await nextTick();
        const questionItems = wrapper?.findAllComponents(QuestionItem);
        const edit = questionItems?.at(0)?.find('.question-item-actions .btn-success');

        expect(edit?.exists()).toBe(true);
        expect(edit?.html()).toContain(`<i class="bi bi-pencil-fill"></i>`);

        await edit?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'edit-question', params: {test_id: questionsData[0].test_id, question_id: questionsData[0].id}});
    });

    it('check test item delete action', async () => {
        const {questions} = useQuestionServiceStore();

        questions.value = questionsData;
        await nextTick();
        const questionItems = wrapper?.findAllComponents(QuestionItem);
        const deleteBtn = questionItems?.at(0)?.find('.question-item-actions .btn-danger');

        expect(deleteBtn?.exists()).toBe(true);
        expect(deleteBtn?.html()).toContain(`<i class="bi bi-trash3-fill"></i>`);
    });
});