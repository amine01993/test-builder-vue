<script setup lang="ts">
import { onAuthStateChanged, type User } from 'firebase/auth';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useAuthenticationStore } from '@/stores/auth';
import { useTestServiceStore } from '@/stores/testService';
import { useUserTestServiceStore } from '@/stores/userTestService';
import { useMainStore } from '@/stores/main';
import AppContainer from '@/components/AppContainer.vue';
import UserTestItem from '@/components/items/UserTestItem.vue';
import UserTestItemD from '@/components/items/UserTestItemD.vue';

const {auth, user} = useAuthenticationStore();
const {isDesktop, showMessage} = useMainStore();
const {testCount, loadTestCount} = useTestServiceStore();
const {userTestCount, userTests, loadUserTests, loadMoreUserTests} = useUserTestServiceStore();
const loadingUserTests = ref(false);
let userTestsLoaderEl: any = null;
const loaderClassName = 'user-tests-loader';

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {
    try {
        await Promise.all([loadTestCount(user!.uid), loadUserTests(user!.uid)]);
        if(!userTestsLoaderEl) {
            userTestsLoaderEl = document.querySelector(`.${loaderClassName}`);
        }
    }
    catch(error) {
        showMessage('failure', 'Error loading test sessions.');
    }
});

onMounted(() => {
    document.addEventListener('scroll', checkLoaderVisiblity);
    if(!userTestsLoaderEl) {
        userTestsLoaderEl = document.querySelector(`.${loaderClassName}`);
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
                }
                catch(error) {
                    showMessage('failure', 'Error loading more test sessions.');
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
                    <div class="stat-title">Tests</div>
                    <div class="stat-content">{{ testCount }}</div>
                </div>
        
                <div class="test-stat">
                    <div class="stat-title">Test Sessions</div>
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
                                <th scope="col">Test</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Started At</th>
                                <th scope="col">Lasted For</th>
                                <th scope="col">Score</th>
                                <th scope="col">Answered Questions</th>
                                <th scope="col">Last updated at</th>
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
        }

        :deep(.user-test-item-container) {
            margin: 2vh;
            padding: 2vh;
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
                    color: vars.$app-grey2;
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
                    color: vars.$app-grey2;
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