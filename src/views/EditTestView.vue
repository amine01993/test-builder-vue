<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import draggable from 'vuedraggable';
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import { useTestServiceStore } from '@/stores/testService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useQuestionServiceStore } from '@/stores/questionService';
import QuestionItem from '@/components/items/QuestionItem.vue';
import Breadcrumb from '@/components/items/Breadcrumb.vue';
import type { Test } from '@/models/Test';

const { test_id } = defineProps<{test_id: string}>();
const route = useRoute();
const router = useRouter();
const {startLoading, endLoading, showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {getTest, updateTest} = useTestServiceStore();
const {questionCount, questions, loadQuestions, updateQuestionsPositions} = useQuestionServiceStore();

const name = ref('');
const description = ref('');
const maxScore: Ref<number|string> = ref(0);
const timeLimit: Ref<number|string> = ref(0);

const showForm = ref((route.query.sF != '0'));
const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(name.value === '') _errors.name = 'Name required';

    if(typeof maxScore.value === 'string') _errors.maxScore = 'Maximum score must be a number';
    else if(maxScore.value < 0) _errors.maxScore = 'Maximum score can\'t be a negatif number';

    if(typeof timeLimit.value === 'string') _errors.timeLimit = 'The time limit must be a number';
    else if(timeLimit.value < 0) _errors.timeLimit = 'The time limit can\'t be a negatif number';

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    if(showForm.value) startLoading();

    let test: Test|undefined;
    try {
        test = await getTest(test_id);
        if(!test) {
            showMessage('failure', 'Test Not Found.');
            return;
        }
        name.value = test.name;
        description.value = test.description;
        maxScore.value = test.max_points;
        timeLimit.value = test.time_limit;
    }
    catch(error) {
        showMessage('failure', 'Error loading test data.');
    }
    finally {
        if(showForm.value) endLoading();
    }

    try {
        if(test) {
            await loadQuestions(test);
        }
    }
    catch(error) {
        showMessage('failure', 'Error loading questions.');
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

async function editTest() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    // validation
    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    // editfirebase test
    try {
        await updateTest(test_id, {
            name: name.value,
            description: description.value,
            max_points: Number(maxScore.value),
            time_limit: Number(timeLimit.value),
        });
        serverErrors.value = [];
        router.push({name: 'tests'});
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}

function toggleShowForm() {
    showForm.value = !showForm.value;
    router.push({query: {sF: (showForm.value ? 1 : 0)}});
}

function onDragEnd() {
    if(test_id) {
        updateQuestionsPositions(test_id)
        .then(() => {
            showMessage('success', 'Positions updated with success.');
        })
        .catch(error => {
            showMessage('failure', 'Sorry! Positions can not be updated.');
        });
    }
}
</script>

<template>
    <AppHeader />
    <Breadcrumb />
    <AppMenu />

    <div class="app-main">
        <div class="test-form" :class="{'hide-form': !showForm}">
            <div class="test-form-title mb-4">Edit Test</div>
            <button class="btn toggle-form-btn" @click="toggleShowForm">
                <i class="bi" :class="{'bi-chevron-down': !showForm, 'bi-chevron-up': showForm}"></i>
            </button>

            <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                <ul>
                    <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                </ul>
            </div>

            <div class="mb-3">
                <label for="test-input-name" class="form-label">Name</label>
                <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="test-input-name" v-model="name" :disabled="submitting">
                <div class="invalid-feedback is-invalid" v-if="errors.name">{{ errors.name }}</div>
            </div>

            <div class="mb-3">
                <label for="test-input-description" class="form-label">Description</label>
                <textarea class="form-control" :class="{'is-invalid': errors.description}" id="test-input-description" v-model="description" rows="3" :disabled="submitting"></textarea>
                <div class="invalid-feedback is-invalid" v-if="errors.description">{{ errors.description }}</div>
            </div>

            <div class="mb-3">
                <label for="test-input-maxscore" class="form-label">Maximum Score</label>
                <span class="label-info" data-bs-content="The Maximum number of points a test taker can achieve.<br>0 = no Max Score"><i class="bi bi-question-circle-fill"></i></span>
                <input type="number" class="form-control" :class="{'is-invalid': errors.maxScore}" id="test-input-maxscore" v-model="maxScore" :disabled="submitting">
                <div class="invalid-feedback is-invalid" v-if="errors.maxScore">{{ errors.maxScore }}</div>
            </div>

            <div class="mb-3">
                <label for="test-input-timelimit" class="form-label">Time limit</label>
                <span class="label-info" data-bs-content="The test Time Limit is in seconds.<br>0 = no Time Limit"><i class="bi bi-question-circle-fill"></i></span>
                <input type="number" class="form-control" :class="{'is-invalid': errors.timeLimit}" id="test-input-timelimit" v-model="timeLimit" :disabled="submitting">
                <div class="invalid-feedback is-invalid" v-if="errors.timeLimit">{{ errors.timeLimit }}</div>
            </div>

            <button type="button" class="btn btn-primary" @click="editTest" :disabled="submitting">
                <template v-if="!submitting">Edit</template>
                <template v-else>Editing ...</template>
            </button>
        </div>
    </div>

    <div class="question-actions">
        <RouterLink :to="{name: 'create-question', params: {test_id}}" class="btn btn-warning create-question">Create New Question</RouterLink>
    </div>

    <div class="question-info" v-if="questionCount !== 0">
        <template v-if="questionCount">
            <span class="question-info-label">Total number of questions:</span> {{ questionCount }}
        </template>
        <template v-else>
            <div class="placeholder-wave">
                <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
            </div>
        </template>
    </div>
    
    <template v-if="questions">
        <draggable v-model="questions" item-key="id" tag="div" :component-data="{'class': 'question-list'}" handle=".question-item-sort-handler" @end="onDragEnd">
            <template #item="{element}">
                <QuestionItem :test_id="test_id" :question="element" />
            </template>
        </draggable>
    </template>
    <template v-else>
        <div class="question-list">
            <QuestionItem v-for="index in [0, 1, 2]" :key="'question-placeholder-' + index" />
        </div>
    </template>
</template>

<style scoped lang="scss">
@use 'sass:string';
@use '@/assets/variables' as vars;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;
    box-shadow: 5px 5px 25px vars.$app-grey;

    .test-form {
        position: relative;
        transition: max-height 200ms;
        max-height: 100vh;

        &.hide-form {
            max-height: 31px;
            overflow: hidden;

            .test-form-title {
                font-size: 1.3em;
                text-align: left;
                transform: translateX(0);
                margin-left: 0;
            }
        }

        .toggle-form-btn {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: -2vh;
            margin-top: -2vh;
            font-size: 1.3em;
            padding: 1.2rem;
            border: none;
        }

        .test-form-title {
            font-size: 2em;
            font-weight: 600;
            transform: translateX(-50%);
            margin-left: 50%;
            display: inline-block;
            transition: all 200ms;
            white-space: nowrap;
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

.question-actions {
    margin-top: 2vh;
    margin-right: 2vh;
    display: flex;
    justify-content: flex-end;
}

.question-info {
    margin-top: 2vh;
    margin-left: 2vh;
    font-weight: 300;
}

.question-list {
    margin: 2vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;

    :deep(.question-item-container) {
        display: flex;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;

        .question-item-sort-handler {
            min-width: 6vh;
            position: relative;
            background-color: string.unquote(vars.$app-grey + '75');

            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .question-item-content {
            flex-grow: 1;
            min-width: calc(100% - 3vh - 4vh);
            padding: 1vh;

            .question-item-title {
                text-align: center;
                font-weight: 600;
            }

            .question-last-update {
                text-align: right;
                color: vars.$app-grey2;
                font-size: .9em;
                margin-top: 1vh;
            }

            .question-item-divider {
                width: 60%;
                margin: 1vh auto;
                color: vars.$app-grey;
                opacity: 1;
            }

            .question-item-actions {
                display: flex;
                gap: 1.5vh;
                justify-content: flex-end;

                .btn {
                    border-radius: .5em;
                    padding: 0.5em 1em;
                }
            }
        }

        &.placeholder-wave {
            mask-image: linear-gradient(110deg, #000 65%, rgba(0, 0, 0, 0.8) 80%, #000 100%);
            animation-duration: 1s;
        }
    }
}
</style>