<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import { computed, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserTestServiceStore } from '@/stores/userTestService';
import { useAuthenticationStore } from '@/stores/auth';
import { useLocalizationStore } from '@/stores/localization';
import { useMainStore } from '@/stores/main';
import { formatDate, formatInterval } from '@/helpers/utils';

const { user_test_id } = defineProps<{user_test_id: string}>();
const {t, locale} = useI18n();
const {spaceLabel} = useLocalizationStore();
const {auth} = useAuthenticationStore();
const {testReport, initTestReport} = useUserTestServiceStore();
const {startLoading, endLoading, showMessage} = useMainStore();

const onAuthEventDispose = onAuthStateChanged(auth, async () => {

    startLoading();
    try {
        await initTestReport(user_test_id);
        if(!testReport.value) {
            showMessage('failure', t('Test Report Not Found.'));
            return;
        }
    }
    catch(error) {
        showMessage('failure', t('Error loading data.'));
    }
    finally {
        endLoading();
    }
});

const startedAt = computed(() => {
    if(!testReport.value) return '';

    const startDate = testReport.value.started_at.toDate();

    return formatDate(startDate, locale.value);
});

const lastedFor = computed(() => {
    if(!testReport.value || !testReport.value.ended_in) return '';
    
    const startDate = testReport.value.started_at.toDate();
    const endDate = testReport.value.ended_in?.toDate();

    return formatInterval(startDate, endDate);
});

onUnmounted(() => {
    onAuthEventDispose();
});
</script>

<template>
    <div class="test-report-container" v-if="testReport">
        <fieldset>
            <legend class="test-report-header">{{ t('Test Results') }}</legend>

            <div class="test-report-content">
                <div class="test-item-label">{{ t('Test') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ testReport.test.name }}</div>
                <div class="test-item-label">{{ t('Full Name') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ testReport.user.displayName }}</div>
                <div class="test-item-label">{{ t('Answered Questions') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ testReport.report?.length ?? 0 }} {{ t('out of') }} {{ testReport.test.questionCount }}</div>
                <div class="test-item-label">{{ t('Started At') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ startedAt }}</div>
                <div class="test-item-label">{{ t('Lasted For') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ lastedFor }}</div>
                <div class="test-item-label">{{ t('Score') }}{{ spaceLabel }}:</div>
                <div class="test-item-value">{{ testReport.result?.score ?? 0 }} / {{ testReport.test.max_points }}</div>
            </div>
        </fieldset>
    </div>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;

    .test-report-container {
        margin: 2vh;
        padding: 2vh;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;

        position: fixed;
        width: calc(100% - 4vh);
        top: 50%;
        transform: translateY(-50%);

        fieldset {
            border: 2px solid vars.$app-grey2;
            border-radius: 1rem;

            legend {
                float: unset;
                width: unset;
                padding: 1vh;
                text-align: center;
                font-weight: 600;
            }

            .test-report-content {
                display: grid;
                grid-template-columns: auto 1fr;
                row-gap: 2vh;
                column-gap: 2vh;
                padding: 2vh;

                .test-item-label {
                    color: vars.$app-grey2;
                }
            }
        }
    }

</style>