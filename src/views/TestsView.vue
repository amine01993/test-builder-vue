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

const {startLoading, endLoading} = useMainStore();
const {auth} = useAuthenticationStore();
const {tests, loadTests} = useTestServiceStore();

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {
    console.log('Testsview onAuthStateChanged', user)
    startLoading();
    await loadTests(user!.uid);
    endLoading();
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
            <TestItem v-for="test in tests" :test="test" :key="test.id"></TestItem>
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

        // .create-test {
            
        // }
    }

    .test-list {
        margin: 2vh;
        display: flex;
        flex-direction: column;
        gap: 3vh;

        :deep(.test-item-container) {
            // display: flex;
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;

            // .test-item-sort-handler {
            //     min-width: 6vh;
            //     position: relative;
            //     background-color: string.unquote(vars.$app-grey + '75');

            //     i {
            //         position: absolute;
            //         top: 50%;
            //         left: 50%;
            //         transform: translate(-50%, -50%);
            //     }
            // }

            .test-item-content {
                // flex-grow: 1;
                // min-width: calc(100% - 3vh - 4vh);
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
        }
    }
}
</style>