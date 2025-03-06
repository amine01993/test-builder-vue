<script setup lang="ts">
import { EmailAuthProvider, linkWithCredential, onAuthStateChanged, validatePassword, type PasswordValidationStatus, type User } from 'firebase/auth';
import { computed, onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthenticationStore } from '@/stores/auth';
import { useLocalizationStore } from '@/stores/localization';
import { validateEmail } from '@/helpers/utils';
import AppContainer from '@/components/AppContainer.vue';

const router = useRouter();
const {t} = useI18n();
const {auth, user, isAnonymous, signUpWithGoogle} = useAuthenticationStore();
const {spaceLabel} = useLocalizationStore();
const email = ref('');
const password = ref('');
const confirmPass = ref('');
const submitting = ref(false);
const validationStatus: Ref<null|PasswordValidationStatus> = ref(null);

const submitted = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors:{[key: string]: string|string[]} = {};
    if(!submitted.value) return _errors;

    if(email.value === '') _errors.email = t('Email required');
    else if(!validateEmail(email.value)) _errors.email = t('Invalid email');

    if(password.value === '') _errors.password = [t('Password required')];
    else if (validationStatus.value && !validationStatus.value.isValid) {
        const list = [];
        if(validationStatus.value.containsLowercaseLetter !== true) list.push(t('Require lowercase character'));
        if(validationStatus.value.containsNonAlphanumericCharacter !== true) list.push(t('Require special character'));
        if(validationStatus.value.containsNumericCharacter !== true) list.push(t('Require numeric character'));
        if(validationStatus.value.meetsMinPasswordLength !== true) list.push(t('Minimum password length is {size}', {size: 7}));
        if(validationStatus.value.meetsMaxPasswordLength !== true) list.push(t('Password too long'));
        _errors.password = list;
    }
    else if(password.value !== confirmPass.value) _errors.confirmPass = t('Password mismatch');
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

    try {
        const credential = EmailAuthProvider.credential(email.value, password.value);
        await linkWithCredential(user.value!, credential);

        router.push({name: 'home'});
    }
    catch(error: any) {
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
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
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
    }
}
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="sign-container">
                <div class="login-form">
                    <div class="login-form-title mb-4">{{ t('Sign Up') }}</div>
    
                    <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                        <ul>
                            <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
    
                    <div class="mb-3">
                        <label for="login-input-email" class="form-label">{{ t('Email') }}</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-at"></i></span>
                            <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="login-input-email" v-model="email" :disabled="submitting">
                            <div class="invalid-feedback is-invalid" v-if="errors.email">{{ errors.email }}</div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="login-input-password" class="form-label">{{ t('Password') }}</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                            <input type="password" class="form-control" :class="{'is-invalid': errors.password}" id="login-input-password" v-model="password" :disabled="submitting">
                            <template v-if="errors.password">
                                <div class="invalid-feedback is-invalid" v-for="msg in errors.password" :key="msg">{{ msg }}</div>
                            </template>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="login-input-password-confirm" class="form-label">{{ t('Confirm Password') }}</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                            <input type="password" class="form-control" :class="{'is-invalid': errors.confirmPass}" id="login-input-password-confirm" v-model="confirmPass" :disabled="submitting">
                            <div class="invalid-feedback is-invalid" v-if="errors.confirmPass">{{ errors.confirmPass }}</div>
                        </div>
                    </div>
    
                    <button type="button" class="btn btn-primary" @click="register" :disabled="submitting">
                        <template v-if="!submitting">{{ t('Sign Up') }}</template>
                        <template v-else>{{ t('Signing Up') }} ...</template>
                    </button>
                </div>
                <div class="signup-parties">
                    {{ t('Or Sign Up Using') }}<br>
                    <button type="button" class="btn btn-danger google-auth" @click="signUpWithG">
                        <i class="bi bi-google"></i>
                    </button>
                </div>
                <div class="signup-link">
                    {{ t('Or Sign In Using') }}<br>
                    <RouterLink :to="{name: 'login'}">{{ t('Sign In') }}</RouterLink>
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
