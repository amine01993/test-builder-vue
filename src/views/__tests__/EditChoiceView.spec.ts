import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import { fullQuestion } from "@/components/items/__tests__/questionData";
import { choices as choicesData } from "@/components/items/__tests__/choiceData";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import EditChoiceView from "../EditChoiceView.vue";

describe('EditChoiceView', () => {
    let wrapper: (VueWrapper|null) = null;
    const choiceData = choicesData[0];

    beforeEach(async () => {
        router.push(`/test/${fullQuestion.test_id}/question/${fullQuestion.id}/choice/${choiceData.id}/edit`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(EditChoiceView, {
            props: {
                test_id: fullQuestion.test_id,
                question_id: fullQuestion.id,
                choice_id: choiceData.id,
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

        await wrapper.find('#choice-input-text').setValue(choiceData.text);
        await wrapper.find('#choice-input-pts').setValue(choiceData.points);
        if(choiceData.is_correct) {
            await wrapper.find('#choice-input-correctness').trigger('click');
        }
    });

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
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
        expect(items?.at(4)?.html()).toContain('Edit Choice');
    });

    it('check title', () => {
        const title = wrapper?.find('.choice-form-title');

        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Edit Choice');
    });

    it('check question input values', () => {
        const text = wrapper?.find('#choice-input-text');
        const pts = wrapper?.find('#choice-input-pts');
        const correctness = wrapper?.find('#choice-input-correctness');

        expect((<any>text?.element).value).toBe(choiceData.text);
        expect(Number((<any>pts?.element).value)).toBe(choiceData.points);
        expect(Boolean((<any>correctness?.element).checked)).toBe(choiceData.is_correct);
    });
});