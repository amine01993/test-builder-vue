import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import i18n from "@/i18n";
import { formatDate, formatInterval } from "@/helpers/utils";
import { userTests } from "./userTestData";
import UserTestItem from "../UserTestItem.vue";

describe('UserTestItem', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = mount(UserTestItem, {
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
    });

    it('check when userTest is undefined', () => {
        const container = wrapper?.find('.user-test-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(true);
    });

    it('check when userTest is defined', async () => {
        const userTestData = userTests[0];

        wrapper = mount(UserTestItem, {
            props: {
                userTest: userTestData,
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

        // await wrapper?.setProps({
        //     userTest: userTestData
        // });
        // await nextTick();
        const container = wrapper?.find('.user-test-item-container');

        expect(container?.exists()).toBe(true);
        expect(container?.classes('placeholder-wave')).toBe(false);
        console.log('container', container?.html()); 
        const userTest = container?.find('.user-test-item-content');
        const title = container?.find('.user-test-item-title');
        expect(userTest?.exists()).toBe(true);
        expect(title?.exists()).toBe(true);
        expect(title?.text()).toContain(userTestData.test.name);

        const properties = container?.findAll('.user-test-property');
        expect(properties?.length).toBe(6);
        expect(properties?.at(0)?.text()).toContain('Full Name: ' + userTestData.user.displayName);
        expect(properties?.at(1)?.text()).toContain('Email: ' + userTestData.user.email);
        expect(properties?.at(2)?.text()).toContain('Started At: ' + formatDate(userTestData.started_at.toDate(), 'en'));
        expect(properties?.at(3)?.text()).toContain('Lasted For: ' + formatInterval(userTestData.started_at.toDate(), userTestData.ended_in.toDate()));
        expect(properties?.at(4)?.text()).toContain('Score: ' + userTestData.result.score);
        expect(properties?.at(5)?.text()).toContain('Answered Questions: ' + userTestData.report.length + ' out of ' + userTestData.test.questionCount);
    });
});