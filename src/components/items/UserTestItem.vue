<script setup lang="ts">
import { computed } from 'vue';
import type { UserTest } from '@/models/UserTest';

const { userTest } = defineProps<{userTest?: UserTest}>();
const currentDate = new Date();

const startedAt = computed(() => {
    const startDate = userTest!.started_at.toDate();
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === startDate.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(startDate);
});

const lastedFor = computed(() => {
    const startDate: any = userTest!.started_at.toDate();
    const endDate: any = userTest!.ended_in?.toDate();
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
});

const updatedAt = computed(() => {
    const updated_at = userTest!.updated_at!.toDate();
        return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(updated_at);
});

</script>

<template>
    <div class="user-test-item-container" :class="{'placeholder-wave': !userTest}">
        <div class="user-test-item-content" v-if="userTest">
            <div class="user-test-item-title">{{ userTest.test.name }}</div>
            <hr class="user-test-item-divider">
            <div class="user-test-item-info">
                <div class="user-test-property">Full Name: {{ userTest.user.displayName }}</div>
                <div class="user-test-property">Email: {{ userTest.user.email }}</div>
                <div class="user-test-property">Started At: {{ startedAt }}</div>
                <div class="user-test-property">Lasted For: {{ lastedFor }}</div>
                <div class="user-test-property" v-if="userTest.result">Score: {{ userTest.result?.score }}</div>
                <div class="user-test-property">Answered Questions: {{ userTest.report?.length ?? 0 }} out of {{ userTest.test.questionCount }}</div>
                <div class="user-test-last-update">Last updated at: {{ updatedAt }}</div>
            </div>
        </div>
        <div class="test-item-content" v-else>
            <div class="test-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div>
            <hr class="test-item-divider">
            <div class="test-item-info">
                <div class="placeholder col-12 bg-secondary" style="min-height: 6em;"></div>
                <div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div>
            </div>
        </div>
    </div>
</template>