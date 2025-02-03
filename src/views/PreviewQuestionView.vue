<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { useI18n } from 'vue-i18n';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useChoiceServiceStore } from '@/stores/choiceService';
import type { Question } from '@/models/Question';
import AppContainer from '@/components/AppContainer.vue';
import DisplayQuestion from '@/components/items/DisplayQuestion.vue';

const { test_id, question_id } = defineProps<{test_id: string, question_id: string}>();
const {t} = useI18n();
const {auth} = useAuthenticationStore();
const {startLoading, endLoading, showMessage} = useMainStore();
const {getQuestion} = useQuestionServiceStore();
const {choices, loadChoices} = useChoiceServiceStore();

const question: Ref<Question|undefined> = ref();

const onAuthEventDispose = onAuthStateChanged(auth, async () => {
    startLoading();
    try {
        question.value = await getQuestion(test_id, question_id);
        if(!question.value) {
            showMessage('failure', t('Question Not Found.'));
            return;
        }

        choices.value = undefined;
        await loadChoices(test_id, question.value);
    }
    catch(error) {
        showMessage('failure', t('Error loading question data.'));
    }
    finally {
        endLoading();
    }
});

onUnmounted(() => {
    onAuthEventDispose();
});

</script>

<template>
    <AppContainer :test_id="test_id">
        <div class="app-main">
            <DisplayQuestion :question="question" :choices="choices" :preview="true" />
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
    }
</style>