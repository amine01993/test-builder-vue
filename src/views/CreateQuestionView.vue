<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useTestServiceStore } from '@/stores/testService';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';
import { useLocalizationStore } from '@/stores/localization';
import { QuestionType } from '@/models/Question';
import AppContainer from '@/components/AppContainer.vue';

const { test_id } = defineProps<{test_id: string}>();
const router = useRouter();
const {t} = useI18n();
const {showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {spaceLabel} = useLocalizationStore();
const {test, loadTest} = useTestServiceStore();
const {addQuestion} = useQuestionServiceStore();

const text = ref('');
const type: Ref<QuestionType> = ref(QuestionType.Text);
const position: Ref<number|string> = ref(0);

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(text.value.trim() === '') _errors.text = t('Question required');

    if(typeof position.value === 'string') _errors.position = t('The position must be a number');

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    try {
        await loadTest(test_id);
        if(!test.value) {
            showMessage('failure', t('Test Not Found.'));
            return;
        }
    }
    catch(error) {
        showMessage('failure', t('Error loading test.'));
    }
    finally {}
});

const popOvers: Popover[] = [];
onMounted(() => {
    const popOverEls = document.querySelectorAll('.app-main .label-info');
    popOverEls.forEach(el => {
        popOvers.push(new Popover(el, {
            container: 'body',
            placement: 'right',
            html: true,
            trigger: 'click'
        }));
    });
});

onUnmounted(() => {
    popOvers.forEach(popOver => popOver.dispose());
    onAuthEventDispose();
});

async function createQuestion() {
    if(submitting.value || !test.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        await addQuestion(test.value, {
            text: text.value.trim(),
            max_points: 0,
            choiceCount: 0,
            type: type.value,
            position: Number(position.value),
        });
        serverErrors.value = [];
        showMessage('success', t('Question created with success.'));
        router.push({name: 'edit-test', params: {test_id}, query: {sF: 0}});
    }
    catch(error: any) {
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}
</script>

<template>
    <AppContainer :test_id="test_id">
        <div class="app-main">
            <div class="question-form">
                <div class="question-form-title mb-4">{{ t('Create Question') }}</div>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>
    
                <div class="mb-3 test-name">
                    {{ test?.name }}
                </div>
    
                <div class="mb-3">
                    <label for="question-input-text" class="form-label">{{ t('Question') }}<span class="required">*</span></label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.text}" id="question-input-text" v-model="text" 
                        :disabled="submitting" aria-required>
                    <div class="invalid-feedback is-invalid" v-if="errors.text">{{ errors.text }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="question-input-type" class="form-label">{{ t('Question Type') }}</label>
                    <select class="form-select" :class="{'is-invalid': errors.type}" id="question-input-type" v-model="type" :disabled="submitting">
                        <option :value="QuestionType.Text">{{ t('Text') }}</option>
                        <option :value="QuestionType.MultipleChoice">{{ t('Multiple Choice') }}</option>
                        <option :value="QuestionType.Number">{{ t('Number') }}</option>
                        <option :value="QuestionType.SingleChoice">{{ t('Single Choice') }}</option>
                    </select>
                    <div class="invalid-feedback is-invalid" v-if="errors.type">{{ errors.type }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="question-input-position" class="form-label">{{ t('Position') }}</label>
                    <span class="label-info" :data-bs-content="t('The position of the question in the test.')"><i class="bi bi-question-circle-fill"></i></span>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.position}" id="question-input-position" v-model="position" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.position">{{ errors.position }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="createQuestion" :disabled="submitting">
                    <template v-if="!submitting">{{ t('Create') }}</template>
                    <template v-else>{{ t('Creating') }} ...</template>
                </button>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;
    box-shadow: 5px 5px 25px vars.$app-grey;

    .question-form {
        .test-name {
            text-align: center;
            font-weight: 600;
        }

        .question-form-title {
            font-size: 1.7em;
            font-weight: 600;
            text-align: center;
        }

        [type=button] {
            margin: auto;
            display: block;
        }

        .alert ul {
            margin-bottom: 0;
        }

        .required {
            color: vars.$app-red;
            margin-left: 5px;
        }
        
        .label-info {
            padding-left: 1.5vh;
            color: vars.$app-blue;
        }
    }
}
</style>