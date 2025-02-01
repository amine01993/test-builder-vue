import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale(en|fr)?',
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('../views/LoginView.vue'),
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('../views/RegisterView.vue'),
                },
                {
                    path: 'tests',
                    name: 'tests',
                    component: () => import('../views/TestsView.vue'),
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('../views/SettingsView.vue'),
                },
                {
                    path: 'test/create',
                    name: 'create-test',
                    component: () => import('../views/CreateTestView.vue'),
                },
                {
                    path: 'test/:test_id/edit',
                    name: 'edit-test',
                    props: true,
                    component: () => import('../views/EditTestView.vue'),
                },
                {
                    path: 'test/:test_id/preview',
                    name: 'preview-test',
                    props: true,
                    component: () => import('../views/PreviewTestView.vue'),
                },
                {
                    path: 'test/:test_id',
                    name: 'test-portal',
                    props: true,
                    component: () => import('../views/TestPortalView.vue'),
                },
                {
                    path: 'report/:user_test_id',
                    name: 'test-report',
                    props: true,
                    component: () => import('../views/TestReportView.vue'),
                },
                {
                    path: 'test/:test_id/question/create',
                    name: 'create-question',
                    props: true,
                    component: () => import('../views/CreateQuestionView.vue'),
                },
                {
                    path: 'test/:test_id/question/:question_id/preview',
                    name: 'preview-question',
                    props: true,
                    component: () => import('../views/PreviewQuestionView.vue'),
                },
                {
                    path: 'test/:test_id/question/:question_id/edit',
                    name: 'edit-question',
                    props: true,
                    component: () => import('../views/EditQuestionView.vue'),
                },
                {
                    path: 'test/:test_id/question/:question_id/choice/create',
                    name: 'create-choice',
                    props: true,
                    component: () => import('../views/CreateChoiceView.vue'),
                },
                {
                    path: 'test/:test_id/question/:question_id/choice/:choice_id/edit',
                    name: 'edit-choice',
                    props: true,
                    component: () => import('../views/EditChoiceView.vue'),
                },
                {
                    path: ':pathMatch(.*)*',
                    name: 'notfound',
                    component: () => import('../views/NotFoundView.vue'), 
                }
            ]
        }
    ],
})

export default router
