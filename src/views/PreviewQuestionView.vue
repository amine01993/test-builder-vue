<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import Breadcrumb from '@/components/items/Breadcrumb.vue';
import type { Question } from '@/models/Question';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useQuestionServiceStore } from '@/stores/questionService';
import { useChoiceServiceStore } from '@/stores/choiceService';
import DisplayQuestion from '@/components/items/DisplayQuestion.vue';

const { test_id, question_id } = defineProps<{test_id: string, question_id: string}>();
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
            showMessage('failure', 'Question Not Found.');
            return;
        }

        choices.value = undefined;
        await loadChoices(test_id, question_id);
    }
    catch(error) {
        showMessage('failure', 'Error loading question data.');
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
    <AppHeader />
    <Breadcrumb :test_id="test_id" />
    <AppMenu />

    <div class="app-main">
        <DisplayQuestion :question="question" :choices="choices" />
    </div>
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
                display: grid;
                grid-template-columns: 1fr 10vh;
                row-gap: 1vh;

                .choice-pts {
                    text-align: right;
                }
            }

            &.question-type-text {
                display: grid;
                grid-template-areas: "qt qp" "ci ." "cp .";
                row-gap: 1vh;

                .question-text {
                    grid-area: qt;
                }

                .question-pts {
                    grid-area: qp;
                }

                .choice-input {
                    grid-area: ci;
                }

                .choice-pts-wrapper {
                    grid-area: cp;
                    display: flex;
                    flex-direction: column;
                    gap: 1vh;
                    padding-top: 1vh;

                    .choice-pts {
                        text-align: left;
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