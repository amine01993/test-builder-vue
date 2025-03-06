import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import router from "@/router";
import i18n from "@/i18n";
import { createTestingPinia } from "@pinia/testing";
import AppContainer from "@/components/AppContainer.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import LoginView from "../LoginView.vue";

describe('LoginView', () => {
    let wrapper: VueWrapper|null = null;

    beforeEach(async () => {
        router.push('/login');
        await router.isReady();

        setActivePinia(createPinia());

        wrapper = mount(LoginView, {
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

    it('check breadcrumb', () => {
        const container = wrapper?.findComponent(AppContainer);
        const breadcrumb = container?.findComponent(Breadcrumb);

        const breadcrumbContainer = breadcrumb?.find('.app-breadcrumb');
        const items = breadcrumbContainer?.findAll('li');

        expect(container?.exists()).toBe(true);
        expect(breadcrumb?.exists()).toBe(true);
        expect(breadcrumbContainer?.exists()).toBe(true);
        expect(items?.length).toBe(1);
        expect(items?.at(0)?.html()).not.toContain('<a>');
        expect(items?.at(0)?.html()).toContain('Login');
    });

    it('check login form', () => {
        const container = wrapper?.find('.sign-container');
        expect(container?.exists()).toBe(true);

        const title = container?.find('.login-form-title');
        expect(title?.exists()).toBe(true);
        expect(title?.html()).toContain('Login');

        const emailLabel = container?.find('[for="login-input-email"]');
        const emailInput = container?.find('#login-input-email');
        expect(emailLabel?.exists()).toBe(true);
        expect(emailLabel?.html()).toContain('Email');
        expect(emailInput?.exists()).toBe(true);

        const passwordLabel = container?.find('[for="login-input-password"]');
        const passwordInput = container?.find('#login-input-password');
        expect(passwordLabel?.exists()).toBe(true);
        expect(passwordLabel?.html()).toContain('Password');
        expect(passwordInput?.exists()).toBe(true);

        const submitBtn = container?.find('.login-form [type="button"]');
        expect(submitBtn?.exists()).toBe(true);
        expect(submitBtn?.html()).toContain('Login');
    });

    it('submit invalid registration form', async () => {
        const container = wrapper?.find('.sign-container');

        const emailInput = container?.find('#login-input-email');
        const passwordInput = container?.find('#login-input-password');
        const submitBtn = container?.find('.login-form [type="button"]');

        await emailInput?.setValue('mmm@test.fr');
        await passwordInput?.setValue('');

        await submitBtn?.trigger('click');

        const emailFeed = container?.find('#login-input-email + .invalid-feedback');
        const passwordFeed = container?.find('#login-input-password + .invalid-feedback');

        expect(emailFeed?.exists()).toBe(false);
        expect(passwordFeed?.exists()).toBe(true);
        expect(passwordFeed?.html()).toContain('Password required');
    });

    it('check third parties signup', () => {
        const container = wrapper?.find('.sign-container .signup-parties');
        const btn = container?.find('.google-auth');

        expect(container?.exists()).toBe(true);
        expect(container?.html()).toContain('Or Sign Up Using');
        expect(btn?.exists()).toBe(true);
        expect(btn?.find('i.bi.bi-google')?.exists()).toBe(true);
    });

    it('check sign up link', async () => {
        const push = vitest.spyOn(router, 'push');
        const container = wrapper?.find('.sign-container .signup-link');
        const link = container?.find('a');

        expect(container?.exists()).toBe(true);
        expect(container?.html()).toContain('Or Sign Up Using');
        expect(link?.exists()).toBe(true);
        expect(link?.html()).toContain('Sign Up');

        await link?.trigger('click');

        expect(push).toHaveBeenCalledOnce();
        expect(push).toHaveBeenCalledWith({name: 'register'});
    });
});
