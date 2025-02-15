import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import router from "@/router";
import i18n from "@/i18n";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import NotFoundView from "../NotFoundView.vue";

describe('NotFoundView', () => {
    let wrapper: (VueWrapper|null) = null;

    beforeEach(async () => {
        router.push('/undefined-route');
        await router.isReady();

        setActivePinia(createPinia());
        
        wrapper = mount(NotFoundView, {
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

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);
        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(false);
    });
        
    it('check notFound page', () => {
        const main = wrapper?.find('.app-main');
        expect(main?.exists()).toBe(true);

        const error = main?.find('.error-code');
        const errorMsg = main?.find('.error-message');
        const description = main?.find('.description');

        expect(error?.exists()).toBe(true);
        expect(errorMsg?.exists()).toBe(true);
        expect(description?.exists()).toBe(true);
    });

    it('check go home link', async () => {
        const push = vitest.spyOn(router, 'push');
        const main = wrapper?.find('.app-main');
        const homeLink = main?.find('a.btn');

        expect(homeLink?.exists()).toBe(true);

        await homeLink?.trigger('click');
        
        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'home'});
    });
});