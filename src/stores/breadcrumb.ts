import { defineStore } from "pinia";
import { computed, ref, watch, type Ref } from "vue";
import { useI18n } from "vue-i18n";

export const useBreadcrumbStore = defineStore('breadcrumb', () => {
    const {locale, t} = useI18n();
    let routeName: string = '';
    let test_id: string|undefined;
    let question_id: string|undefined;
    const list: Ref<any> = ref([]);

    watch(locale, () => {
        list.value = getList();
    });

    function initList(_routeName: string, _test_id?: string, _question_id?: string) {
        routeName = _routeName;
        test_id = _test_id;
        question_id = _question_id;
        list.value = getList();
    }


    function getList() {
        switch(routeName) {
            case 'home':
                return [{ name: t('Home'), path: null }];
            case 'login':
                return [{ name: t('Login'), path: null }];
            case 'register':
                return [{ name: t('Register'), path: null }];
            case 'settings':
                return [{ name: t('Settings'), path: null }];
            case 'tests':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: null }
                ];
            case 'create-test':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Create a Test'), path: null },
                ];
            case 'edit-test':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: null },
                ];
            case 'preview-test':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Preview the Test'), path: null },
                ];
            case 'create-question':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: t('Create a Question'), path: null },
                ];
            case 'preview-question':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: t('Preview the Question'), path: null },
                ];
            case 'edit-question':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: t('Edit Question'), path: null },
                ];
            case 'create-choice':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: t('Edit Question'), path: {name: 'edit-question', params: {test_id, question_id}, query: {sF: 0}} }, 
                    { name: t('Create a Choice'), path: null },
                ];
            case 'edit-choice':
                return [
                    { name: t('Home'), path: {name: 'home'} }, 
                    { name: t('Tests'), path: {name: 'tests'} }, 
                    { name: t('Edit Test'), path: {name: 'edit-test', params: {test_id}, query: {sF: 0}} }, 
                    { name: t('Edit Question'), path: {name: 'edit-question', params: {test_id, question_id}, query: {sF: 0}} }, 
                    { name: t('Edit Choice'), path: null },
                ];
            default:
                return [];
        }
    }

    return {
        initList,
        list: computed(() => list),
    };
});