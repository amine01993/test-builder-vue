import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useMainStore } from "@/stores/main";
import { useModalStore } from "@/stores/modal";
import { useQuestionServiceStore } from "@/stores/questionService";
import { QuestionType, type Question } from "@/models/Question";

export function useQuestionItem(test_id?: string, question?: Question) {
    
    const {locale, t} = useI18n();
    const {showMessage, startLoading, endLoading} = useMainStore();
    const {deleteQuestion} = useQuestionServiceStore();
    const {confirm: confirmDeletion} = useModalStore();
    const currentDate = new Date();
    
    const questionType = computed(() => {
        switch(question?.type) {
            case QuestionType.MultipleChoice:
                return 'Multiple Choice';
            case QuestionType.Number:
                return 'Number';
            case QuestionType.SingleChoice:
                return 'Single Choice';
            default:
                return 'Text';
        }
    });
    const updatedAt = computed(() => {
        const updated_at = question!.updated_at!.toDate();
        return new Intl.DateTimeFormat(locale.value + '-CA', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(updated_at);
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