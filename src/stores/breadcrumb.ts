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
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: null }
                ];
            case 'create-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Create a test', path: null },
                ];
            case 'edit-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Edit a test', path: null },
                ];
            case 'preview-test':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Preview a test', path: null },
                ];
            case 'create-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: 'Create a question', path: null },
                ];
            case 'preview-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: 'Preview a question', path: null },
                ];
            case 'edit-question':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: 'Edit a question', path: null },
                ];
            case 'create-choice':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: 'Question', path: {name: 'edit-question', params: {test_id, question_id}, query: {sF: 0}} }, 
                    { name: 'Create a choice', path: null },
                ];
            case 'edit-choice':
                return [
                    { name: 'Home', path: {name: 'home'} }, 
                    { name: 'Tests', path: {name: 'tests'} }, 
                    { name: 'Test', path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: 'Question', path: {name: 'edit-question', params: {test_id, question_id}, query: {sF: 0}} }, 
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