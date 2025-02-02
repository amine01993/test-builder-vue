import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useMainStore } from "@/stores/main";
import { useModalStore } from "@/stores/modal";
import { useChoiceServiceStore } from "@/stores/choiceService";
import type { Choice } from "@/models/Choice";

export function useChoiceItem(test_id?: string, question_id?: string, choice?: Choice) {

    const {locale, t} = useI18n();
    const {showMessage, startLoading, endLoading} = useMainStore();
    const {deleteChoice} = useChoiceServiceStore();
    const {confirm: confirmDeletion} = useModalStore();
    const currentDate = new Date();
    
    const updatedAt = computed(() => {
        const updated_at = choice!.updated_at!.toDate();
            return new Intl.DateTimeFormat(locale.value + '-CA', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(updated_at);
    });
    
    function confirmChoicedeletion() {
        if(choice) {
            confirmDeletion(
                t('Are you sure you want to delete this choice: "{text}"?', {text: choice.text}),
                t('Delete'), deleteDChoice
            );
        }
    }
    
    async function deleteDChoice() {
        if(test_id && question_id && choice?.id) {
            try {
                startLoading();
                await deleteChoice(test_id, question_id, choice.id);
                showMessage('success', t('Choice deleted with success.'));
            }
            catch(error) {
                showMessage('failure', t('Choice can not be deleted.'));
            }
            finally {
                endLoading();
            }
        }
    }    

    return {
        updatedAt,
        confirmChoicedeletion,
    }
}