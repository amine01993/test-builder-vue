import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import i18n from "@/i18n";
import { formatDate, formatInterval } from "@/helpers/utils";
import TestItem from "../TestItem.vue";
import router from "@/router";
import { tests } from "./testData";

describe('TestItem', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = mount(TestItem, {
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

    it('check when Test is undefined', () => {
        const container = wrapper?.find('.test-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(true);
    });

    it('check when Test is defined', async () => {
        const testData = tests[0];

        wrapper = mount(TestItem, {
            props: {
                test: testData,
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

        const container = wrapper?.find('.test-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(false);
        const test = container?.find('.test-item-content');
        const title = container?.find('.test-item-title');
        expect(test?.exists()).toBe(true);
        expect(title?.exists()).toBe(true);
        expect(title?.text()).toContain(testData.name);

        const description = container?.find('.test-description');
        expect(description?.html()).toContain(testData.description.replace(/\n/g, ""));
        await description.trigger('click');
        expect(description?.html()).toContain(testData.description.replace(/\n/g, "<br />"));

        const properties = container?.findAll('.test-property');
        expect(properties?.length).toBe(3);
        expect(properties?.at(0)?.text()).toContain('Max Score: ' + testData.max_points);
        expect(properties?.at(1)?.text()).toContain('Time Limit: ' + testData.time_limit);
        expect(properties?.at(2)?.text()).toContain('Total number of questions: ' + testData.questionCount);

        const update = container?.find('.test-last-update');
        expect(update?.exists()).toBe(true);
        expect(update?.text()).toContain(formatDate(testData.updated_at.toDate(), 'en'));
    });
});