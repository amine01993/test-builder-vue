<script setup lang="ts">
import { computed, onUnmounted, ref, type Ref } from 'vue';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuthenticationStore } from '@/stores/auth';
import { useUserTestServiceStore } from '@/stores/userTestService';
import AppContainer from '@/components/AppContainer.vue';

const {auth} = useAuthenticationStore();
const {displayName, updateDisplayName} = useUserTestServiceStore();

const submitted = ref(false);
const submitting = ref(false);
const serverErrors: Ref<any[]> = ref([]);
const fileError = ref('');
const errors = computed(() => {
    const _errors: {[key: string]: string} = {};
    if(!submitted.value) return _errors;

    if(displayName.value === '') _errors.displayName = 'Full Name required';

    return _errors;
});

const onAuthEventDispose = onAuthStateChanged(auth, async (user: User|null) => {

    if(user?.displayName) {
        displayName.value = user.displayName;
    }
});

onUnmounted(() => {
    onAuthEventDispose();
});

function onFileUpload(event: any) {
    // console.log('onFileUpload', event.target, event.target.files)
    fileError.value = '';
    if(event.target.files && event.target.files.length > 0) {
        const file: File = event.target.files[0];
        console.log('onFileUpload', file)

        const sizeMB = file.size / 1024 / 1024;
        if(sizeMB > 4) {
            fileError.value = 'The uploaded file cannot exceed the maximum limit of 4MB.';
            return;
        }

        if(!/^image\//i.test(file.type)) {
            fileError.value = 'The uploaded file must be an image.';
            return;
        }
    }
}

async function updateFullName() {
    if(submitting.value) return;

    submitting.value = true;
    submitted.value = true;

    if(Object.keys(errors.value).length > 0) {
        submitting.value = false;
        return;
    }

    try {
        await updateDisplayName();
        serverErrors.value = [];
    }
    catch(error: any) {
        serverErrors.value = ['Server Error: ' + error.code]
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

            <!-- <div class="photo-form">
                <div class="form-title mb-4">Choose a profile picture</div>            
    
                <div class="mb-3">
                    <label for="personal-photo-input" class="form-label">Select a picture</label>
                    <input class="form-control" type="file" id="personal-photo-input" :class="{'is-invalid': fileError}" @change="onFileUpload">
                    <div class="invalid-feedback is-invalid" v-if="fileError">{{ fileError }}</div>
                </div>
            </div> -->

            <div class="personal-info-form">
                <div class="form-title mb-4">Personal Information</div>
    
                <div class="mb-3">
                    <label for="test-input-name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="test-input-name" v-model="displayName" :disabled="submitting">
                    <div class="invalid-feedback is-invalid" v-if="errors.name">{{ errors.name }}</div>
                </div>
    
                <button type="button" class="btn btn-primary" @click="updateFullName" :disabled="submitting">
                    <template v-if="!submitting">Save</template>
                    <template v-else>Saving ...</template>
                </button>
            </div>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;

    .app-main {

        .alert ul {
            margin-bottom: 0;
        }

        .photo-form, .personal-info-form {
            margin: 2vh;
            padding: 2vh;
            background-color: vars.$app-white;
            box-shadow: 5px 5px 25px vars.$app-grey;

            .form-title {
                font-size: 2em;
                font-weight: 600;
                text-align: center;
            }

            [type=button] {
                margin: auto;
                display: block;
            }
        }
    }
</style>