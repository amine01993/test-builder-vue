import { computed } from "vue";
import { useMainStore } from "@/stores/main";
import { useModalStore } from "@/stores/modal";
import { useChoiceServiceStore } from "@/stores/choiceService";
import type { Choice } from "@/models/Choice";

export function useChoiceItem(test_id?: string, question_id?: string, choice?: Choice) {
    const {showMessage, startLoading, endLoading} = useMainStore();
    const {deleteChoice} = useChoiceServiceStore();
    const {confirm: confirmDeletion} = useModalStore();
    const currentDate = new Date();
    
    const updatedAt = computed(() => {
        const updated_at = choice!.updated_at!.toDate();
            return new Intl.DateTimeFormat('en-US', {
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
                `Are you sure you want to delete this choice: "${choice.text}"?`,
                'Delete', deleteDChoice
            );
        }
    }
    
    async function deleteDChoice() {
        if(test_id && question_id && choice?.id) {
            try {
                startLoading();
                await deleteChoice(test_id, question_id, choice.id);
                showMessage('success', 'Choice deleted with success.');
            }
            catch(error) {
                showMessage('failure', 'Choice can not be deleted.');
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