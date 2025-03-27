<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { onAuthStateChanged } from 'firebase/auth';
import { useContactServiceStore } from '@/stores/contactService';
import { useAuthenticationStore } from '@/stores/auth';
import { useMainStore } from '@/stores/main';
import { useLocalizationStore } from '@/stores/localization';
import { validateEmail } from '@/helpers/utils';
import AppContainer from '@/components/AppContainer.vue';

const {t} = useI18n();
const {auth} = useAuthenticationStore();
const {showMessage} = useMainStore();
const {name, email, message, loadUserInfo, sendContactInfo} = useContactServiceStore();
const {spaceLabel} = useLocalizationStore();

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(name.value === '') _errors.name = t('Full Name required');

    if(email.value === '') _errors.email = t('Email required');
    else if(!validateEmail(email.value)) _errors.email = t('Invalid email');

    if(message.value === '') _errors.message = t('Message required');

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, () => {
    loadUserInfo();
});

onUnmounted(() => {
    onAuthEventDispose();
});

async function send() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        const response = await sendContactInfo();
        console.log('response', response)
        if(!response.success) {
            showMessage('failure', response.message ?? response.error);
        }
        else {
            showMessage('success', t('Your message was sent successfully, Thanks!'));
        }
        serverErrors.value = [];
    }
    catch(error: any) {
        serverErrors.value = [t('Server Error') + spaceLabel.value + ': ' + error.code]
    }
    finally {
        submitting.value = false;
    }
}

</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="alert alert-danger" role="alert" v-if="serverErrors.length">
                <ul>
                    <li v-for="error in serverErrors" :key="error">{{ error }}</li>
                </ul>
            </div>

            <div class="contact-us-form">
                <div class="form-title mb-4">{{ t('Contact us') }}</div>
    
                <div class="mb-3">
                    <label for="test-input-name" class="form-label">{{ t('Full Name') }}<span class="required">*</span></label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="test-input-name" v-model="name" 
                        :disabled="submitting" aria-required>
                    <div class="invalid-feedback is-invalid" v-if="errors.name">{{ errors.name }}</div>
                </div>

                <div class="mb-3">
                    <label for="test-input-email" class="form-label">{{ t('Email') }}<span class="required">*</span></label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.email}" id="test-input-email" v-model="email" 
                        :disabled="submitting" aria-required>
                    <div class="invalid-feedback is-invalid" v-if="errors.email">{{ errors.email }}</div>
                </div>

                <div class="mb-3">
                    <label for="test-input-message" class="form-label">{{ t('Message') }}<span class="required">*</span></label>
                    <textarea class="form-control" :class="{'is-invalid': errors.message}" id="test-input-message" rows="5" v-model="message" 
                        :disabled="submitting" aria-required></textarea>
                    <div class="invalid-feedback is-invalid" v-if="errors.message">{{ errors.message }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="send" :disabled="submitting">
                    <template v-if="!submitting">{{ t('Send') }}</template>
                    <template v-else>{{ t('Sending') }} ...</template>
                </button>
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

        .alert ul {
            margin-bottom: 0;
        }

        .contact-us-form {

            .form-title {
                font-size: 1.7em;
                font-weight: 600;
                text-align: center;
            }

            .required {
                color: vars.$app-red;
                margin-left: 5px;
            }

            [type=button] {
                margin: auto;
                display: block;
            }
        }
    }
</style>