<script setup lang="ts">
import { useUserTestItem } from '@/composables/items/userTestItem';
import type { UserTest } from '@/models/UserTest';

const { userTest } = defineProps<{userTest?: UserTest}>();
const {startedAt, lastedFor, updatedAt} = useUserTestItem(userTest);

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