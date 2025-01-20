import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Question } from "@/models/Question";
import { useAuthenticationStore } from "./auth";

export const useQuestionServiceStore = defineStore('questionService', () => {

    const {db} = useFirestoreStore();
    const questions: Ref<Question[]|null> = ref(null);

    async function loadQuestions(test_id: string) {
        const testsRef = collection(db, 'tests', test_id, 'questions');
        const q = query(testsRef, orderBy('position'));
        const snaps = await getDocs(q);
        questions.value = snaps.docs.map(snap => {
            const question = <Question>snap.data();
            question.id = snap.id;
            return question;
        });
    }

    async function addQuestion(question: Question) {
        const {user} = useAuthenticationStore();
        question.updated_at = question.created_at = Timestamp.fromDate(new Date);
        question.user_id = user.value?.uid;
        const questionRef = await addDoc(collection(db, 'tests', question.test_id, 'questions'), question);
        return questionRef;
    }

    async function updateQuestionsPositions() {
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
                    const questionRef = doc(db, 'tests', question.test_id, 'questions', question.id);
                    await updateDoc(questionRef, {
                        position: positions[index],
                    });
                    question.position = positions[index];
                }
            }
        }
    }

    async function deleteQuestion(question: Question) {
        if(question.id) {
            const questionRef = doc(db, 'tests', question.test_id, 'questions', question.id);
            await deleteDoc(questionRef);
            if(questions.value) {
                const index = questions.value.findIndex(q => question.id === q.id);
                if(index > -1) questions.value.splice(index, 1);
            }
        }
    }

    return {
        questions: computed(() => questions),
        loadQuestions,
        addQuestion,
        updateQuestionsPositions,
        deleteQuestion,
    }
});
