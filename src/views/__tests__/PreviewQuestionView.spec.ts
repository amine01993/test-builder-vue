import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import { useQuestionServiceStore } from "@/stores/questionService";
import { useChoiceServiceStore } from "@/stores/choiceService";
import { fullQuestion } from "@/components/items/__tests__/questionData";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import DisplayQuestion from "@/components/items/DisplayQuestion.vue";
import PreviewQuestionView from "../PreviewQuestionView.vue";

describe('PreviewQuestionView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push(`/test/${fullQuestion.test_id}/question/${fullQuestion.id}/preview`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(PreviewQuestionView, {
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

    it('check breadcrumb', async () => {
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
        expect(items?.at(3)?.html()).toContain('Preview the Question');
    });

    it('check preview display question', async () => {
        const {question} = useQuestionServiceStore();
        const {choices} = useChoiceServiceStore();
        question.value = fullQuestion;
        choices.value = fullQuestion.choices;
        await nextTick();

        const questions = wrapper?.findAllComponents(DisplayQuestion);

        expect(questions?.length).toBe(1);
    });
});