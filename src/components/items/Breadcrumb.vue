<script setup lang="ts">
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { useRoute } from 'vue-router';

const { test_id, question_id } = defineProps<{test_id?: string, question_id?: string}>();
const route = useRoute();
const {getList} = useBreadcrumbStore();

const list = route.name ? getList(route.name.toString(), test_id, question_id) : [];
</script>

<template>
    <nav aria-label="breadcrumb" class="app-breadcrumb">
        <ol class="breadcrumb">
            <li v-for="item in list" :key="item.name" 
                class="breadcrumb-item" :class="{'active': !item.path}" :aria-current="item.path ? undefined : 'page'">
                <RouterLink :to="item.path" v-if="item.path">
                    {{ item.name }}
                </RouterLink>
                <template v-else>{{ item.name }}</template>
            </li>
        </ol>
    </nav>
</template>
