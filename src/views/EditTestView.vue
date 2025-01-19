<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { onAuthStateChanged, type User } from 'firebase/auth';
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import { useTestServiceStore } from '@/stores/testService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';

const route = useRoute();
const router = useRouter();
const {startLoading, endLoading, showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {getTest, updateTest} = useTestServiceStore();
const name = ref('');
const description = ref('');
const maxScore: Ref<number|string> = ref(0);
const timeLimit: Ref<number|string> = ref(0);
let test_id: string|null = null;
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

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {
    console.log('edittestview onAuthStateChanged', user);
    startLoading();
    try {
        test_id = Array.isArray(route.params.test_id) ? route.params.test_id[0] : route.params.test_id;
        const test = await getTest(test_id);
        if(test === null) {
            showMessage('failure', 'Test Not Found.');
            return;
        }
        name.value = test.name;
        description.value = test.description;
        maxScore.value = test.max_points;
        timeLimit.value = test.time_limit;
    }
    catch(error) {
        console.log('error loading test', error);
        showMessage('failure', 'Error loading test data.');
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

async function editTest() {
    if(submitting.value || !test_id) return;

    submitting.value = true;
    submitted.value = true;

    // validation
    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    // editfirebase test
    try {
        await updateTest({
            id: test_id,
            name: name.value,
            description: description.value,
            max_points: Number(maxScore.value),
            time_limit: Number(timeLimit.value),
        });
        serverErrors.value = [];
        router.push({name: 'tests'});
    }
    catch(error: any) {
        console.log('editTest.error', error);
        serverErrors.value = ['Server Error: ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}
</script>

<template>
    <AppHeader />
    <AppMenu />

    <div class="app-main">
        <div class="test-form">
            <div class="test-form-title mb-4">Edit Test</div>

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
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;
    box-shadow: 5px 5px 25px vars.$app-grey;

    .test-form {
        .test-form-title {
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