<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import { computed, onUnmounted } from 'vue';
import { useUserTestServiceStore } from '@/stores/userTestService';
import { useAuthenticationStore } from '@/stores/auth';

const { user_test_id } = defineProps<{user_test_id: string}>();
const {auth} = useAuthenticationStore();
const {testReport, initTestReport} = useUserTestServiceStore();
const currentDate = new Date();

const onAuthEventDispose = onAuthStateChanged(auth, async () => {
    await initTestReport(user_test_id);
});

const startedAt = computed(() => {
    if(testReport.value) {
        const startDate = testReport.value.started_at.toDate();
        return new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === startDate.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(startDate);
    }
    return '';
});

const lastedFor = computed(() => {
    if(testReport.value) {
        const startDate = testReport.value.started_at.toDate();
        const endDate = testReport.value.ended_in?.toDate();
        if(endDate) {
            const diffInS = Math.floor((endDate - startDate) / 1000);
            let val = diffInS;
            const hours = Math.floor(val / 60 / 60);
            val = val - hours * 60 * 60;
            const minutes = Math.floor(val / 60);
            val = val - minutes * 60;
            const seconds = val;

            let str = [];
            if(hours) str.push(hours + 'h');
            if(minutes) str.push(minutes + 'min');
            if(seconds) str.push(seconds + 's');
            return str.join(' ');
        }
        return '';
    }
    return '';
});

onUnmounted(() => {
    onAuthEventDispose();
});
</script>

<template>
    <div class="test-report-container" v-if="testReport">
        <fieldset>
            <legend class="test-report-header">Test Results</legend>

            <div class="test-report-content">
                <div class="test-item-label">Test:</div>
                <div class="test-item-value">{{ testReport.test.name }}</div>
                <div class="test-item-label">Full Name:</div>
                <div class="test-item-value">{{ testReport.user.displayName }}</div>
                <div class="test-item-label">Answered Questions:</div>
                <div class="test-item-value">{{ testReport.report?.length ?? 0 }} out of {{ testReport.test.questionCount }}</div>
                <div class="test-item-label">Started At:</div>
                <div class="test-item-value">{{ startedAt }}</div>
                <div class="test-item-label">Lasted For:</div>
                <div class="test-item-value">{{ lastedFor }}</div>
                <div class="test-item-label">Score:</div>
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