import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import router from "@/router";
import i18n from "@/i18n";
import { useUserTestServiceStore } from "@/stores/userTestService";
import { formatDate, formatInterval } from "@/helpers/utils";
import type { UserTest } from "@/models/UserTest";
import {userTests as userTestsData} from '@/components/items/__tests__/userTestData'
import TestReportView from "../TestReportView.vue";

describe('TestReportView', () => {
    let wrapper: (VueWrapper|null) = null;
    const userTest: UserTest = userTestsData[1];

    beforeEach(async () => {
        router.push(`/report/:user_test_id`);
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(TestReportView, {
            global: {
                plugins: [
                    router,
                    i18n,
                    createTestingPinia({
                        createSpy: vitest.fn,
                        stubActions: false,
                    }),
                ],
            },
        });
    });

    it('check when testReport is undefined', () => {
        const container = wrapper?.find('.test-report-container');

        expect(container?.exists()).toBe(false);
    });

    it('check when testReport is defined', async () => {
        const {testReport} = useUserTestServiceStore(); 
        testReport.value = userTest;
        await nextTick();

        const container = wrapper?.find('.test-report-container');

        expect(container?.exists()).toBe(true);

        const header = container?.find('.test-report-header');
        const content = container?.find('.test-report-content');
        const labels = container?.findAll('.test-item-label');
        const values = container?.findAll('.test-item-value');

        expect(header?.exists()).toBe(true);
        expect(content?.exists()).toBe(true);
        expect(labels?.length).toBe(6);
        expect(values?.length).toBe(6);

        expect(labels?.at(0)?.html()).toContain('Test:');
        expect(values?.at(0)?.html()).toContain(testReport.value.test.name);
        expect(labels?.at(1)?.html()).toContain('Full Name:');
        expect(values?.at(1)?.html()).toContain(testReport.value.user.displayName);
        expect(labels?.at(2)?.html()).toContain('Answered Questions:');
        expect(values?.at(2)?.html()).toContain(String(testReport.value.report?.length ?? 0) + ' out of ' + testReport.value.test.questionCount);
        expect(labels?.at(3)?.html()).toContain('Started At:');
        expect(values?.at(3)?.html()).toContain(formatDate(testReport.value.started_at.toDate(), 'en'));
        expect(labels?.at(4)?.html()).toContain('Lasted For:');
        expect(values?.at(4)?.html()).toContain(formatInterval(testReport.value.started_at.toDate(), testReport.value.ended_in!.toDate()));
        expect(labels?.at(5)?.html()).toContain('Score:');
        expect(values?.at(5)?.html()).toContain((testReport.value.result?.score ?? 0) + ' / ' + testReport.value.test.max_points);
    });
});
