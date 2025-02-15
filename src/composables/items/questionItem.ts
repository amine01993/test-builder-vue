import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useMainStore } from "@/stores/main";
import { useModalStore } from "@/stores/modal";
import { useQuestionServiceStore } from "@/stores/questionService";
import { formatDate, getQuestionType } from "@/helpers/utils";
import { type Question } from "@/models/Question";

export function useQuestionItem(test_id?: string, question?: Question) {
    
    const {locale, t} = useI18n();
    const {showMessage, startLoading, endLoading} = useMainStore();
    const {deleteQuestion} = useQuestionServiceStore();
    const {confirm: confirmDeletion} = useModalStore();
    
    const questionType = computed(() => {
        if(!question) return '';
        return getQuestionType(question);
    });

    const updatedAt = computed(() => {
        if(!question) return '';
        const updated_at = question.updated_at!.toDate();
        return formatDate(updated_at, locale.value);
    });
    
    function confirmQuestiondeletion() {
        if(question) {
            confirmDeletion(
                t('Are you sure you want to delete this question: "{text}"?', {text: question.text}),
                t('Delete'), deleteDQuestion
            );
        }
    }
    
    async function deleteDQuestion() {
        if(test_id && question?.id) {
            try {
                startLoading();
                await deleteQuestion(test_id, question.id);
                showMessage('success', t('Question deleted with success.'));
            }
            catch(error) {
                showMessage('failure', t('Question can not be deleted.'));
            }
            finally {
                endLoading();
            }
        }
    }

    return {
        questionType, updatedAt,
        confirmQuestiondeletion,
    }
}