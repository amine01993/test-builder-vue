<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLocalizationStore } from '@/stores/localization';
import { useUserTestItem } from '@/composables/items/userTestItem';
import type { UserTest } from '@/models/UserTest';

const { t } = useI18n();
const {spaceLabel} = useLocalizationStore();
const { userTest } = defineProps<{userTest?: UserTest}>();
const {startedAt, lastedFor, updatedAt} = useUserTestItem(userTest);

</script>

<template>
    <div class="user-test-item-container" :class="{'placeholder-wave': !userTest}">
        <div class="user-test-item-content" v-if="userTest">
            <div class="user-test-item-title">{{ userTest.test.name }}</div>
            <hr class="user-test-item-divider">
            <div class="user-test-item-info">
                <div class="user-test-property">{{ t('Full Name') }}{{ spaceLabel }}: {{ userTest.user.displayName }}</div>
                <div class="user-test-property">{{ t('Email') }}{{ spaceLabel }}: {{ userTest.user.email }}</div>
                <div class="user-test-property">{{ t('Started At') }}{{ spaceLabel }}: {{ startedAt }}</div>
                <div class="user-test-property">{{ t('Lasted For') }}{{ spaceLabel }}: {{ lastedFor }}</div>
                <div class="user-test-property" v-if="userTest.result">{{ t('Score') }}{{ spaceLabel }}: {{ userTest.result?.score }}</div>
                <div class="user-test-property">{{ t('Answered Questions') }}{{ spaceLabel }}: {{ userTest.report?.length ?? 0 }} {{ t('out of') }} {{ userTest.test.questionCount }}</div>
                <div class="user-test-last-update">{{ t('Last updated at') }}{{ spaceLabel }}: {{ updatedAt }}</div>
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