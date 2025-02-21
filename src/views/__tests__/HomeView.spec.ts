import { flushPromises, mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { nextTick } from "vue";
import router from "@/router";
import i18n from "@/i18n";
import { useTestServiceStore } from "@/stores/testService";
import { useUserTestServiceStore } from "@/stores/userTestService";
import { userTests as userTestsData } from "@/components/items/__tests__/userTestData";
import UserTestItem from "@/components/items/UserTestItem.vue";
import HomeView from "../HomeView.vue";
import AppContainer from "@/components/AppContainer.vue";
import AppMenu from "@/components/AppMenu.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

describe('HomeView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push('/');
        await router.isReady();

        if(wrapper) return;

        setActivePinia(createPinia());

        wrapper = mount(HomeView, {
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

    it('navigate to home', async () => {
        const push = vitest.spyOn(router, 'push');
        const container = wrapper?.findComponent(AppContainer);
        const menu = container?.findComponent(AppMenu);
        const menuItems = menu?.findAll('.menu-item');
        const homeLink = menuItems?.at(0)?.find('a');

        expect(container?.exists()).toBe(true);
        expect(menu?.exists()).toBe(true);
        expect(menuItems?.length).toBeGreaterThanOrEqual(1);
        expect(homeLink?.exists()).toBe(true);
        expect(homeLink?.text()).toContain('Home');

        await homeLink?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'home'});
    });

    it('check if menu item is highlighted', () => {
        const container = wrapper?.findComponent(AppContainer);
        const menu = container?.findComponent(AppMenu);
        const menuItems = menu?.findAll('.menu-item');
        const homeLink = menuItems?.at(0)?.find('a');

        expect(homeLink?.classes('selected-item')).toBe(true);
    });

    it('check breadcrumb', async () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(1);
        expect(items?.at(0)?.html()).not.toContain('<a>');
        expect(items?.at(0)?.html()).toContain('Home');
    });

    it('check test stats when undefined', () => {
        const items = wrapper?.findAll('.test-stat');
        const stat1 = items?.at(0);
        const stat2 = items?.at(1);

        expect(items?.length).toBe(2);
        
        expect(stat1?.find('.stat-title').exists()).toBe(true);
        expect(stat1?.find('.stat-title').text()).toContain('Tests');
        expect(stat1?.find('.stat-content').exists()).toBe(false);
        expect(stat1?.find('.placeholder-wave').exists()).toBe(true);

        expect(stat2?.find('.stat-title').exists()).toBe(true);
        expect(stat2?.find('.stat-title').text()).toContain('Test Sessions');
        expect(stat2?.find('.stat-content').exists()).toBe(false);
        expect(stat2?.find('.placeholder-wave').exists()).toBe(true);
    });

    
    it('check test stats when defined', async () => {
        const {testCount} = useTestServiceStore();
        const {userTestCount} = useUserTestServiceStore();
        const items = wrapper?.findAll('.test-stat');
        const stat1 = items?.at(0);
        const stat2 = items?.at(1);

        testCount.value = 10;
        userTestCount.value = 100;
        await nextTick();
        
        expect(items?.length).toBe(2);
        
        expect(stat1?.find('.stat-title').exists()).toBe(true);
        expect(stat1?.find('.stat-title').text()).toContain('Tests');
        expect(stat1?.find('.stat-content').exists()).toBe(true);
        expect(stat1?.find('.stat-content').text()).toContain(testCount.value);
        expect(stat1?.find('.placeholder-wave').exists()).toBe(false);

        expect(stat2?.find('.stat-title').exists()).toBe(true);
        expect(stat2?.find('.stat-title').text()).toContain('Test Sessions');
        expect(stat2?.find('.stat-content').exists()).toBe(true);
        expect(stat2?.find('.stat-content').text()).toContain(userTestCount.value);
        expect(stat2?.find('.placeholder-wave').exists()).toBe(false);
    });

    it('check test report list when undefined', async () => {
        const reportList = wrapper?.find('.test-report-list');
        const userTestItems = wrapper?.findAllComponents(UserTestItem);

        expect(reportList?.exists()).toBe(true);
        expect(userTestItems?.length).toBe(2);
        expect(userTestItems?.at(0)?.find('.user-test-item-container').classes('placeholder-wave')).toBe(true);
    });

    it('check test report list when defined and no more tests', async () => {
        const {userTestCount, userTests} = useUserTestServiceStore();
        const reportList = wrapper?.find('.test-report-list');

        userTests.value = userTestsData;
        userTestCount.value = userTestsData.length;
        await nextTick();
        const userTestItems = wrapper?.findAllComponents(UserTestItem);

        expect(reportList?.exists()).toBe(true);
        expect(userTestItems?.length).toBe(2);
        expect(userTestItems?.at(0)?.find('.user-test-item-container').classes('placeholder-wave')).toBe(false);
    });

    it('check test report list when defined and more tests to load', async () => {
        const {userTestCount, userTests} = useUserTestServiceStore();

        userTests.value = userTestsData;
        userTestCount.value = userTestsData.length + 10;
        await nextTick();
        const userTestItems = wrapper?.findAllComponents(UserTestItem);

        expect(userTestItems?.length).toBe(3);
        expect(userTestItems?.at(2)?.find('.user-test-item-container').classes('placeholder-wave')).toBe(true);
    });
});