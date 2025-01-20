<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onUnmounted } from 'vue';
import { onAuthStateChanged, type User } from 'firebase/auth';
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import { useTestServiceStore } from '@/stores/testService';
import TestItem from '@/components/items/TestItem.vue';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';

const {showMessage} = useMainStore();
const {auth} = useAuthenticationStore();
const {tests, loadTests} = useTestServiceStore();

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {
    console.log('Testsview onAuthStateChanged', user)
    try {
        console.log('tests', tests.value);
        tests.value = null;
        await loadTests(user!.uid);
    }
    catch(error) {
        console.log('error loading tests', error);
        showMessage('failure', 'Error loading tests.');
    }
    finally {
    }
});

onUnmounted(() => {
    onAuthEventDispose();
});

</script>

<template>
    <AppHeader />
    <AppMenu />

    <div class="app-main">
        <div class="test-actions">
            <RouterLink :to="{name: 'create-test'}" class="btn btn-warning create-test">Create New Test</RouterLink>
        </div>
        <div class="test-list">
            <template v-if="tests">
                <TestItem v-for="test in tests" :test="test" :key="test.id" />
            </template>
            <template v-else>
                <TestItem v-for="index in [0, 1, 2]" :key="'test-placeholder-' + index" />
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use 'sass:string';
@use '@/assets/variables' as vars;

.app-main {
    .test-actions {
        margin-top: 2vh;
        margin-right: 2vh;
        display: flex;
        justify-content: flex-end;
    }

    .test-list {
        margin: 2vh;
        display: flex;
        flex-direction: column;
        gap: 3vh;

        :deep(.test-item-container) {
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;

            .test-item-content {
                padding: 1vh;

                .test-item-title {
                    text-align: center;
                    font-weight: 600;
                }

                .test-description {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                    &.full-text {
                        white-space: normal;
                    }
                }

                .test-last-update {
                    text-align: right;
                    color: vars.$app-grey2;
                    font-size: .9em;
                }

                .test-item-divider {
                    width: 60%;
                    margin: 1vh auto;
                    color: vars.$app-grey;
                    opacity: 1;
                }

                .test-item-actions {
                    display: flex;
                    gap: 1.5vh;
                    justify-content: flex-end;

                    .btn {
                        border-radius: .5em;
                        padding: 0.5em 1em;
                    }
                }
            }

            &.placeholder-wave {
                mask-image: linear-gradient(110deg, #000 65%, rgba(0, 0, 0, 0.8) 80%, #000 100%);
                animation-duration: 1s;
            }
        }
    }
}
</style>