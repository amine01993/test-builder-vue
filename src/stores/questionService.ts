import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Question } from "@/models/Question";
import { useAuthenticationStore } from "./auth";
import type { Choice } from "@/models/Choice";
import { useChoiceServiceStore } from "./choiceService";

export const useQuestionServiceStore = defineStore('questionService', () => {

    const {db} = useFirestoreStore();
    const {getChoices} = useChoiceServiceStore();
    const questions: Ref<Question[]|undefined> = ref();

    async function getQuestion(test_id: string, question_id: string): Promise<Question | undefined> {
        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        const snap = await getDoc(questionRef);
        if(snap.exists()) {
            const question = <Question>snap.data();
            question.id = snap.id;
            return question;
        }
        return;
    }

    async function getQuestions(test_id: string): Promise<Question[]> {
        const questionsRef = collection(db, 'tests', test_id, 'questions');
        const q = query(questionsRef, orderBy('position'));
        const questions: Question[] = [];
        
        const choicesList = await getDocs(q)
        .then(snaps => {
            const promises: Promise<Choice[]>[] = [];
            snaps.forEach(snap => {
                if(snap.exists()) {
                    const question = <Question>snap.data();
                    question.id = snap.id;
                    questions.push(question);

                    promises.push(getChoices(test_id, snap.id));
                }
            });
            return Promise.all(promises);
        });
        
        choicesList.forEach((choices, index) => {
            questions[index].choices = choices;
        });

        return questions;
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

    async function updateQuestion(test_id: string, question_id: string, question: Question) {
        await updateDoc(doc(db, 'tests', test_id, 'questions', question_id), {
            text: question.text,
            type: question.type,
            max_points: question.max_points,
            position: question.position,
            updated_at: Timestamp.fromDate(new Date),
        });
    }

    async function updateQuestionsPositions(test_id: string) {
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

    async function deleteQuestion(test_id: string, question_id: string) {
        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        await deleteDoc(questionRef);
        if(questions.value) {
            const index = questions.value.findIndex(q => question_id === q.id);
            if(index > -1) questions.value.splice(index, 1);
        }

        // delete choices
        const batch = writeBatch(db);
        const choicesRef = collection(db, 'tests', test_id, 'questions', question_id, 'choices');
        const snaps = await getDocs(choicesRef);
        snaps.forEach(snap => {
            batch.delete(snap.ref);
        });
        await batch.commit();
    }

    return {
        questions: computed(() => questions),
        getQuestion,
        getQuestions,
        loadQuestions,
        addQuestion,
        updateQuestion,
        updateQuestionsPositions,
        deleteQuestion,
    }
});
