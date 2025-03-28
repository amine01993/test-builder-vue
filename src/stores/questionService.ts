import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, where, writeBatch } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import { useAuthenticationStore } from "./auth";
import { useChoiceServiceStore } from "./choiceService";
import { useTestServiceStore } from "./testService";
import { QuestionType, type Question } from "@/models/Question";
import type { Test } from "@/models/Test";
import type { Choice } from "@/models/Choice";

export const useQuestionServiceStore = defineStore('questionService', () => {

    const {db} = useFirestoreStore();
    const {getChoices} = useChoiceServiceStore();
    const testId: Ref<string|undefined> = ref();
    const questions: Ref<Question[]|undefined> = ref();
    const question: Ref<Question|undefined> = ref();

    function incrementChoiceCount(question_id: string) {
        const question = questions.value?.find(q => q.id === question_id);
        if(question) {
            if(question?.choiceCount) {
                question.choiceCount++;
            }
            else {
                question.choiceCount = 1;
            }
        }
    }

    function decrementChoiceCount(question_id: string) {
        const question = questions.value?.find(q => q.id === question_id);
        if(question?.choiceCount) {
            question.choiceCount--;
        }
    }

    function updateMaxPoints(question_id: string) {
        if(!questions.value) return;

        const question = questions.value.find(q => q.id === question_id);
        if(!question) return;

        const {choices} = useChoiceServiceStore();
        if(!choices.value) return;

        let maxPoints = 0;
        if(question.type === QuestionType.MultipleChoice) {
            maxPoints = choices.value.reduce((acc, val) => {
                const pts = val.points ?? 0;
                return pts > 0 ? acc + pts : acc;
            }, 0);
        }
        else {
            maxPoints = choices.value.reduce((acc, val) => Math.max(acc, val.points ?? 0), 0);
        }
        question.max_points = maxPoints;
    }

    async function loadQuestion(test_id: string, question_id: string): Promise<void> {
        if(testId.value === test_id) {
            question.value = questions.value?.find(q => q.id === question_id);
        }

        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        const snap = await getDoc(questionRef);
        if(snap.exists()) {
            const _question = <Question>snap.data();
            _question.id = snap.id;
            question.value = _question;
        }
    }

    async function getQuestions(test_id: string): Promise<Question[]> {
        const {user} = useAuthenticationStore();

        const questionsRef = collection(db, 'tests', test_id, 'questions');
        const q = query(questionsRef, where('user_id', '==', user.value?.uid), orderBy('position'));
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

        const questionsRef = collection(db, 'tests', test.id, 'questions');
        const q = query(questionsRef, where('user_id', '==', test.user_id), orderBy('position'));
        const snaps = await getDocs(q);
        questions.value = snaps.docs.map(snap => {
            const question = <Question>snap.data();
            question.id = snap.id;
            return question;
        });
    }

    async function addQuestion(test: Test, _question: Question) {
        const {user} = useAuthenticationStore();
        const {incrementQuestionCount} = useTestServiceStore();

        _question.user_id = user.value?.uid;
        const questionRef = await addDoc(collection(db, 'tests', test.id!, 'questions'), _question);

        _question.id = questionRef.id;
        _question.updated_at = Timestamp.fromDate(new Date);

        if(questions.value) {
            questions.value.unshift(_question);
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

        incrementQuestionCount(test.id!);

        return questionRef;
    }

    async function updateQuestion(test_id: string, question_id: string, question: Question) {
        await updateDoc(doc(db, 'tests', test_id, 'questions', question_id), {
            text: question.text,
            type: question.type,
            position: question.position,
        });

        if(questions.value) {
            const index = questions.value.findIndex(q => q.id === question_id);
            if(index > -1) {
                const _question = questions.value[index];
                _question.text = question.text;
                _question.type = question.type;
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
                let k = i;
                while(k > -1 && positions[k] > positions[k + 1]) {
                    const tmp = positions[k];
                    positions[k] = positions[k + 1];
                    positions[k + 1] = tmp;
                    k--;
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
        const {user} = useAuthenticationStore();
        const {decrementQuestionCount} = useTestServiceStore();

        const questionRef = doc(db, 'tests', test_id, 'questions', question_id);
        await deleteDoc(questionRef);

        if(questions.value) {
            const index = questions.value.findIndex(q => question_id === q.id);
            if(index > -1) questions.value.splice(index, 1);
        }

        decrementQuestionCount(test_id);

        // delete choices
        const batch = writeBatch(db);
        const choicesRef = collection(db, 'tests', test_id, 'questions', question_id, 'choices');
        const listQuestions = query(choicesRef, where('user_id', '==', user.value?.uid));
        const snaps = await getDocs(listQuestions);
        snaps.forEach(snap => {
            batch.delete(snap.ref);
        });
        await batch.commit();
    }

    return {
        question: computed(() => question),
        questions: computed(() => questions),
        getQuestions,
        loadQuestion,
        loadQuestions,
        addQuestion,
        updateQuestion,
        updateQuestionsPositions,
        incrementChoiceCount,
        decrementChoiceCount,
        updateMaxPoints,
        deleteQuestion,
    }
});
