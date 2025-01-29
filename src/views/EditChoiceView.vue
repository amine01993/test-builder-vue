<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useChoiceServiceStore } from '@/stores/choiceService';
import { QuestionType } from '@/models/Question';
import AppContainer from '@/components/AppContainer.vue';

const { test_id, question_id, choice_id } = defineProps<{test_id: string, question_id: string, choice_id: string}>();
const router = useRouter();
const {startLoading, endLoading, showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {getQuestion} = useQuestionServiceStore();
const {getChoice, updateChoice} = useChoiceServiceStore();
const questionText = ref('');
const questionType: Ref<QuestionType> = ref(QuestionType.Text);

const text = ref('');
const points: Ref<number|string> = ref(0);
const correctness: Ref<boolean> = ref(false);
const position: Ref<number|string> = ref(0);

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(text.value === '') _errors.text = 'Choice required';

    if(typeof points.value === 'string') _errors.points = 'Points must be a number';

    if(typeof position.value === 'string') _errors.position = 'The position must be a number';

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    startLoading();
    try {
        const question = await getQuestion(test_id, question_id);
        if(!question) {
            showMessage('failure', 'Question Not Found.');
            return;
        }
        questionText.value = question.text;
        questionType.value = question.type;

        const choice = await getChoice(test_id, question_id, choice_id);
        if(!choice) {
            showMessage('failure', 'Choice Not Found.');
            return;
        }
        text.value = choice.text;
        correctness.value = choice.is_correct!;
        points.value = choice.points!;
        position.value = choice.position;
    }
    catch(error) {
        showMessage('failure', 'Error loading data.');
    }
    finally {
        endLoading();
    }
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

async function editChoice() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        await updateChoice(test_id, question_id, choice_id, {
            text: text.value,
            is_correct: correctness.value,
            points: Number(points.value),
            position: Number(position.value),
            question: {
                type: questionType.value,
            },
        });
        showMessage('success', 'Choice edited with success.');
        router.push({name: 'edit-question', params: {test_id, question_id}, query: {sF: 0}});
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code];
    }
    finally {
        submitting.value = false;
    }
}
</script>

<template>
    <AppContainer :test_id="test_id" :question_id="question_id">
        <div class="app-main">
            <div class="choice-form">
                <div class="choice-form-title mb-4">Edit Choice</div>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>
    
                <div class="mb-3 question-text">
                    {{ questionText }}
                </div>
    
                <div class="mb-3">
                    <label for="choice-input-text" class="form-label">Choice</label>
                    <input :type="questionType === QuestionType.Number ? 'number' : 'text'" class="form-control" 
                        :class="{'is-invalid': errors.text}" id="choice-input-text" v-model="text" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.text">{{ errors.text }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="choice-input-pts" class="form-label">Points</label>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.points}" id="choice-input-pts" v-model="points" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.points">{{ errors.points }}</div>
                </div>
    
                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="choice-input-correctness" v-model="correctness">
                        <label class="form-check-label" for="choice-input-correctness">
                            Correct Choice
                        </label>
                    </div>
                </div>
    
                <div class="mb-3">
                    <label for="question-input-position" class="form-label">Position</label>
                    <span class="label-info" data-bs-content="The position of the choice in the question."><i class="bi bi-question-circle-fill"></i></span>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.position}" id="question-input-position" v-model="position" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.position">{{ errors.position }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="editChoice" :disabled="submitting">
                    <template v-if="!submitting">Edit</template>
                    <template v-else>Editing ...</template>
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

    .choice-form {

        .question-text {
            text-align: center;
            font-weight: 600;
        }

        .choice-form-title {
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