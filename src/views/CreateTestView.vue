<script setup lang="ts">
import { Popover } from 'bootstrap';
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useTestServiceStore } from '@/stores/testService';
import { useLocalizationStore } from '@/stores/localization';
import AppContainer from '@/components/AppContainer.vue';
import { useMainStore } from '@/stores/main';

const router = useRouter();
const {t} = useI18n();
const {spaceLabel} = useLocalizationStore();
const {showMessage} = useMainStore();
const {addTest} = useTestServiceStore();
const name = ref('');
const description = ref('');
const timeLimit: Ref<number|string> = ref(0);

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
});

async function createTest() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    // validation
    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }
    
    try {
        await addTest({
            name: name.value,
            description: description.value,
            max_points: 0,
            questionCount: 0,
            time_limit: Number(timeLimit.value),
        });
        serverErrors.value = [];
        showMessage('success', t('Test created with success.'));
        router.push({name: 'tests'});
    }
    catch(error: any) {
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="test-form">
                <div class="test-form-title mb-4">{{ t('Create New Test') }}</div>
    
                <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                    <ul>
                        <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                    </ul>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-name" class="form-label">{{ t('Name') }}<span class="required">*</span></label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="test-input-name" v-model="name" 
                        :disabled="submitting" aria-required>
                    <div class="invalid-feedback is-invalid" v-if="errors.name">{{ errors.name }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-description" class="form-label">{{ t('Description') }}</label>
                    <textarea class="form-control" :class="{'is-invalid': errors.description}" id="test-input-description" v-model="description" rows="3" :disabled="submitting"></textarea>
                    <div class="invalid-feedback is-invalid" v-if="errors.description">{{ errors.description }}</div>
                </div>
    
                <div class="mb-3">
                    <label for="test-input-timelimit" class="form-label">{{ t('Time Limit') }}</label>
                    <span class="label-info" :data-bs-content="t('The test Time Limit is in seconds.<br>0 = no Time Limit')"><i class="bi bi-question-circle-fill"></i></span>
                    <input type="number" class="form-control" :class="{'is-invalid': errors.timeLimit}" id="test-input-timelimit" v-model="timeLimit" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.timeLimit">{{ errors.timeLimit }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="createTest" :disabled="submitting">
                    <template v-if="!submitting">{{ t('Create') }}</template>
                    <template v-else>{{ t('Creating') }} ...</template>
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

    .test-form {
        .test-form-title {
            font-size: 1.7em;
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

        .required {
            color: vars.$app-red;
            margin-left: 5px;
        }

        .label-info {
            padding-left: 1.5vh;
            color: vars.$app-blue;
        }
    }
}
</style>