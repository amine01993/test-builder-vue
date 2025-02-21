import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import { useQuestionServiceStore } from "./questionService";
import { useTestServiceStore } from "./testService";
import { useAuthenticationStore } from "./auth";
import type { Choice } from "@/models/Choice";
import type { Question } from "@/models/Question";

export const useChoiceServiceStore = defineStore('choiceService', () => {

    const {db} = useFirestoreStore();
    const testId: Ref<string|undefined> = ref();
    const questionId: Ref<string|undefined> = ref();
    const choiceCount: Ref<number|undefined> = ref();
    const choices: Ref<Choice[]|undefined> = ref();

    async function getChoice(test_id: string, question_id: string, choice_id: string): Promise<Choice | undefined> {
        if(testId.value === test_id && questionId.value === question_id && choices.value) {
            const choice = choices.value?.find(c => c.id === choice_id);
            if(choice) return choice;
        }

        const choiceRef = doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id);
        const snap = await getDoc(choiceRef);
        if(snap.exists()) {
            const choice = <Choice>snap.data();
            choice.id = snap.id;
            return choice;
        }
    }

    async function getChoices(test_id: string, question_id: string) {
        const {user} = useAuthenticationStore();

        const choicesRef = collection(db, 'tests', test_id, 'questions', question_id, 'choices');
        const q = query(choicesRef, where('user_id', '==', user.value?.uid), orderBy('position'));
        const snaps = await getDocs(q);
        return snaps.docs.map(snap => {
            const choice = <Choice>snap.data();
            choice.id = snap.id;
            return choice;
        });
    }

    async function loadChoices(test_id: string, question: Question) {
        if(!question.id || testId.value === test_id && questionId.value === question.id && choices.value) return;

        testId.value = test_id;
        questionId.value = question.id;
        choiceCount.value = question.choiceCount;

        const choicesRef = collection(db, 'tests', test_id, 'questions', question.id, 'choices');
        const q = query(choicesRef, where('user_id', '==', question.user_id), orderBy('position'));
        const snaps = await getDocs(q);
        choices.value = snaps.docs.map(snap => {
            const choice = <Choice>snap.data();
            choice.id = snap.id;
            return choice;
        });
    }

    async function addChoice(test_id: string, question_id: string, choice: Choice) {
        const {user} = useAuthenticationStore();
        const {updateMaxPoints: updateTestMaxPoints} = useTestServiceStore();
        const {incrementChoiceCount, updateMaxPoints} = useQuestionServiceStore();

        choice.user_id = user.value?.uid;
        const choiceRef = await addDoc(collection(db, 'tests', test_id, 'questions', question_id, 'choices'), choice);

        choice.id = choiceRef.id;
        choice.updated_at = Timestamp.fromDate(new Date);

        if(choices.value) {
            choices.value.unshift(choice);
            // sort by position
            let i = 0;
            while(i + 1 < choices.value.length) {
                if(choices.value[i].position > choices.value[i + 1].position) {
                    const tmp = choices.value[i];
                    choices.value[i] = choices.value[i + 1];
                    choices.value[i + 1] = tmp;
                }
                i++;
            }
        }

        if(choiceCount.value) choiceCount.value++;

        incrementChoiceCount(question_id);

        if(choice.points && choice.points > 0) {
            updateMaxPoints(question_id);
            updateTestMaxPoints(test_id);
        }
        
        return choiceRef;
    }

    async function updateChoice(test_id: string, question_id: string, choice_id: string, choice: Choice) {
        const {updateMaxPoints: updateTestMaxPoints} = useTestServiceStore();
        const {updateMaxPoints} = useQuestionServiceStore();

        await updateDoc(doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id), {
            text: choice.text,
            is_correct: choice.is_correct,
            points: choice.points,
            position: choice.position,
        });

        if(choices.value) {
            const index = choices.value.findIndex(c => c.id === choice_id);
            if(index > -1) {
                const _choice = choices.value[index];
                _choice.text = choice.text;
                _choice.is_correct = choice.is_correct;
                _choice.updated_at = Timestamp.fromDate(new Date);

                // sort by position
                if(choice.position > _choice.position) {
                    let i = index;
                    while(i + 1 < choices.value.length) {
                        if(choice.position > choices.value[i + 1].position) {
                            const tmp = choices.value[i];
                            choices.value[i] = choices.value[i + 1];
                            choices.value[i + 1] = tmp;
                        }
                        i++;
                    }
                }
                else if (choice.position < _choice.position) {
                    let i = index;
                    while(i - 1 >= 0) {
                        if(choice.position < choices.value[i - 1].position) {
                            const tmp = choices.value[i];
                            choices.value[i] = choices.value[i - 1];
                            choices.value[i - 1] = tmp;
                        }
                        i--;
                    }
                }
                _choice.position = choice.position;

                if(_choice.points !== choice.points) {
                    _choice.points = choice.points;
                    updateMaxPoints(question_id);
                    updateTestMaxPoints(test_id);
                }
            }
        }
    }

    async function updateChoicesPositions(test_id: string, question_id: string) {
        if(choices.value) {
            const positions = choices.value.map(c => c.position);
            let i = 0;
            while(i + 1 < positions.length) {
                if(positions[i] > positions[i + 1]) {
                    const tmp = positions[i];
                    positions[i] = positions[i + 1];
                    positions[i + 1] = tmp;
                }
                i++;
            }

            for(const [index, choice] of choices.value.entries()) {
                if(choice.position !== positions[index] && choice.id) {
                    const questionRef = doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice.id);
                    await updateDoc(questionRef, {
                        position: positions[index],
                    });
                    choice.position = positions[index];
                }
            }
        }
    }

    async function deleteChoice(test_id: string, question_id: string, choice_id: string) {
        const {updateMaxPoints: updateTestMaxPoints} = useTestServiceStore();
        const {decrementChoiceCount, updateMaxPoints} = useQuestionServiceStore();

        const choiceRef = doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id);
        await deleteDoc(choiceRef);

        if(choices.value) {
            const index = choices.value.findIndex(c => choice_id === c.id);
            if(index > -1) choices.value.splice(index, 1);
        }

        if(choiceCount.value) choiceCount.value--;
        
        decrementChoiceCount(question_id);
        updateMaxPoints(question_id);
        updateTestMaxPoints(test_id);
    }

    return {
        choiceCount: computed(() => choiceCount),
        choices: computed(() => choices),
        getChoice,
        getChoices,
        loadChoices,
        addChoice,
        updateChoice,
        updateChoicesPositions,
        deleteChoice,
    }
});
