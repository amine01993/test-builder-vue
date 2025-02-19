import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import router from "@/router";
import i18n from "@/i18n";
import { useUserTestServiceStore } from "@/stores/userTestService";
import { formatTime, sleep } from "@/helpers/utils";
import {fullRealTest} from '@/components/items/__tests__/testData';
import DisplayQuestion from "@/components/items/DisplayQuestion.vue";
import TestPortalView from "../TestPortalView.vue";

describe('TestPortalView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push(`/test/:test_id`);
        await router.isReady();

        if(wrapper) return;

        wrapper = mount(TestPortalView, {
            global: {
                plugins: [
                    router,
                    i18n,
                    createTestingPinia({
                        createSpy: vitest.fn,
                        stubActions: false,
                    }),
                ]
            }
        });
    });

    it('check when test is undefined', () => {
        const userForm = wrapper?.find('.user-info-form');
        const header = wrapper?.find('.app-test-header');
        const description = wrapper?.find('.app-test-description');
        const main = wrapper?.find('.app-main');

        expect(userForm?.exists()).toBe(true);
        expect(header?.exists()).toBe(false);
        expect(description?.exists()).toBe(false);
        expect(main?.exists()).toBe(false);
    });

    it('check input fields when test is undefined', () => {
        const userForm = wrapper?.find('.user-info-form');
        const fullName = userForm?.find('#full-name-input');
        const email = userForm?.find('#email-input');

        expect(fullName?.exists()).toBe(true);
        expect(email?.exists()).toBe(true);
    });

    it('check labels and submit btn when test is undefined', () => {
        const userForm = wrapper?.find('.user-info-form');
        const fullName = userForm?.find('[for="full-name-input"]');
        const email = userForm?.find('[for="email-input"]');
        const btn = userForm?.find('[type="button"]');

        expect(fullName?.exists()).toBe(true);
        expect(email?.exists()).toBe(true);
        expect(btn?.exists()).toBe(true);

        expect(fullName?.html()).toContain('Full Name');
        expect(email?.html()).toContain('Email');
        expect(btn?.html()).toContain('Start Test');
    });

    it('submit invalid data when test is undefined', async () => {
        const userForm = wrapper?.find('.user-info-form');
        const fullName = userForm?.find('#full-name-input');
        const email = userForm?.find('#email-input');
        const btn = userForm?.find('[type="button"]');

        await fullName?.setValue('');
        await email?.setValue('notvalidemail');

        await btn?.trigger('click');

        const fullNameFeed = userForm?.find('#full-name-input + .invalid-feedback');
        const emailFeed = userForm?.find('#email-input + .invalid-feedback');

        expect(fullNameFeed?.exists()).toBe(true);
        expect(emailFeed?.exists()).toBe(true);
        expect(fullNameFeed?.html()).toContain('Full Name required');
        expect(emailFeed?.html()).toContain('Invalid email');
    });

    it('check when test is defined', async () => {
        const {test} = useUserTestServiceStore();
        test.value = fullRealTest;
        await nextTick();

        const userForm = wrapper?.find('.user-info-form');
        const header = wrapper?.find('.app-test-header');
        const description = wrapper?.find('.app-test-description');
        const main = wrapper?.find('.app-main');

        expect(userForm?.exists()).toBe(false);
        expect(header?.exists()).toBe(true);
        expect(description?.exists()).toBe(true);
        expect(main?.exists()).toBe(true);
    });

    it('check header when test is defined', async () => {
        const {time_limit} = useUserTestServiceStore();
        const header = wrapper?.find('.app-test-header');
        const name = header?.find('.test-name');
        const limit = header?.find('.test-limit');

        expect(name?.exists()).toBe(true);
        expect(limit?.exists()).toBe(true);

        time_limit.value = fullRealTest.time_limit;
        await nextTick();

        expect(name?.html()).toContain(fullRealTest.name);
        expect(limit?.find('i.bi.bi-alarm').exists()).toBe(true);
        expect(limit?.html()).toContain(formatTime(time_limit.value));

        let interval: any;
        if(time_limit.value > 0) {
            interval = setInterval(() => {
                time_limit.value--;
            }, 1000);
        }

        await sleep(1000);
        expect(limit?.html()).toContain(formatTime(fullRealTest.time_limit - 1));

        if(interval) {
            clearInterval(interval);
            interval = undefined;
        }
    });

    it('check description when test is defined', async () => {
        const description = wrapper?.find('.app-test-description');
        const text = description?.find('.test-description');
        const points = description?.find('.test-points');

        expect(text?.exists()).toBe(true);
        expect(points?.exists()).toBe(true);

        expect(text?.html()).toContain(fullRealTest.description.replace(/\n/g, "<br>"));
        expect(points?.html()).toContain(`(${fullRealTest.max_points} pts)`);
    });

    it('check main test when test is defined', () => {
        const main = wrapper?.find('.app-main');
        const form = main?.find({ref: 'test-form'});
        const actions = main?.find('.app-test-actions');
        const toTopBtn = actions?.find('.to-the-top');
        const submitBtn = actions?.find('.btn-primary');

        expect(form?.exists()).toBe(true);
        expect(actions?.exists()).toBe(true);
        expect(toTopBtn?.exists()).toBe(true);
        expect(submitBtn?.exists()).toBe(true);

        const questions = form?.findAllComponents(DisplayQuestion);
        expect(questions.length).toBe(fullRealTest.questionCount);

        expect(toTopBtn?.find('i.bi.bi-arrow-up').exists()).toBe(true);
        expect(submitBtn?.html()).toContain('Finish The Test');
    });
});
