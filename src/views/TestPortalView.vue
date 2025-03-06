<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, useTemplateRef } from 'vue';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useModalStore } from '@/stores/modal';
import { useUserTestServiceStore } from '@/stores/userTestService';
import { formatTime, validateEmail } from '@/helpers/utils';
import DisplayQuestion from '@/components/items/DisplayQuestion.vue';

const { test_id } = defineProps<{test_id: string}>();
const router = useRouter();
const {t} = useI18n();
const {startLoading, endLoading, showMessage} = useMainStore();
const {confirm: confirmFinish} = useModalStore();
const {auth} = useAuthenticationStore();
const {test, time_limit, displayName, email, requestUserInfo, updateUserInfo, initTest, sendReport, setTestReport} = useUserTestServiceStore();
const testFormEl = useTemplateRef('test-form');

const submitted = ref(false);
const submitting = ref(false);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(displayName.value === '') _errors.displayName = t('Full Name required');

    if(email.value === '') _errors.email = t('Email required');
    else if(!validateEmail(email.value)) _errors.email = t('Invalid email');

    return _errors;
});

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

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {

    if(user) {
        if(user.displayName) displayName.value = user.displayName;
        if(user.email) email.value = user.email;

        if(displayName.value && email.value || !requestUserInfo.value) {
            await initializingDTest();
        }
    }    
});

onUnmounted(() => {
    onAuthEventDispose();

    if(interval !== undefined) {
        clearInterval(interval);
        interval = undefined;
    }

    if(testFormEl.value) {
        testFormEl.value.removeEventListener('submit', preventTestSubmit);
    }

    window.onbeforeunload = null;
});

async function startTest() {
    submitted.value = true;

    if(submitting.value) return;
    submitting.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    await updateUserInfo();

    submitted.value = false;
    submitting.value = false;

    await initializingDTest();
}

async function initializingDTest() {

    startLoading();
    try {
        interval = await initTest(test_id);

        if(!test.value) {
            showMessage('failure', t('Test Not Found.'));
            return;
        }

        window.onbeforeunload = function() {
            return true;
            // return `Are you sure?
            // You will not be able to continue the test once you leave.`
        };

        await nextTick();
        if(testFormEl.value) {
            testFormEl.value.addEventListener('submit', preventTestSubmit);
        }
    }
    catch(error) {
        showMessage('failure', t('Error loading test data.'));
    }
    finally {
        endLoading();
    }
}

function moveToTheTop() {
    window.scrollTo(0, 0);
}

function finishTest() {
    confirmFinish(
        t('Are you sure you want to submit the test?<br>You will not be able to continue the test once it is submitted.'),
        t('Submit'), submitTest
    );
}

async function submitTest() {
    if(testFormEl.value) {
        const formData = new FormData(testFormEl.value);
        const testReport = await sendReport(formData);
        setTestReport(testReport);
        
        window.onbeforeunload = null;
        router.push({name: 'test-report', params: {'user_test_id': testReport.id}});
    }
}

function preventTestSubmit(event: SubmitEvent) {
    event.preventDefault();
}
</script>

<template>
    <div class="user-info-form" v-if="!test && requestUserInfo">
        <div class="mb-3">
            <label for="full-name-input" class="form-label">{{ t('Full Name') }}</label>
            <input type="text" :class="{'is-invalid': errors.displayName}" id="full-name-input" class="form-control" v-model="displayName" :disabled="submitting" />
            <div class="invalid-feedback is-invalid" v-if="errors.displayName">{{ errors.displayName }}</div>
        </div>

        <div class="mb-3">
            <label for="email-input" class="form-label">{{ t('Email') }}</label>
            <input type="email" :class="{'is-invalid': errors.email}" id="email-input" class="form-control" v-model="email" :disabled="submitting" />
            <div class="invalid-feedback is-invalid" v-if="errors.email">{{ errors.email }}</div>
        </div>

        <button type="button" @click="startTest" class="btn btn-primary" :disabled="submitting">
            <template v-if="submitting">{{ t('Starting') }} ...</template>
            <template v-else>{{ t('Start Test') }}</template>
        </button>
    </div>

    <div class="app-test-header" v-if="test">
        <div class="test-name">
            {{ test.name }}
        </div>
        <div class="test-limit" v-if="time_limit > 0">
            <i class="bi bi-alarm"></i>
            {{ timeLimit }}
        </div>
    </div>

    <div class="app-test-description" v-if="test">
        <div class="test-description" v-html="description"></div>
        <div class="test-points">
            {{ t('({points} pts)', {points: test.max_points}) }}
        </div>
    </div>

    <div class="app-main" v-if="test">
        <form ref="test-form">
            <DisplayQuestion v-for="(question, index) in test?.questions" :key="question.id"
                :question="question" :choices="question.choices" :nbr="index + 1" :preview="false" />
        </form>

        <div class="app-test-actions">
            <button type="button" class="btn btn-outline-primary to-the-top" @click="moveToTheTop" :aria-label="t('go to the top of the page')">
                <i class="bi bi-arrow-up"></i>
            </button>
            <button type="button" class="btn btn-primary" @click="finishTest">
                {{ t('Finish The Test') }}
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;

    .user-info-form, .app-test-header, .app-test-description, .app-main {
        margin: 2vh;
        padding: 2vh;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;
    }

    .user-info-form {
        position: fixed;
        width: calc(100% - 4vh);
        top: 50%;
        transform: translateY(-50%);

        [type=button] {
            position: relative;
            right: 0;
            left: 100%;
            transform: translateX(-100%);
        }
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
            padding-bottom: 2vh;

            &.question-type-choices {
                .question-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 10.5vh;
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
                    grid-template-columns: 1fr 10.5vh;
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