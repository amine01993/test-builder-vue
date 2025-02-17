import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import i18n from "@/i18n";
import { QuestionType } from "@/models/Question";
import { fullQuestion } from "./questionData";
import DisplayQuestion from "../DisplayQuestion.vue";

describe('DisplayQuestion', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('check when Question is undefined', () => {
        wrapper = mount(DisplayQuestion, {
            global: {
                plugins: [
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

        const container = wrapper?.find('.display-question');

        expect(container?.exists()).toBe(false);
    });

    it('check when Question is defined && nbr is undefined', () => {
        wrapper = mount(DisplayQuestion, {
            props: {
                question: fullQuestion,
                preview: false,
            },
            global: {
                plugins: [
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

        const container = wrapper?.find('.display-question');
        const question = wrapper?.find('.question-wrapper .question-text');
        const points = wrapper?.find('.question-wrapper .question-pts');

        expect(container?.exists()).toBe(true);
        expect(fullQuestion.type).toBe(QuestionType.MultipleChoice);
        expect(container.classes('question-type-choices')).toBe(true);

        expect(question?.exists()).toBe(true);
        expect(question.html()).toContain('1. ' + fullQuestion.text);
        expect(points?.exists()).toBe(true);
        expect(points.html()).toContain('({points} pts)');
    });

    it('check preview mode', () => {
        wrapper = mount(DisplayQuestion, {
            props: {
                question: fullQuestion,
                nbr: 3,
                preview: true,
                choices: fullQuestion.choices,
            },
            global: {
                plugins: [
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

        const container = wrapper?.find('.display-question');
        const question = wrapper?.find('.question-wrapper .question-text');
        const points = wrapper?.find('.question-wrapper .question-pts');

        expect(container?.exists()).toBe(true);
        expect(fullQuestion.type).toBe(QuestionType.MultipleChoice);
        expect(container.classes('question-type-choices')).toBe(true);

        expect(question?.exists()).toBe(true);
        expect(question.html()).toContain('3. ' + fullQuestion.text);
        expect(points?.exists()).toBe(true);
        expect(points.html()).toContain('({points} pts)');

        const choices = wrapper.find('.choices-wrapper');
        const choiceInput = choices.find('.form-check-input');
        const choiceLabel = choices.find('.form-check-label');
        const choicePts = choices.find('.choice-pts');

        expect(choices?.exists()).toBe(true);
        expect(choiceInput?.exists()).toBe(true);
        expect(choiceInput?.attributes('type')).toBe('checkbox');
        expect(choiceInput?.attributes('name')).toBe(fullQuestion.id);
        expect(choiceInput?.attributes('id')).toBe('choice-' + fullQuestion.choices[0].id);
        expect((<any>choiceInput?.element).value).toBe(fullQuestion.choices[0].text);

        expect(choiceLabel?.exists()).toBe(true);
        expect(choiceLabel?.attributes('for')).toBe('choice-' + fullQuestion.choices[0].id);
        expect(choiceLabel?.html()).toContain(fullQuestion.choices[0].text);

        expect(choicePts?.exists()).toBe(true);
        expect(choicePts?.html()).toContain('({points} pts)');
        expect(choicePts?.html()).not.toContain('<i class="bi bi-check2"></i>');
        expect(choicePts?.html()).toContain('<i class="bi bi-x-lg"></i>');
    });

    it('check test mode', () => {
        wrapper = mount(DisplayQuestion, {
            props: {
                question: fullQuestion,
                preview: false,
                choices: fullQuestion.choices,
            },
            global: {
                plugins: [
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

        const container = wrapper?.find('.display-question');
        const question = wrapper?.find('.question-wrapper .question-text');
        const points = wrapper?.find('.question-wrapper .question-pts');

        expect(container?.exists()).toBe(true);
        expect(fullQuestion.type).toBe(QuestionType.MultipleChoice);
        expect(container.classes('question-type-choices')).toBe(true);

        expect(question?.exists()).toBe(true);
        expect(question.html()).toContain('1. ' + fullQuestion.text);
        expect(points?.exists()).toBe(true);
        expect(points.html()).toContain('({points} pts)');

        const choices = wrapper.find('.choices-wrapper');
        const choiceInput = choices.find('.form-check-input');
        const choiceLabel = choices.find('.form-check-label');
        const choicePts = choices.find('.choice-pts');

        expect(choices?.exists()).toBe(true);
        expect(choiceInput?.exists()).toBe(true);
        expect(choiceInput?.attributes('type')).toBe('checkbox');
        expect(choiceInput?.attributes('name')).toBe(fullQuestion.id);
        expect(choiceInput?.attributes('id')).toBe('choice-' + fullQuestion.choices[0].id);
        expect((<any>choiceInput?.element).value).toBe(fullQuestion.choices[0].text);

        expect(choiceLabel?.exists()).toBe(true);
        expect(choiceLabel?.attributes('for')).toBe('choice-' + fullQuestion.choices[0].id);
        expect(choiceLabel?.html()).toContain(fullQuestion.choices[0].text);

        expect(choicePts?.exists()).toBe(false);
    });
});