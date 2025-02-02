<script setup lang="ts">
import { onAuthStateChanged, signInWithEmailAndPassword, type User } from 'firebase/auth';
import { computed, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import AppContainer from '@/components/AppContainer.vue';

const router = useRouter();
const {auth, isAnonymous, signUpWithGoogle} = useAuthenticationStore();
const {validateEmail} = useMainStore();
const email = ref('');
const password = ref('');

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(email.value === '') _errors.email = 'Email required';
    else if(!validateEmail(email.value)) _errors.email = 'Invalid email';

    if(password.value === '') _errors.password = 'Password required';

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, (user: User|null) => {
    if(!isAnonymous(user)) {
        router.push({name: 'home'});
    }
});

onUnmounted(() => {
    onAuthEventDispose();
});

async function login() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    // validation
    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    // createfirebase user
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        serverErrors.value = [];
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}

async function signUpWithG() {
    try {
        await signUpWithGoogle();
        router.push({name: 'home'});
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code];
    }
}
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="sign-container">
                <div class="login-form">
                    <div class="login-form-title mb-4">Login</div>
    
                    <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                        <ul>
                            <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
    
                    <div class="mb-3">
                        <label for="login-input-email" class="form-label">Email</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-at"></i></span>
                            <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="login-input-email" v-model="email" :disabled="submitting">
                            <div class="invalid-feedback is-invalid" v-if="errors.email">{{ errors.email }}</div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="login-input-password" class="form-label">Password</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                            <input type="password" class="form-control" :class="{'is-invalid': errors.password}" id="login-input-password" v-model="password" :disabled="submitting">
                            <div class="invalid-feedback is-invalid" v-if="errors.password">{{ errors.password }}</div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" @click="login" :disabled="submitting">
                        <template v-if="!submitting">LOGIN</template>
                        <template v-else>LOGGING IN ...</template>
                    </button>
    
                </div>
                <div class="signup-parties">
                    Or Sign Up Using <br>
                    <button type="button" class="btn btn-danger google-auth" @click="signUpWithG">
                        <i class="bi bi-google"></i>
                    </button>
                </div>
                <div class="signup-link">
                    Or Sign Up Using <br>
                    <RouterLink :to="{name: 'register'}">SIGN UP</RouterLink>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;
    box-shadow: 5px 5px 25px vars.$app-grey;

    .sign-container {
        display: flex;
        flex-direction: column;
        gap: 5vh;

        .login-form {
            .login-form-title {
                font-size: 1.7em;
                font-weight: 600;
                text-align: center;
            }

            [type=button] {
                margin: auto;
                display: block;
            }

            .alert ul {
                margin-bottom: 0;
            }
        }

        .signup-parties {
            text-align: center;
            line-height: 2.5em;

            .google-auth {
                padding: 10px 14px;
                border-radius: 50%;
            }
        }

        .signup-link {
            text-align: center;
            line-height: 2.5em;

            a {
                font-weight: 600;
            }
        }
    }
}
</style>
