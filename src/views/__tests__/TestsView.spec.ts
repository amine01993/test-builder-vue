import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia"; 
import { nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import { useTestServiceStore } from "@/stores/testService";
import { tests as testsData } from "@/components/items/__tests__/testData";
import AppContainer from "@/components/AppContainer.vue";
import AppMenu from "@/components/AppMenu.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import TestsView from "../TestsView.vue";
import TestItem from "@/components/items/TestItem.vue";

describe('TestsView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push('/tests');
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());
        
        wrapper = mount(TestsView, {
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


        await flushPromises();
    });

    it('navigate to tests', async () => {
        const push = vitest.spyOn(router, 'push');
        const container = wrapper?.findComponent(AppContainer);
        const menu = container?.findComponent(AppMenu);
        const menuItems = menu?.findAll('.menu-item');
        const testsLink = menuItems?.at(1)?.find('a');

        expect(container?.exists()).toBe(true);
        expect(menu?.exists()).toBe(true);
        expect(menuItems?.length).toBeGreaterThanOrEqual(2);
        expect(testsLink?.exists()).toBe(true);
        expect(testsLink?.text()).toContain('Tests');

        await testsLink?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'tests'});
    });

    it('check if menu item is highlighted', () => {
        const container = wrapper?.findComponent(AppContainer);
        const menu = container?.findComponent(AppMenu);
        const menuItems = menu?.findAll('.menu-item');
        const testsLink = menuItems?.at(1)?.find('a');

        expect(menuItems?.at(0)?.find('a')?.classes('selected-item')).toBe(false);
        expect(testsLink?.classes('selected-item')).toBe(true);
    });

    it('check breadcrumb', async () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(2);
        expect(items?.at(0)?.find('a').exists()).toBe(true);
        expect(items?.at(0)?.html()).toContain('Home');
        expect(items?.at(1)?.find('a').exists()).toBe(false);
        expect(items?.at(1)?.html()).toContain('Tests');
    });

    it('create new test btn', async () => {
        const push = vitest.spyOn(router, 'push');
        const newTest = wrapper?.find('.create-test');

        expect(newTest?.exists()).toBe(true);
        await newTest?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'create-test'});
    });

    it('check test count when undefined', () => {
        const count = wrapper?.find('.test-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(true);
        expect(count?.find('.test-info-label').exists()).toBe(false);
    });
    
    it('check test count when (testCount = 0)', async () => {
        const {testCount} = useTestServiceStore();
        testCount.value = 0;
        await nextTick();

        const count = wrapper?.find('.test-info');

        expect(count?.exists()).toBe(false);
    });
        
    it('check test count when defined', async () => {
        const {testCount} = useTestServiceStore();
        testCount.value = 10;
        await nextTick();
        
        const count = wrapper?.find('.test-info');

        expect(count?.exists()).toBe(true);
        expect(count?.find('.placeholder-wave').exists()).toBe(false);
        expect(count?.find('.test-info-label').exists()).toBe(true);
        expect(count?.text()).toContain('Total number of tests: ' + testCount.value);
    });

    it('check test list when undefined', async () => {
        const list = wrapper?.find('.test-list');
        const testItems = wrapper?.findAllComponents(TestItem);

        expect(list?.exists()).toBe(true);
        expect(testItems?.length).toBe(3);
        expect(testItems?.at(0)?.find('.test-item-container').classes('placeholder-wave')).toBe(true);
    });

    it('check test report list when defined and no more tests', async () => {
        const {testCount, tests} = useTestServiceStore();
        const list = wrapper?.find('.test-list');

        tests.value = testsData;
        testCount.value = testsData.length;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);

        expect(list?.exists()).toBe(true);
        expect(testItems?.length).toBe(testsData.length);
        expect(testItems?.at(0)?.find('.test-item-container').classes('placeholder-wave')).toBe(false);
    });

    it('check test report list when defined and more tests to load', async () => {
        const {testCount, tests} = useTestServiceStore();

        tests.value = testsData;
        testCount.value = testsData.length + 10;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);

        expect(testItems?.length).toBe(testsData.length + 1);
        expect(testItems?.at(testsData.length)?.find('.test-item-container').classes('placeholder-wave')).toBe(true);
    });

    it('check test item preview-test link', async () => {
        const push = vitest.spyOn(router, 'push');
        const {tests} = useTestServiceStore();

        tests.value = testsData;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);
        const preview = testItems?.at(0)?.find('.test-item-actions .btn-primary');

        expect(preview?.exists()).toBe(true);
        expect(preview?.html()).toContain(`<i class="bi bi-eye-fill"></i>`);

        await preview?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'preview-test', params: {test_id: testsData[0].id}});
    });

    it('check test item edit-test link', async () => {
        const push = vitest.spyOn(router, 'push');
        const {tests} = useTestServiceStore();

        tests.value = testsData;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);
        const edit = testItems?.at(0)?.find('.test-item-actions .btn-success');

        expect(edit?.exists()).toBe(true);
        expect(edit?.html()).toContain(`<i class="bi bi-pencil-fill"></i>`);

        await edit?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'edit-test', params: {test_id: testsData[0].id}});
    });

    it('check test item delete action', async () => {
        const {tests} = useTestServiceStore();

        tests.value = testsData;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);
        const deleteBtn = testItems?.at(0)?.find('.test-item-actions .btn-danger');

        expect(deleteBtn?.exists()).toBe(true);
        expect(deleteBtn?.html()).toContain(`<i class="bi bi-trash3-fill"></i>`);
    });

    it('check test item copy link action', async () => {
        const {tests} = useTestServiceStore();

        tests.value = testsData;
        await nextTick();
        const testItems = wrapper?.findAllComponents(TestItem);
        const copyBtn = testItems?.at(0)?.find('.test-item-actions .btn-warning');

        expect(copyBtn?.exists()).toBe(true);
        expect(copyBtn?.html()).toContain(`<i class="bi bi-copy"></i>`);
    });
});