import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore('breadcrumb', () => {

    function getList(routeName: string, test_id?: string, question_id?: string) {
    
        switch(routeName) {
            case 'home':
                return [{ name: 'Home', path: null }];
            case 'login':
                return [{ name: 'Login', path: null }];
            case 'register':
                return [{ name: 'Register', path: null }];
            case 'settings':
                return [{ name: 'Settings', path: null }];
            case 'tests':
                return [{ name: 'Tests', path: null }];
            case 'create-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Create a test', path: null },
                ];
            case 'edit-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Edit a test', path: null },
                ];
            case 'preview-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Preview a test', path: null },
                ];
            case 'create-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}} }, 
                    { name: 'Create a question', path: null },
                ];
            case 'preview-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}} }, 
                    { name: 'Preview a question', path: null },
                ];
            case 'edit-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}} }, 
                    { name: 'Edit a question', path: null },
                ];
            case 'create-choice':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}} }, 
                    { name: 'Question', path: {name: 'edit-question', params: {test_id, question_id}} }, 
                    { name: 'Create a choice', path: null },
                ];
            case 'edit-choice':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}} }, 
                    { name: 'Question', path: {name: 'edit-question', params: {test_id, question_id}} }, 
                    { name: 'Edit a choice', path: null },
                ];
            default:
                return [];
        }
    }

    return {
        getList
    };
});