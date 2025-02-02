import { type User } from "firebase/auth";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useFetchStore } from "./fetch";

export const useLocalizationStore = defineStore('localization', () => {

    const {locale} = useI18n();

    const spaceLabel = ref(locale.value === 'fr' ? ' ' : '');
    const lang = ref(locale.value === 'fr' ? 'FR' : 'EN');

    watch(locale, () => {
        spaceLabel.value = locale.value === 'fr' ? ' ' : '';
        lang.value = locale.value === 'fr' ? 'FR' : 'EN';
    });

    async function initLocale(user: User|null) {
        if(user) {
            const result = await user.getIdTokenResult(true);
            if('locale' in result.claims) {
                locale.value = result.claims.locale === 'fr' ? 'fr' : 'en';
            }
        }
    }

    async function toggleLocale() {
        if(locale.value === 'en') locale.value = 'fr';
        else locale.value = 'en';

        const {post} = useFetchStore();
        
        return await post('/update-locale', {locale: locale.value});
    }

    return {
        spaceLabel: computed(() => spaceLabel),
        lang: computed(() => lang),
        initLocale,
        toggleLocale,
    }
});