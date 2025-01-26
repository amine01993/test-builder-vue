import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import type { Question } from "@/models/Question";
import { useAuthenticationStore } from "./auth";
import type { Choice } from "@/models/Choice";
import { useChoiceServiceStore } from "./choiceService";
import type { Test } from "@/models/Test";
import { useTestServiceStore } from "./testService";

export const useQuestionServiceStore = defineStore('questionService', () => {

    const {db} = useFirestoreStore();
    const {getChoices} = useChoiceServiceStore();
    const testId: Ref<string|undefined> = ref();
    const questionCount: Ref<number|undefined> = ref();
    const questions: Ref<Question[]|undefined> = ref();

    function updateChoiceCount(question_id: string, count: number) {
        const question = questions.value?.find(q => q.id === question_id);
        if(question) {
            question.choiceCount = count;
        }
    }

    async function getQuestion(test_id: string, question_id: string): Promise<Question | undefined> {
        if(testId.value === test_id) {
            const question = questions.value?.find(q => q.id === question_id);
            if(question) return question;
        }

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

    async function loadQuestions(test: Test) {
        if(!test.id || testId.value === test.id) return;

        testId.value = test.id;
        questionCount.value = test.questionCount;

        const questionsRef = collection(db, 'tests', test.id, 'questions');
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
        const {updateQuestionCount} = useTestServiceStore();

        question.user_id = user.value?.uid;
        const questionRef = await addDoc(collection(db, 'tests', test_id, 'questions'), question);

        question.id = questionRef.id;
        question.updated_at = Timestamp.fromDate(new Date);

        if(questions.value) {
            questions.value.unshift(question);
            // sort by position
            let i = 0;
            while(i + 1 < questions.value.length) {
                if(questions.value[i].position > questions.value[i + 1].position) {
                    const tmp = questions.value[i];
                    questions.value[i] = questions.value[i + 1];
                    questions.value[i + 1] = tmp;
                }
                i++;
            }
        }
        else {
            questions.value = [question];
        }

        if(questionCount.value) questionCount.value++;
        else questionCount.value = 1;
        updateQuestionCount(test_id, questionCount.value);
        
        return questionRef;
    }

    async function updateQuestion(test_id: string, question_id: string, question: Question) {
        await updateDoc(doc(db, 'tests', test_id, 'questions', question_id), {
            text: question.text,
            type: question.type,
            max_points: question.max_points,
            position: question.position,
        });

        if(questions.value) {
            const index = questions.value.findIndex(q => q.id === question_id);
            if(index > -1) {
                const _question = questions.value[index];
                _question.text = question.text;
                _question.type = question.type;
                _question.max_points = question.max_points;
                _question.updated_at = Timestamp.fromDate(new Date);

                // sort by position
                if(question.position > _question.position) {
                    let i = index;
                    while(i + 1 < questions.value.length) {
                        if(question.position > questions.value[i + 1].position) {
                            const tmp = questions.value[i];
                            questions.value[i] = questions.value[i + 1];
                            questions.value[i + 1] = tmp;
                        }
                        i++;
                    }
                }
                else if (question.position < _question.position) {
                    let i = index;
                    while(i - 1 >= 0) {
                        if(question.position < questions.value[i - 1].position) {
                            const tmp = questions.value[i];
                            questions.value[i] = questions.value[i - 1];
                            questions.value[i - 1] = tmp;
                        }
                        i--;
                    }
                }
                _question.position = question.position;
            }
        }
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
        const {updateQuestionCount} = useTestServiceStore();

        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        await deleteDoc(questionRef);

        if(questions.value) {
            const index = questions.value.findIndex(q => question_id === q.id);
            if(index > -1) questions.value.splice(index, 1);
        }

        if(questionCount.value) questionCount.value--;
        else questionCount.value = 0;
        updateQuestionCount(test_id, questionCount.value);

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
        questionCount: computed(() => questionCount),
        questions: computed(() => questions),
        getQuestion,
        getQuestions,
        loadQuestions,
        addQuestion,
        updateQuestion,
        updateQuestionsPositions,
        updateChoiceCount,
        deleteQuestion,
    }
});
