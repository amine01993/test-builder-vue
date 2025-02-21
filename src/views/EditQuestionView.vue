<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import draggable from 'vuedraggable';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useChoiceServiceStore } from '@/stores/choiceService';
import { useLocalizationStore } from '@/stores/localization';
import { useTestServiceStore } from '@/stores/testService';
import { QuestionType } from '@/models/Question';
import AppContainer from '@/components/AppContainer.vue';

const {t} = useI18n();
const { test_id, question_id } = defineProps<{test_id: string, question_id: string}>();
const route = useRoute();
const router = useRouter();
const {isDesktop, startLoading, endLoading, showMessage} = useMainStore();
const {spaceLabel} = useLocalizationStore();
const {auth} = useAuthenticationStore();
const {test, loadTest} = useTestServiceStore();
const {question, loadQuestion, updateQuestion} = useQuestionServiceStore();
const {choices, loadChoices, updateChoicesPositions} = useChoiceServiceStore();

const ChoiceItem = defineAsyncComponent(() => import('@/components/items/ChoiceItem.vue'));
const ChoiceItemD = defineAsyncComponent(() => import('@/components/items/ChoiceItemD.vue'));

const text = ref('');
const type: Ref<QuestionType> = ref(QuestionType.Text);
const position: Ref<number|string> = ref(0);

const showForm = ref((route.query.sF != '0'));
const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(text.value === '') _errors.text = t('Question required');

    if(typeof position.value === 'string') _errors.position = t('The position must be a number');

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    if(showForm.value) startLoading();

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

    try {
        await loadQuestion(test_id, question_id);
        if(!question.value) {
            showMessage('failure', t('Question Not Found.'));
            return;
        }
        text.value = question.value.text;
        type.value = question.value.type;
        position.value = question.value.position;
    }
    catch(error) {
        showMessage('failure', t('Error loading question data.'));
    }
    finally {
        if(showForm.value) endLoading();
    }

    try {
        if(question.value) {
            await loadChoices(test_id, question.value);
        }
    }
    catch(error) {
        showMessage('failure', t('Error loading choices.'));
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

async function editQuestion() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        await updateQuestion(test_id, question_id, {
            text: text.value,
            type: type.value,
            position: Number(position.value),
        });
        serverErrors.value = [];
        showMessage('success', t('Question edited with success.'))
    }
    catch(error: any) {
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
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
    updateChoicesPositions(test_id, question_id)
    .then(() => {
        showMessage('success', t('Positions updated with success.'));
    })
    .catch(error => {
        showMessage('failure', t('Sorry! Positions can not be updated.'));
    });
}
</script>

<template>
    <AppContainer :test_id="test_id">
        <div class="app-main">
            <div class="question-form" :class="{'hide-form': !showForm}">
                <div class="question-form-title mb-4">{{ t('Edit Question') }}</div>
                <button class="btn toggle-form-btn" @click="toggleShowForm">
                    <i class="bi" :class="{'bi-chevron-down': !showForm, 'bi-chevron-up': showForm}"></i>
                </button>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="mb-3 test-name">
                    {{ test?.name }}
                </div>
    
                <div class="mb-3">
                    <label for="question-input-text" class="form-label">{{ t('Question') }}</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.text}" id="question-input-text" v-model="text" :disabled="submitting">
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
    
                <button type="button" class="btn btn-primary" @click="editQuestion" :disabled="submitting">
                    <template v-if="!submitting">{{ t('Edit') }}</template>
                    <template v-else>{{ t('Editing') }} ...</template>
                </button>
            </div>
        </div>
    
        <div class="choice-actions">
            <RouterLink :to="{name: 'create-choice', params: {test_id, question_id}}" class="btn btn-warning">{{ t('Create New Choice') }}</RouterLink>
        </div>
    
        <div class="choice-info" v-if="!choices || choices.length > 0">
            <template v-if="!choices">
                <div class="placeholder-wave">
                    <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
                </div>
            </template>
            <template v-else>
                <span class="choice-info-label">{{ t('Total number of choices') }}{{ spaceLabel }}:</span> {{ choices?.length }}
            </template>
        </div>

        <template v-if="!isDesktop">
            <template v-if="choices">
                <draggable v-model="choices" item-key="id" tag="div" :component-data="{'class': 'choice-list'}" handle=".choice-item-sort-handler" @end="onDragEnd">
                    <template #item="{element}">
                        <ChoiceItem :test_id="test_id" :question_id="question_id" :choice="element" />
                    </template>
                </draggable>
            </template>
            <template v-else>
                <div class="choice-list">
                    <ChoiceItem v-for="index in [0, 1, 2]" :key="'choice-placeholder-' + index" />
                </div>
            </template>
        </template>
        <template v-else>
            <div class="choice-list">
                <table class="table" :class="{'loading': !choices}">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">{{ t('Choice') }}</th>
                            <th scope="col">{{ t('Points') }}</th>
                            <th scope="col">{{ t('Is Correct?') }}</th>
                            <th scope="col">{{ t('Position') }}</th>
                            <th scope="col">{{ t('Last updated at') }}</th>
                            <th scope="col">{{ t('Actions') }}</th>
                        </tr>
                    </thead>
                    <template v-if="choices">
                        <draggable v-model="choices" item-key="id" tag="tbody" handle=".choice-item-sort-handler" @end="onDragEnd">
                            <template #item="{element}">
                                <ChoiceItemD :test_id="test_id" :question_id="question_id" :choice="element" />
                            </template>
                        </draggable>
                    </template>
                    <template v-else>
                        <tbody>
                            <ChoiceItemD v-for="index in 5" :key="'choice-placeholder-' + index" />
                        </tbody>
                    </template>
                </table>
            </div>
        </template>
    </AppContainer>
