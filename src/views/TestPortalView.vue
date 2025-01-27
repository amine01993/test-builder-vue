<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef, type Ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { Modal } from 'bootstrap';
import { useRouter } from 'vue-router';
import type { Test } from '@/models/Test';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import DisplayQuestion from '@/components/items/DisplayQuestion.vue';
import { useFetchStore } from '@/stores/fetch';
import { useUserTestServiceStore } from '@/stores/userTestService';

const router = useRouter();
const { test_id } = defineProps<{test_id: string}>();
const {startLoading, endLoading, showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {setUserTestId, sendReport} = useUserTestServiceStore();
const {get} = useFetchStore();
const testSubmissionEl = useTemplateRef('test-submission-modal');
const testFormEl = useTemplateRef('test-form');
const test: Ref<Test|undefined> = ref();
const time_limit: Ref<number> = ref(180);
let interval: number|undefined = undefined;
let testSubmissionModal: Modal|null = null;

const timeLimit = computed(() => {
    let val = time_limit.value;
    const hours = Math.floor(val / 60 / 60);
    val = val - hours * 60 * 60;
    const minutes = Math.floor(val / 60);
    val = val - minutes * 60;
    const seconds = val;

    let str = [];
    if(hours) str.push(hours + 'h');
    if(minutes) str.push(minutes + 'min');
    if(seconds) str.push(seconds + 's');
    if(str.length === 0) return 'Time out';
    return str.join(' ');
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
        const testData = await get('/test?testId=' + test_id);
        test.value = <Test>testData.test;
        setUserTestId(testData.userTestId, test_id);

        if(!test.value) {
            showMessage('failure', 'Test Not Found.');
            return;
        }
        time_limit.value = test.value.time_limit;

        if(time_limit.value > 0) {
            interval = setInterval(() => {
                time_limit.value--;
                if(time_limit.value === 0) {
                    clearInterval(interval);
                    interval = undefined;
                }
            }, 1000);
        }
    }
    catch(error) {
        showMessage('failure', 'Error loading test data.');
    }
    finally {
        endLoading();
    }
});

onMounted(() => {
    if(testSubmissionEl.value) {
        testSubmissionModal = new Modal(testSubmissionEl.value, {backdrop: 'static', keyboard: false});
    }

    if(testFormEl.value) {
        testFormEl.value.addEventListener('submit', preventTestSubmit);
    }

    window.onbeforeunload = function(){
        return true;
        // return `Are you sure?
        // You will not be able to continue the test once you leave.`
    };
});

onUnmounted(() => {
    onAuthEventDispose();

    if(interval !== undefined) {
        clearInterval(interval);
        interval = undefined;
    }

    if(testSubmissionModal) {
        testSubmissionModal.dispose();
    }

    if(testFormEl.value) {
        testFormEl.value.removeEventListener('submit', preventTestSubmit);
    }

    window.onbeforeunload = null;
});

function moveToTheTop() {
    window.scrollTo(0, 0);
}

function finishTest() {
    if(testSubmissionModal) {
        testSubmissionModal.show();
    }

}

async function submitTest() {
    if(testSubmissionModal) {
        testSubmissionModal.hide();
    }

    if(testFormEl.value) {
        const formData = new FormData(testFormEl.value);
        const result = await sendReport(formData);
        console.log('submitTest.result', result);
        // return to test report view
    }
}

function preventTestSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log('submit');
}
</script>

<template>
    <div class="app-test-header" v-if="test">
        <div class="test-name">
            {{ test.name }}
        </div>
        <div class="test-limit" v-if="time_limit > 0">
            <i class="bi bi-alarm"></i>
            {{ timeLimit }}
        </div>
    </div>

    <div class="app-test-description" v-if="test" v-html="description"></div>

    <div class="app-main" v-if="test">
        <form ref="test-form">
            <DisplayQuestion v-for="(question, index) in test?.questions" :key="question.id"
                :question="question" :choices="question.choices" :nbr="index + 1" :preview="false" />
        </form>

        <div class="app-test-actions">
            <button type="button" class="btn btn-outline-primary to-the-top" @click="moveToTheTop">
                <i class="bi bi-arrow-up"></i>
            </button>
            <button type="button" class="btn btn-primary" @click="finishTest">
                Finish The Test
            </button>
        </div>
    </div>

    <div class="modal" tabindex="-1" ref="test-submission-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <p>
                        Are you sure you want to submit the test?<br>
                        You will not be able to continue the test once it is submitted.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" @click="submitTest">Submit</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;

    .app-test-header, .app-test-description, .app-main {
        margin: 2vh;
        padding: 2vh;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;
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
            color: vars.$app-grey2;
            font-size: .9em;
        }
    }

    .app-main {
        display: flex;
        flex-direction: column;
        gap: 4vh;

        :deep(.display-question) {
            padding-bottom: 2vh;

            &.question-type-choices {
                .question-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 10vh;
                    row-gap: 1vh;
                }

                .choices-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 1vh;
                }   
            }

            &.question-type-text {
                .question-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 10vh;
                    row-gap: 1vh;
                }
            }

            .question-text, .question-pts {
                font-weight: 600;
                padding-bottom: 1vh;
            }

            .question-pts {
                text-align: right;
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