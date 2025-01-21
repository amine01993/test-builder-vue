import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Question } from "@/models/Question";
import { useAuthenticationStore } from "./auth";

export const useQuestionServiceStore = defineStore('questionService', () => {

    const {db} = useFirestoreStore();
    const questions: Ref<Question[]|null> = ref(null);

    async function getQuestion(test_id: string, question_id: string): Promise<Question | null> {
        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        const snap = await getDoc(questionRef);
        if(snap.exists()) {
            const question = <Question>snap.data();
            question.id = snap.id;
            return question;
        }
        return null;
    }

    async function loadQuestions(test_id: string) {
        const questionsRef = collection(db, 'tests', test_id, 'questions');
        const q = query(questionsRef, orderBy('position'));
        const snaps = await getDocs(q);
        questions.value = snaps.docs.map(snap => {
            const question = <Question>snap.data();
            question.id = snap.id;
            return question;
        });
    }

    async function addQuestion(test_id: string, question: Question) {
        const {user} = useAuthenticationStore();
        question.updated_at = question.created_at = Timestamp.fromDate(new Date);
        question.user_id = user.value?.uid;
        const questionRef = await addDoc(collection(db, 'tests', test_id, 'questions'), question);
        return questionRef;
    }

    async function updateQuestion(test_id: string, question: Question) {
        if(question.id) {
            await updateDoc(doc(db, 'tests', test_id, 'questions', question.id), {
                text: question.text,
                type: question.type,
                max_points: question.max_points,
                position: question.position,
                updated_at: Timestamp.fromDate(new Date),
            });
        }
    }

    async function updateQuestionsPositions(test_id: string) {
        console.log('service questions', questions.value);
        if(questions.value) {
            const positions = questions.value.map(q => q.position);
            let i = 0;
            while(i + 1 < positions.length) {
                if(positions[i] > positions[i + 1]) {
                    const tmp = positions[i];
                    positions[i] = positions[i + 1];
                    positions[i + 1] = tmp;
                }
                i++;
            }

            for(const [index, question] of questions.value.entries()) {
                if(question.position !== positions[index] && question.id) {
                    const questionRef = doc(db, 'tests', test_id, 'questions', question.id);
                    await updateDoc(questionRef, {
                        position: positions[index],
                    });
                    question.position = positions[index];
                }
            }
        }
    }

    async function deleteQuestion(test_id: string, question: Question) {
        if(question.id) {
            const questionRef = doc(db, 'tests', test_id, 'questions', question.id);
            await deleteDoc(questionRef);
            if(questions.value) {
                const index = questions.value.findIndex(q => question.id === q.id);
                if(index > -1) questions.value.splice(index, 1);
            }
        }
    }

    return {
        questions: computed(() => questions),
        getQuestion,
        loadQuestions,
        addQuestion,
        updateQuestion,
        updateQuestionsPositions,
        deleteQuestion,
    }
});
