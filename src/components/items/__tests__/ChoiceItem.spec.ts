import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import i18n from "@/i18n";
import router from "@/router";
import { formatDate } from "@/helpers/utils";
import { fullQuestion } from "./questionData";
import ChoiceItem from "../ChoiceItem.vue";

describe('ChoiceItem', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = mount(ChoiceItem, {
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

    it('check when Choice is undefined', () => {
        const container = wrapper?.find('.choice-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(true);
    });

    it('check when Choice is defined', async () => {
        const choiceData = fullQuestion.choices[0];

        wrapper = mount(ChoiceItem, {
            props: {
                test_id: fullQuestion.test_id,
                question_id: fullQuestion.id,
                choice: choiceData,
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

        const container = wrapper?.find('.choice-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(false);
        const choice = container?.find('.choice-item-content');
        const title = container?.find('.choice-item-title');
        expect(choice?.exists()).toBe(true);
        expect(title?.exists()).toBe(true);
        expect(title?.text()).toContain(choiceData.text);

        const properties = container?.findAll('.choice-property');
        expect(properties?.length).toBe(3);
        expect(properties?.at(0)?.text()).toContain('Points: ' + choiceData.points);
        expect(properties?.at(1)?.text()).toContain('Correctness: ' + choiceData.is_correct);
        expect(properties?.at(2)?.text()).toContain('Position: ' + choiceData.position);

        const update = container?.find('.choice-last-update');
        expect(update?.exists()).toBe(true);
        expect(update?.text()).toContain(formatDate(choiceData.updated_at.toDate(), 'en'));
    });
});