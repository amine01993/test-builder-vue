import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
        },
        {
            path: '/tests',
            name: 'tests',
            component: () => import('../views/TestsView.vue'),
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../views/SettingsView.vue'),
        },
        {
            path: '/test/create',
            name: 'create-test',
            component: () => import('../views/CreateTestView.vue'),
        },
        {
            path: '/test/:test_id/edit',
            name: 'edit-test',
            component: () => import('../views/EditTestView.vue'),
        },
        {
            path: '/test/:test_id/preview',
            name: 'preview-test',
            component: () => import('../views/PreviewTestView.vue'),
        },
        {
            path: '/test/:test_id',
            name: 'test-portal',
            component: () => import('../views/TestPortalView.vue'),
        },
        {
            path: '/test/:test_id/question/create',
            name: 'create-question',
            component: () => import('../views/CreateQuestionView.vue'),
        },
        {
            path: '/test/:test_id/question/:question_id/preview',
            name: 'preview-question',
            component: () => import('../views/PreviewQuestionView.vue'),
        },
        {
            path: '/test/:test_id/question/:question_id/edit',
            name: 'edit-question',
            component: () => import('../views/EditQuestionView.vue'),
        },
        {
            path: '/test/:test_id/question/:question_id/choice/create',
            name: 'create-choice',
            component: () => import('../views/CreateChoiceView.vue'),
        },
        {
            path: '/test/:test_id/question/:question_id/choice/:choice_id/edit',
            name: 'edit-choice',
            component: () => import('../views/EditChoiceView.vue'),
        },
    ],
})

export default router
