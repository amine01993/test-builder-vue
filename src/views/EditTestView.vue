<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import draggable from 'vuedraggable';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useTestServiceStore } from '@/stores/testService';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useLocalizationStore } from '@/stores/localization';
import AppContainer from '@/components/AppContainer.vue';

const {t} = useI18n();
const { test_id } = defineProps<{test_id: string}>();
const route = useRoute();
const router = useRouter();
const {isDesktop, startLoading, endLoading, showMessage} = useMainStore();
const {spaceLabel} = useLocalizationStore();
const {auth} = useAuthenticationStore();
const {test, loadTest, updateTest} = useTestServiceStore();
const {questions, loadQuestions, updateQuestionsPositions} = useQuestionServiceStore();
const QuestionItem = defineAsyncComponent(() => import('@/components/items/QuestionItem.vue'));
const QuestionItemD = defineAsyncComponent(() => import('@/components/items/QuestionItemD.vue'));

const name = ref('');
const description = ref('');
const timeLimit: Ref<number|string> = ref(0);

const showForm = ref((route.query.sF != '0'));
const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(name.value === '') _errors.name = t('Name required');

    if(typeof timeLimit.value === 'string') _errors.timeLimit = t('The time limit must be a number');
    else if(timeLimit.value < 0) _errors.timeLimit = t('The time limit can\'t be a negatif number');

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
        name.value = test.value.name;
        description.value = test.value.description;
        timeLimit.value = test.value.time_limit;
    }
    catch(error) {
        showMessage('failure', t('Error loading test data.'));
    }
    finally {
        if(showForm.value) endLoading();
    }

    try {
        if(test.value) {
            await loadQuestions(test.value);
        }
    }
    catch(error) {
        console.log('EditTestView', error);
        showMessage('failure', t('Error loading questions.'));
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

    try {
        await updateTest(test_id, {
            name: name.value,
            description: description.value,
            time_limit: Number(timeLimit.value),
        });
        serverErrors.value = [];
        showMessage('success', t('Test edited with success.'));
        router.push({name: 'tests'});
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
    if(test_id) {
        updateQuestionsPositions(test_id)
        .then(() => {
            showMessage('success', t('Positions updated with success.'));
        })
        .catch(error => {
            showMessage('failure', t('Sorry! Positions can not be updated.'));
        });
    }
}
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="test-form" :class="{'hide-form': !showForm}">
                <div class="test-form-title mb-4">{{ t('Edit Test') }}</div>
                <button class="btn toggle-form-btn" @click="toggleShowForm" :aria-label="showForm ? t('hide editing form') : t('show editing form')">
                    <i class="bi" :class="{'bi-chevron-down': !showForm, 'bi-chevron-up': showForm}"></i>
                </button>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-name" class="form-label">{{ t('Name') }}<span class="required">*</span></label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="test-input-name" v-model="name" 
                        :disabled="submitting" :tabindex="showForm ? undefined : -1" aria-required>
                    <div class="invalid-feedback is-invalid" v-if="errors.name">{{ errors.name }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-description" class="form-label">{{ t('Description') }}</label>
                    <textarea class="form-control" :class="{'is-invalid': errors.description}" id="test-input-description" v-model="description" 
                        rows="3" :disabled="submitting" :tabindex="showForm ? undefined : -1"></textarea>
                    <div class="invalid-feedback is-invalid" v-if="errors.description">{{ errors.description }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-timelimit" class="form-label">{{ t('Time Limit') }}</label>
                    <button class="label-info" :data-bs-content="t('The test Time Limit is in seconds.<br>0 = no Time Limit')" 
                        :aria-label="t('the test time limit input is in seconds. the value of 0 means no time limit')" :tabindex="showForm ? undefined : -1">
                        <i class="bi bi-question-circle-fill"></i>
                    </button>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.timeLimit}" id="test-input-timelimit" v-model="timeLimit" 
                        :disabled="submitting" :tabindex="showForm ? undefined : -1">
                    <div class="invalid-feedback is-invalid" v-if="errors.timeLimit">{{ errors.timeLimit }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="editTest" :disabled="submitting" :tabindex="showForm ? undefined : -1">
                    <template v-if="!submitting">{{ t('Edit') }}</template>
                    <template v-else>{{ t('Editing') }} ...</template>
                </button>
            </div>
        </div>
    
        <div class="question-actions">
            <RouterLink :to="{name: 'create-question', params: {test_id}}" class="btn btn-warning create-question">{{ t('Create New Question') }}</RouterLink>
        </div>

        <div class="question-info" v-if="!questions || questions.length > 0">
            <template v-if="!questions">
                <div class="placeholder-wave">
                    <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
                </div>
            </template>
            <template v-else>
                <span class="question-info-label">{{ t('Total number of questions') }}{{ spaceLabel }}:</span> {{ questions?.length }}
            </template>
        </div>
        
        <template v-if="!isDesktop">
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
        <template v-else>
            <div class="question-list">
                <table class="table" :class="{'loading': !questions}">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">{{ t('Question') }}</th>
                            <th scope="col">{{ t('Max Points') }}</th>
                            <th scope="col">{{ t('Type') }}</th>
                            <th scope="col">{{ t('Position') }}</th>
                            <th scope="col">{{ t('Nbr of Choices') }}</th>
                            <th scope="col">{{ t('Last updated at') }}</th>
                            <th scope="col">{{ t('Actions') }}</th>
                        </tr>
                    </thead>
                    <template v-if="questions">
                        <draggable v-model="questions" item-key="id" tag="tbody" handle=".question-item-sort-handler" @end="onDragEnd">
                            <template #item="{element}">
                                <QuestionItemD :test_id="test_id" :question="element" />
                            </template>
                        </draggable>
                    </template>
                    <template v-else>
                        <tbody>
                            <QuestionItemD v-for="index in 5" :key="'question-placeholder-' + index" />
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

        .required {
            color: vars.$app-red;
            margin-left: 5px;
        }
        
        .label-info {
            margin-left: 1vh;
            color: vars.$app-blue;
            border: none;
            background-color: vars.$app-white;
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

    :deep(.question-item-container) {
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

            .question-item-sort-handler-container {
                padding: 0;
                position: relative;
                min-width: 6vh;

                .question-item-sort-handler {
                    min-height: 6vh;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    cursor: move;
                }
            }

            .question-last-update {
                color: vars.$app-blue-light;
            }

            .question-item-actions-container {
                vertical-align: middle;

                .question-item-actions {
                    display: flex;
                    gap: 1vh;

                    .btn {
                        border-radius: .5rem;
                        padding: .7rem .8rem;
                    }
                }
            }
        }

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
                color: vars.$app-blue-light;
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