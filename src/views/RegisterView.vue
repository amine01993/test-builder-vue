<script setup lang="ts">
import { EmailAuthProvider, linkWithCredential, onAuthStateChanged, validatePassword, type PasswordValidationStatus, type User } from 'firebase/auth';
import { computed, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import Breadcrumb from '@/components/items/Breadcrumb.vue';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';

const router = useRouter();
const {auth, user, isAnonymous, signUpWithGoogle} = useAuthenticationStore();
const {validateEmail} = useMainStore();
const email = ref('');
const password = ref('');
const confirmPass = ref('');
const submitting = ref(false);
let validationStatus: Ref<null|PasswordValidationStatus> = ref(null);

const submitted = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors:{[key: string]: string|string[]} = {};
    if(!submitted.value) return _errors;

    if(email.value === '') _errors.email = 'Email required';
    else if(!validateEmail(email.value)) _errors.email = 'Invalid email';

    if(password.value === '') _errors.password = ['Password required'];
    else if (validationStatus.value && !validationStatus.value.isValid) {
        const list = [];
        if(validationStatus.value.containsLowercaseLetter !== true) list.push('Require lowercase character');
        if(validationStatus.value.containsNonAlphanumericCharacter !== true) list.push('Require special character');
        if(validationStatus.value.containsNumericCharacter !== true) list.push('Require numeric character');
        if(validationStatus.value.meetsMinPasswordLength !== true) list.push('Minimum password length is 7');
        if(validationStatus.value.meetsMaxPasswordLength !== true) list.push('Password too long');
        _errors.password = list;
    }
    else if(password.value !== confirmPass.value) _errors.confirmPass = 'Password mismatch';
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

async function register() {
    if(submitting.value) return;

    submitting.value = true;
    if(import.meta.env.PROD) {
        validationStatus.value = await validatePassword(auth, password.value);
    }
    submitted.value = true;

    // validation
    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    // createfirebase user
    try {
        const credential = EmailAuthProvider.credential(email.value, password.value);
        await linkWithCredential(user.value!, credential);

        router.push({name: 'home'});
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code];
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
    <AppHeader />
    <Breadcrumb />
    <AppMenu />

    <div class="app-main">
        <div class="sign-container">
            <div class="login-form">
                <div class="login-form-title mb-4">Sign Up</div>

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
                        <template v-if="errors.password">
                            <div class="invalid-feedback is-invalid" v-for="msg in errors.password" :key="msg">{{ msg }}</div>
                        </template>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="login-input-password-confirm" class="form-label">Confirm Password</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" class="form-control" :class="{'is-invalid': errors.confirmPass}" id="login-input-password-confirm" v-model="confirmPass" :disabled="submitting">
                        <div class="invalid-feedback is-invalid" v-if="errors.confirmPass">{{ errors.confirmPass }}</div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary" @click="register" :disabled="submitting">
                    <template v-if="!submitting">SIGN UP</template>
                    <template v-else>SIGNING UP ...</template>
                </button>
            </div>
            <div class="signup-parties">
                Or Sign Up Using <br>
                <button type="button" class="btn btn-danger google-auth" @click="signUpWithG">
                    <i class="bi bi-google"></i>
                </button>
            </div>
            <div class="signup-link">
                Or Sign In Using <br>
                <RouterLink :to="{name: 'login'}">SIGN IN</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

.app-main {
    margin: 2vh;
    padding: 2vh;
    background-color: vars.$app-white;

    .sign-container {
        display: flex;
        flex-direction: column;
        gap: 5vh;

        .login-form {
            .login-form-title {
                font-size: 2em;
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