</template>

<style scoped lang="scss">
@use 'sass:string';
@use '@/assets/variables' as vars;
@use '@/assets/mixins' as mxs;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;
    box-shadow: 5px 5px 25px vars.$app-grey;

    .question-form {
        position: relative;
        transition: max-height 200ms;
        max-height: 100vh;

        &.hide-form {
            max-height: 31px;
            overflow: hidden;

            .question-form-title {
                font-size: 1.3em;
                text-align: left;
                transform: translateX(0);
                margin-left: 0;
            }
        }

        .test-name {
            text-align: center;
            font-weight: 600;
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

        .question-form-title {
            font-size: 1.7em;
            font-weight: 600;
            transform: translateX(-50%);
            margin-left: 50%;
            display: block;
            width: max-content;
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

.choice-actions {
    margin-top: 2vh;
    margin-right: 2vh;
    display: flex;
    justify-content: flex-end;
}

.choice-info {
    margin-top: 2vh;
    margin-left: 2vh;
    font-weight: 300;
}

.choice-list {
    margin: 2vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;

    @include mxs.desktopOnly {
        .table.loading > :not(caption) > * > * {
            border-bottom-width: 5px;
            border-bottom-color: vars.$app-white;
        }

        .table {
            thead {
                tr {
                    vertical-align: middle;
                    text-align: center;
                }
            }
        }
    }

    :deep(.choice-item-container) {
        display: flex;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;

        @include mxs.desktopOnly {
            box-shadow: none;
            font-size: .9em;
            display: table-row;

            .placeholder {
                display: table-cell;
                padding: 2vh;
            }

            .choice-item-sort-handler-container {
                padding: 0;
                position: relative;
                min-width: 6vh;

                .choice-item-sort-handler {
                    min-height: 6vh;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    cursor: move;
                }
            }

            .choice-last-update {
                color: vars.$app-grey2;
            }

            .choice-item-actions-container {
                vertical-align: middle;

                .choice-item-actions {
                    display: flex;
                    gap: 1vh;

                    .btn {
                        border-radius: .5rem;
                        padding: .7rem .8rem;
                    }
                }
            }
        }

        .choice-item-sort-handler {
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

        .choice-item-content {
            flex-grow: 1;
            min-width: calc(100% - 3vh - 4vh);
            padding: 1vh;

            .choice-item-title {
                text-align: center;
                font-weight: 600;
            }

            .choice-last-update {
                text-align: right;
                color: vars.$app-grey2;
                font-size: .9em;
                margin-top: 1vh;
            }

            .choice-item-divider {
                width: 60%;
                margin: 1vh auto;
                color: vars.$app-grey;
                opacity: 1;
            }

            .choice-item-actions {
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