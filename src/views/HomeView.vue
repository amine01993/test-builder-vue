<script setup lang="ts">
import { defineAsyncComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthenticationStore } from '@/stores/auth';
import { useTestServiceStore } from '@/stores/testService';
import { useUserTestServiceStore } from '@/stores/userTestService';
import { useMainStore } from '@/stores/main';
import AppContainer from '@/components/AppContainer.vue';

const { t } = useI18n();
const {auth, user} = useAuthenticationStore();
const {isDesktop, showMessage} = useMainStore();
const {testCount, loadTestCount} = useTestServiceStore();
const {userTestCount, userTests, loadUserTestCount, loadUserTests, loadMoreUserTests} = useUserTestServiceStore();
const loadingUserTests = ref(false);
let userTestsLoaderEl: any = null;
const loaderClassName = 'user-tests-loader';

const UserTestItem = defineAsyncComponent(() => import('@/components/items/UserTestItem.vue'));
const UserTestItemD = defineAsyncComponent(() => import('@/components/items/UserTestItemD.vue'));

const onAuthEventDispose = onAuthStateChanged(auth, async () => {
    try {
        await Promise.all([loadTestCount(), loadUserTestCount(), loadUserTests()]);
        if(!userTestsLoaderEl) {
            userTestsLoaderEl = document.querySelector(`.${loaderClassName}`);
            checkLoaderVisiblity();
        }
    }
    catch(error) {
        console.log('HomeView', error);
        showMessage('failure', t('Error loading test sessions.'));
    }
});

onMounted(() => {
    document.addEventListener('scroll', checkLoaderVisiblity);
    if(!userTestsLoaderEl) {
        userTestsLoaderEl = document.querySelector(`.${loaderClassName}`);
        checkLoaderVisiblity();
    }    
});

onUnmounted(() => {
    onAuthEventDispose();
    document.removeEventListener('scroll', checkLoaderVisiblity);
});

async function checkLoaderVisiblity() {
    if(userTestsLoaderEl && !loadingUserTests.value) {
        if(userTestsLoaderEl.getBoundingClientRect().top < window.innerHeight) {
            if(user.value) {
                loadingUserTests.value = true;
                try {
                    await loadMoreUserTests();
                    await nextTick();
                    
                    userTestsLoaderEl = document.querySelector(`.${loaderClassName}`);
                    loadingUserTests.value = false;
                    checkLoaderVisiblity();
                }
                catch(error) {
                    showMessage('failure', t('Error loading more test sessions.'));
                }
                finally {
                    loadingUserTests.value = false;
                }
            }
        }
    }
}
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="test-stats">
                <div class="test-stat">
                    <div class="stat-title">{{ t('Tests') }}</div>
                    <div class="stat-content" v-if="testCount !== undefined">{{ testCount }}</div>
                    <div class="placeholder-wave" v-else>
                        <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
                    </div>
                </div>
        
                <div class="test-stat">
                    <div class="stat-title">{{ t('Test Sessions') }}</div>
                    <div class="stat-content" v-if="userTestCount !== undefined">{{ userTestCount }}</div>
                    <div class="placeholder-wave" v-else>
                        <div class="placeholder placeholder-lg col-8 bg-secondary"></div>
                    </div>
                </div>
            </div>
    
            <div class="test-report-list">
                <template v-if="!isDesktop">
                    <template v-if="userTests">
                        <UserTestItem v-for="userTest in userTests" :userTest="userTest" :key="userTest.id" />
                    </template>
                    <template v-else>
                        <UserTestItem v-for="index in 2" :key="'user-test-placeholder-' + index" />
                    </template>
        
                    <template v-if="userTestCount && userTests && userTests.length < userTestCount">
                        <UserTestItem :key="'user-test-placeholder-loading'" :class="loaderClassName" />
                    </template>
                </template>
                <template v-else>
                    <table class="table" :class="{'loading': !userTests}">
                        <thead>
                            <tr>
                                <th scope="col">{{ t('Test') }}</th>
                                <th scope="col">{{ t('Full Name') }}</th>
                                <th scope="col">{{ t('Email') }}</th>
                                <th scope="col">{{ t('Started At') }}</th>
                                <th scope="col">{{ t('Lasted For') }}</th>
                                <th scope="col">{{ t('Score') }}</th>
                                <th scope="col">{{ t('Answered Questions') }}</th>
                                <th scope="col">{{ t('Last updated at') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="userTests">
                                <UserTestItemD v-for="userTest in userTests" :userTest="userTest" :key="userTest.id" />
                            </template>
                            <template v-else>
                                <UserTestItemD v-for="index in 5" :key="'user-test-placeholder-' + index" />
                            </template>
                
                            <template v-if="userTestCount && userTests && userTests.length < userTestCount">
                                <UserTestItemD :key="'user-test-placeholder-loading'" :class="loaderClassName" />
                            </template>
                        </tbody>
                    </table>
                </template>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;
    @use '@/assets/mixins' as mxs;

    .test-stats {
        @include mxs.desktopOnly {
            display: flex;
        }

        .test-stat {
            margin: 2vh;
            padding: 2vh;
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;
            font-size: 1.7em;

            @include mxs.desktopOnly {
                width: 50%;
            }

            .stat-title {
                font-weight: 200;
                margin-bottom: 1.5vh;
            }
        }
    }

    .test-report-list {
        @include mxs.desktopOnly {
            margin: 0 2vh 2vh;

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

        :deep(.user-test-item-container) {
            margin: 2vh;
            padding: 2vh;
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;

            @include mxs.desktopOnly {
                box-shadow: none;
                font-size: .9em;

                .user-test-last-update {
                    color: vars.$app-blue-light;
                }
            }

            .user-test-item-content {
                padding: 1vh;

                .user-test-item-title {
                    text-align: center;
                    font-weight: 600;
                }

                .user-test-last-update {
                    text-align: right;
                    color: vars.$app-blue-light;
                    font-size: .9em;
                    margin-top: 1vh;
                }

                .user-test-item-divider {
                    width: 60%;
                    margin: 1vh auto;
                    color: vars.$app-grey;
                    opacity: 1;
                }
            }
        }
    }
</style>