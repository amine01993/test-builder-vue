<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useTestServiceStore } from '@/stores/testService';
import { useMainStore } from '@/stores/main';
import { useAuthenticationStore } from '@/stores/auth';
import { QuestionType } from '@/models/Question';
import AppContainer from '@/components/AppContainer.vue';

const { test_id } = defineProps<{test_id: string}>();
const router = useRouter();
const {showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {getTest} = useTestServiceStore();
const {addQuestion} = useQuestionServiceStore();
const testName = ref('');

const text = ref('');
const type: Ref<QuestionType> = ref(QuestionType.Text);
const position: Ref<number|string> = ref(0);

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(text.value === '') _errors.text = 'Question required';

    if(typeof position.value === 'string') _errors.position = 'The position must be a number';

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    try {
        const test = await getTest(test_id);
        if(!test) {
            showMessage('failure', 'Test Not Found.');
            return;
        }
        testName.value = test.name;
    }
    catch(error) {
        showMessage('failure', 'Error loading test.');
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
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        await addQuestion(test_id, {
            text: text.value,
            max_points: 0,
            type: type.value,
            position: Number(position.value),
        });
        serverErrors.value = [];
        router.push({name: 'edit-test', params: {test_id}, query: {sF: 0}});
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code]
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
                <div class="question-form-title mb-4">Create Question</div>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>
    
                <div class="mb-3 test-name">
                    {{ testName }}
                </div>
    
                <div class="mb-3">
                    <label for="question-input-text" class="form-label">Question</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.text}" id="question-input-text" v-model="text" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.text">{{ errors.text }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="question-input-type" class="form-label">Question Type</label>
                    <select class="form-select" :class="{'is-invalid': errors.type}" id="question-input-type" v-model="type" :disabled="submitting">
                        <option :value="QuestionType.Text">Text</option>
                        <option :value="QuestionType.MultipleChoice">Multiple Choice</option>
                        <option :value="QuestionType.Number">Number</option>
                        <option :value="QuestionType.SingleChoice">Single Choice</option>
                    </select>
                    <div class="invalid-feedback is-invalid" v-if="errors.type">{{ errors.type }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="question-input-position" class="form-label">Position</label>
                    <span class="label-info" data-bs-content="The position of the question in the test."><i class="bi bi-question-circle-fill"></i></span>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.position}" id="question-input-position" v-model="position" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.position">{{ errors.position }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="createQuestion" :disabled="submitting">
                    <template v-if="!submitting">Create</template>
                    <template v-else>Creating ...</template>
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
            font-size: 2em;
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

        .label-info {
            padding-left: 1.5vh;
            color: vars.$app-blue;
        }
    }
}
</style>