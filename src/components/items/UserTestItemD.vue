<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useUserTestItem } from '@/composables/items/userTestItem';
import type { UserTest } from '@/models/UserTest';

const { t } = useI18n();
const { userTest } = defineProps<{userTest?: UserTest}>();
const {startedAt, lastedFor, updatedAt} = useUserTestItem(userTest);
</script>

<template>
    <tr class="user-test-item-container" :class="{'placeholder-wave': !userTest}">
        <template v-if="userTest">
            <th>{{ userTest.test.name }}</th>
            <td>{{ userTest.user.displayName }}</td>
            <td>{{ userTest.user.email }}</td>
            <td>{{ startedAt }}</td>
            <td>{{ lastedFor }}</td>
            <td>{{ userTest.result?.score }}</td>
            <td>{{ userTest.report?.length ?? 0 }} {{ t('out of') }} {{ userTest.test.questionCount }}</td>
            <td class="test-last-update">{{ updatedAt }}</td>
        </template>
        <template v-else>
            <td colspan="8" class="placeholder bg-secondary"></td>
        </template>
    </tr>
</template>