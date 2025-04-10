<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useTestServiceStore } from '@/stores/testService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useModalStore } from '@/stores/modal';
import { formatTime } from '@/helpers/utils';
import DisplayQuestion from '@/components/items/DisplayQuestion.vue';
import AppContainer from '@/components/AppContainer.vue';

const { test_id } = defineProps<{test_id: string}>();
const router = useRouter();
const {t} = useI18n();
const {startLoading, endLoading, showMessage} = useMainStore();
const {confirm: confirmFinish} = useModalStore();
const {auth} = useAuthenticationStore();
const {test, time_limit, loadTest} = useTestServiceStore();
let interval: ReturnType<typeof setInterval>|undefined = undefined;

const timeLimit = computed(() => {
    const format = formatTime(time_limit.value);
    if(format === '') return t('Time out');
    return format;

});

const description = computed(() => {
    if(test.value?.description) {
        return test.value.description.replace(/\n/g, "<br />");
    }
    return '';
});

const onAuthEventDispose = onAuthStateChanged(auth, async () => {
    startLoading();
    try {
        interval = await loadTest(test_id, true);
        if(!test.value) {
            showMessage('failure', t('Test Not Found.'));
            return;
        }
    }
    catch(error) {
        showMessage('failure', t('Error loading test data.'));
    }
    finally {
        endLoading();
    }
});

onUnmounted(() => {
    onAuthEventDispose();

    if(interval !== undefined) {
        clearInterval(interval);
        interval = undefined;
    }
});

function moveToTheTop() {
    window.scrollTo(0, 0);
}

function finishTest() {
    confirmFinish(
        t('Are you sure you want to submit the test?<br>You will not be able to continue the test once it is submitted.'),
        t('Submit'), async () => { submitTest(); }
    );
}

function submitTest() {
    router.push({name: 'tests'});
}
</script>

<template>
    <AppContainer>
        <div class="app-test-header" v-if="test">
            <div class="test-name">
                {{ test.name }}
            </div>
            <div class="test-limit" v-if="time_limit > 0">
                <i class="bi bi-alarm"></i>
                {{ timeLimit }}
            </div>
        </div>
        
        <div class="app-test-description" v-if="test?.description">
            <div class="test-description" v-html="description"></div>
            <div class="test-points">
                ({{ test.max_points }} pts)
            </div>
        </div>

        <div class="app-main" v-if="test">
            <DisplayQuestion v-for="(question, index) in test?.questions" :key="question.id"
                :question="question" :choices="question.choices" :nbr="index + 1" :preview="true" />
    
            <div class="app-test-actions">
                <button type="button" class="btn btn-outline-primary to-the-top" @click="moveToTheTop" :aria-label="t('go to the top of the page')">
                    <i class="bi bi-arrow-up"></i>
                </button>
                <button type="button" class="btn btn-primary" @click="finishTest">
                    {{ t('Finish The Test') }}
                </button>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;

    .app-test-header, .app-test-description, .app-main {
        margin: 2vh;
        padding: 2vh;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;
    }

    .app-test-description {
        display: flex;
        justify-content: space-between;

        .test-points {
            font-weight: 600;
        }
    }

    .app-test-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        .test-name {
            font-size: 1.2em;
            font-weight: 600;
        }

        .test-limit {
            color: vars.$app-blue-light;
            font-size: .9em;
        }
    }

    .app-main {
        display: flex;
        flex-direction: column;
        gap: 4vh;

        :deep(.display-question) {

            &.question-type-choices {
                .question-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 10.5vh;
                    row-gap: 1vh;
                }

                .choices-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 12.5vh;
                    row-gap: 1vh;
                    
                    .choice-pts {
                        text-align: right;
                    }
                }   
            }

            &.question-type-text {
                .question-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 10.5vh;
                    row-gap: 1vh;
                }

                .choices-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 1vh;

                    .choice-pts-wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 1vh;
    
                        .choice-pts {
                            text-align: left;
                        }
                    }
                }
            }

            .question-text, .question-pts {
                font-weight: 600;
                padding-bottom: 1vh;
            }

            .question-pts {
                text-align: right;
            }

            .choice-pts {
                .bi-check2 {
                    color: vars.$app-green;
                }

                .bi-x-lg {
                    color: vars.$app-red;
                }
            }
        }

        .app-test-actions {
            display: flex;
            gap: 1vh;
            justify-content: flex-end;

            .to-the-top {
                padding: .6rem .8rem;
            }
        }
    }
</style>