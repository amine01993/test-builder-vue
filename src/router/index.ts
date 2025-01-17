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
            path: '/create/test',
            name: 'create-test',
            component: () => import('../views/CreateTest.vue'),
        },
        {
            path: '/edit/test/:test_id',
            name: 'edit-test',
            component: () => import('../views/EditTest.vue'),
        },
        {
            path: '/view/test/:test_id',
            name: 'view-test',
            component: () => import('../views/ViewTest.vue'),
        },
    ],
})

export default router
