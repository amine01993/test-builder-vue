import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import { useAuthenticationStore } from "./auth";
import type { Contact } from "@/models/Contact";
import { useFetchStore } from "./fetch";

export const useContactServiceStore = defineStore('contactService', () => {

    const {user} = useAuthenticationStore();

    const name: Ref<string> = ref('');
    const email: Ref<string> = ref('');
    const message: Ref<string> = ref('');

    function loadUserInfo() {
        if(user.value) {
            if(user.value.displayName) {
                name.value = user.value.displayName;
            }
            if(user.value.email) {
                email.value = user.value.email;
            }
        }
    }

    async function sendContactInfo() {
        const {post} = useFetchStore();

        const contact: Contact = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        return await post('/contact-form', contact);
    }

    return {
        name: computed(() => name),
        email: computed(() => email),
        message: computed(() => message),
        loadUserInfo,
        sendContactInfo,
    }
});