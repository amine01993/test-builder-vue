import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import { useTestServiceStore } from "@/stores/testService";
import { sleep } from "@/helpers/utils";
import { fullTest } from "@/components/items/__tests__/testData";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PreviewTestView from "../PreviewTestView.vue";
import DisplayQuestion from "@/components/items/DisplayQuestion.vue";

describe('PreviewTestView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push('/test/wgLwri0DvrTiT5yhPSnM/preview');
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(PreviewTestView, {
            props: {
                test_id: "wgLwri0DvrTiT5yhPSnM",
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
        expect(items?.length).toBe(3);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(true);
        expect(items?.at(1)?.html()).toContain('Tests');
        expect(items?.at(2)?.find('a').exists()).toBe(false);
        expect(items?.at(2)?.html()).toContain('Preview the Test');
    });

    it('check preview test title', async () => {
        const {test} = useTestServiceStore();
        test.value = fullTest;
        await nextTick();

        const header = wrapper?.find('.app-test-header');
        expect(header?.exists()).toBe(true);

        const name = header?.find('.test-name');
        expect(name?.exists()).toBe(true);
        expect(name?.html()).toContain(fullTest.name);
    });
        
    it('check preview test timer', async () => {
        const {test, time_limit} = useTestServiceStore();
        test.value = fullTest;
        let interval: any;
        time_limit.value = fullTest.time_limit;
        if(time_limit.value > 0) {
            interval = setInterval(() => {
                time_limit.value--;
                if(time_limit.value === 0) {
                    clearInterval(interval);
                    interval = undefined;
                }
            }, 1000);
        }

        await nextTick();
        
        const timer = wrapper?.find('.app-test-header .test-limit');

        expect(timer?.exists()).toBe(true);
        expect(timer?.html()).toContain('3min');
        await sleep(1000);
        expect(timer?.html()).toContain('2min 59s');

        if(interval) {
            clearInterval(interval);
            interval = undefined;
        }
    });

    it('check preview test description and points', async () => {
        const {test} = useTestServiceStore();
        test.value = fullTest;
        await nextTick();

        const description = wrapper?.find('.app-test-description');
        expect(description?.exists()).toBe(true);

        const text = description?.find('.test-description');
        const points = description?.find('.test-points');
        expect(text?.exists()).toBe(true);
        expect(text?.html()).toContain(fullTest.description.replace(/\n/g, "<br>"));
        expect(points?.exists()).toBe(true);
        expect(points?.html()).toContain(`(${fullTest.max_points} pts)`);
    });

    it('check preview test number of questions', async () => {
        const {test} = useTestServiceStore();
        test.value = fullTest;
        await nextTick();

        const questions = wrapper?.findAllComponents(DisplayQuestion);

        expect(questions?.length).toBe(fullTest.questionCount);
    });

    it('check finish preview btn', async () => {
        const push = vitest.spyOn(router, 'push');
        const {test} = useTestServiceStore();
        test.value = fullTest;
        await nextTick();

        const finishBtn = wrapper?.find('.app-main .btn-primary');
        expect(finishBtn?.exists()).toBe(true);
    });
});