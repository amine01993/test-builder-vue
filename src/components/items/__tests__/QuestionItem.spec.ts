import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import i18n from "@/i18n";
import router from "@/router";
import { formatDate, getQuestionType } from "@/helpers/utils";
import QuestionItem from "../QuestionItem.vue";
import { questions } from "./questionData";

describe('QuestionItem', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = mount(QuestionItem, {
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

    it('check when Question is undefined', () => {
        const container = wrapper?.find('.question-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(true);
    });

    it('check when Question is defined', async () => {
        const questionData = questions[0];

        wrapper = mount(QuestionItem, {
            props: {
                test_id: questionData.test_id,
                question: questionData,
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

        const container = wrapper?.find('.question-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(false);
        const question = container?.find('.question-item-content');
        const title = container?.find('.question-item-title');
        expect(question?.exists()).toBe(true);
        expect(title?.exists()).toBe(true);
        expect(title?.text()).toContain(questionData.text);

        const properties = container?.findAll('.question-property');
        expect(properties?.length).toBe(4);
        expect(properties?.at(0)?.text()).toContain('Max Points: ' + questionData.max_points);
        expect(properties?.at(1)?.text()).toContain('Type: ' + getQuestionType(questionData));
        expect(properties?.at(2)?.text()).toContain('Position: ' + questionData.position);
        expect(properties?.at(3)?.text()).toContain('Total number of choices: ' + questionData.choiceCount);

        const update = container?.find('.question-last-update');
        expect(update?.exists()).toBe(true);
        expect(update?.text()).toContain(formatDate(questionData.updated_at.toDate(), 'en'));
    });
});