import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import router from "@/router";
import i18n from "@/i18n";
import { useChoiceServiceStore } from "@/stores/choiceService";
import { fullQuestion } from "@/components/items/__tests__/questionData";
import { choices as choicesData } from "@/components/items/__tests__/choiceData";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import EditQuestionView from "../EditQuestionView.vue";
import ChoiceItem from "@/components/items/ChoiceItem.vue";

describe('EditQuestionView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push(`/test/${fullQuestion.test_id}/question/${fullQuestion.id}/edit`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(EditQuestionView, {
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

        await wrapper.find('#question-input-text').setValue(fullQuestion.text);
        await wrapper.find('#question-input-type').setValue(fullQuestion.type);
        await wrapper.find('#question-input-position').setValue(fullQuestion.position);
    });

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(4);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(true);
        expect(items?.at(2)?.html()).toContain('Edit Test');
        expect(items?.at(3)?.find('a').exists()).toBe(false);
        expect(items?.at(3)?.html()).toContain('Edit Question');
    });

    it('check title', () => {
        const title = wrapper?.find('.question-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Edit Question');
    });

    it('check question input values', () => {
        const text = wrapper?.find('#question-input-text');
        const type = wrapper?.find('#question-input-type');
        const position = wrapper?.find('#question-input-position');

        expect((<any>text?.element).value).toBe(fullQuestion.text);
        expect(Number((<any>type?.element).value)).toBe(fullQuestion.type);
        expect(Number((<any>position?.element).value)).toBe(fullQuestion.position);
    });

    it('create new choice btn', async () => {
        const push = vitest.spyOn(router, 'push');
        const newChoice = wrapper?.find('.choice-actions .btn-warning');

        expect(newChoice?.exists()).toBe(true);
        await newChoice?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'create-choice', params: {test_id: fullQuestion.test_id, question_id: fullQuestion.id}});
    });

    it('check choice count when undefined', () => {
        const count = wrapper?.find('.choice-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(true);
        expect(count?.find('.choice-info-label').exists()).toBe(false);
    });
    
    it('check choice count when (choice = 0)', async () => {
        const {choiceCount} = useChoiceServiceStore();
        choiceCount.value = 0;
        await nextTick();

        const count = wrapper?.find('.choice-info');

        expect(count?.exists()).toBe(false);
    });
        
    it('check choice count when defined', async () => {
        const {choiceCount} = useChoiceServiceStore();
        choiceCount.value = 10;
        await nextTick();
        
        const count = wrapper?.find('.choice-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(false);
        expect(count?.find('.choice-info-label').exists()).toBe(true);
        expect(count?.text()).toContain('Total number of choices: ' + choiceCount.value);
    });

    it('check choice list when undefined', () => {
        const list = wrapper?.find('.choice-list');
        const choiceItems = wrapper?.findAllComponents(ChoiceItem);

        expect(list?.exists()).toBe(true);
        expect(choiceItems?.length).toBe(3);
        expect(choiceItems?.at(0)?.find('.choice-item-container').classes('placeholder-wave')).toBe(true);
    });

    it('check choice list when defined', async () => {
        const {choices} = useChoiceServiceStore();
        const list = wrapper?.find('.choice-list');

        choices.value = choicesData;
        await nextTick();
        const choiceItems = wrapper?.findAllComponents(ChoiceItem);

        expect(list?.exists()).toBe(true);
        expect(choiceItems?.length).toBe(choicesData.length);
        expect(choiceItems?.at(0)?.find('.choice-item-container').classes('placeholder-wave')).toBe(false);
    });

    it('check choice item edit-choice link', async () => {
        const push = vitest.spyOn(router, 'push');
        const {choices} = useChoiceServiceStore();

        choices.value = choicesData;
        await nextTick();
        const choiceItems = wrapper?.findAllComponents(ChoiceItem);
        const edit = choiceItems?.at(0)?.find('.choice-item-actions .btn-success');

        expect(edit?.exists()).toBe(true);
        expect(edit?.html()).toContain(`<i class="bi bi-pencil-fill"></i>`);

        await edit?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'edit-choice', params: {
            test_id: fullQuestion.test_id, question_id: fullQuestion.id, choice_id: choicesData[0].id
        }});
    });

    it('check choice item delete action', async () => {
        const {choices} = useChoiceServiceStore();

        choices.value = choicesData;
        await nextTick();
        const choiceItems = wrapper?.findAllComponents(ChoiceItem);
        const deleteBtn = choiceItems?.at(0)?.find('.choice-item-actions .btn-danger');

        expect(deleteBtn?.exists()).toBe(true);
        expect(deleteBtn?.html()).toContain(`<i class="bi bi-trash3-fill"></i>`);
    });
});