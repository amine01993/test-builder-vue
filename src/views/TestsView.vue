<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineAsyncComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import { useTestServiceStore } from '@/stores/testService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useLocalizationStore } from '@/stores/localization';
import AppContainer from '@/components/AppContainer.vue';

const {t} = useI18n();
const {spaceLabel} = useLocalizationStore();
const {isDesktop, showMessage} = useMainStore();
const {auth, user} = useAuthenticationStore();
const {testCount, tests, loadTestCount, loadTests, loadMoreTests} = useTestServiceStore();
const loadingTests = ref(false);
let testsLoaderEl: any = null;
const TestItem = defineAsyncComponent(() => import('@/components/items/TestItem.vue'));
const TestItemD = defineAsyncComponent(() => import('@/components/items/TestItemD.vue'));

const onAuthEventDispose = onAuthStateChanged(auth, async () => {
    try {
        if(user === null) return;
        await Promise.all([loadTestCount(), loadTests()]);
        if(!testsLoaderEl) {
            testsLoaderEl = document.querySelector('.tests-loader');
            checkLoaderVisiblity();
        }
    }
    catch(error) {
        console.log('TestsView', error);
        showMessage('failure', t('Error loading tests.'));
    }
});

onMounted(() => {
    document.addEventListener('scroll', checkLoaderVisiblity);
    if(!testsLoaderEl) {
        testsLoaderEl = document.querySelector('.tests-loader');
        checkLoaderVisiblity();
    }    
});

onUnmounted(() => {
    onAuthEventDispose();
    document.removeEventListener('scroll', checkLoaderVisiblity);
});

async function checkLoaderVisiblity() {
    if(testsLoaderEl && !loadingTests.value) {
        if(testsLoaderEl.getBoundingClientRect().top < window.innerHeight) {
            if(user.value) {
                loadingTests.value = true;
                try {
                    await loadMoreTests();
                    await nextTick();
                    
                    testsLoaderEl = document.querySelector('.tests-loader');
                    loadingTests.value = false;
                    checkLoaderVisiblity();
                }
                catch(error) {
                    showMessage('failure', t('Error loading more tests.'));
                }
                finally {
                    loadingTests.value = false;
                }
            }
        }
    }
}

</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="test-actions">
                <RouterLink :to="{name: 'create-test'}" class="btn btn-warning create-test">{{ t('Create New Test') }}</RouterLink>
            </div>

            <div class="test-info" v-if="testCount !== 0">
                <template v-if="testCount">
                    <span class="test-info-label">{{ t('Total number of tests') }}{{ spaceLabel }}:</span> {{ testCount }}
                </template>
                <template v-else>
                    <div class="placeholder-wave">
                        <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
                    </div>
                </template>
            </div>
            
            <div class="test-list">
                <template v-if="!isDesktop">
                    <template v-if="tests">
                        <TestItem v-for="test in tests" :test="test" :key="test.id" />
                    </template>
                    <template v-else>
                        <TestItem v-for="index in [0, 1, 2]" :key="'test-placeholder-' + index" />
                    </template>

                    <template v-if="testCount && tests && tests.length < testCount">
                        <TestItem :key="'test-placeholder-loading'" class="tests-loader" />
                    </template>
                </template>
                <template v-else>
                    <table class="table" :class="{'loading': !tests}">
                        <thead>
                            <tr>
                                <th scope="col">{{ t('Test') }}</th>
                                <th scope="col">{{ t('Description') }}</th>
                                <th scope="col">{{ t('Max Points') }}</th>
                                <th scope="col">{{ t('Time Limit') }}</th>
                                <th scope="col">{{ t('Nbr of Questions') }}</th>
                                <th scope="col">{{ t('Last updated at') }}</th>
                                <th scope="col">{{ t('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="tests">
                                <TestItemD v-for="test in tests" :test="test" :key="test.id" />
                            </template>
                            <template v-else>
                                <TestItemD v-for="index in 5" :key="'test-placeholder-' + index" />
                            </template>

                            <template v-if="testCount && tests && tests.length < testCount">
                                <TestItemD :key="'test-placeholder-loading'" class="tests-loader" />
                            </template>
                        </tbody>
                    </table>
                </template>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
@use 'sass:string';
@use '@/assets/variables' as vars;
@use '@/assets/mixins' as mxs;

.app-main {
    .test-actions {
        margin-top: 2vh;
        margin-right: 2vh;
        display: flex;
        justify-content: flex-end;
    }

    .test-info {
        margin-top: 2vh;
        margin-left: 2vh;
        font-weight: 300;
    }

    .test-list {
        margin: 2vh;
        display: flex;
        flex-direction: column;
        gap: 3vh;

        @include mxs.desktopOnly {
            .table.loading > :not(caption) > * > * {
                border-bottom-width: 5px;
                border-bottom-color: vars.$app-white;
            }

            .table {
                thead {
                    tr {
                        vertical-align: middle;
                        text-align: center;
                    }
                }
            }
        }

        :deep(.test-item-container) {
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;

            @include mxs.desktopOnly {
                box-shadow: none;
                font-size: .9em;

                .placeholder {
                    display: table-cell;
                    padding: 2vh;
                }

                .test-last-update {
                    color: vars.$app-blue-light;
                }

                .test-description {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    max-width: 30vh;

                    &.full-text {
                        white-space: normal;
                    }
                }

                .test-item-actions-container {
                    vertical-align: middle;

                    .test-item-actions {
                        display: flex;
                        gap: 1vh;
    
                        .btn {
                            border-radius: .5rem;
                            padding: .7rem .8rem;
                        }
                    }
                }
            }

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
                    color: vars.$app-blue-light;
                    font-size: .9em;
                    margin-top: 1vh;
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