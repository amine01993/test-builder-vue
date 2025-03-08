import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { useFirestoreStore } from "./firestore";
import { useAuthenticationStore } from "./auth";
import type { Contact } from "@/models/Contact";

export const useContactServiceStore = defineStore('contactService', () => {

    const {db} = useFirestoreStore();
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

        const contact: Contact = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        if(user.value) {
            contact.user_id = user.value.uid;
        }

        const contactRef = await addDoc(collection(db, 'contacts'), contact);

        return contactRef;
    }

    return {
        name: computed(() => name),
        email: computed(() => email),
        message: computed(() => message),
        loadUserInfo,
        sendContactInfo,
    }
});