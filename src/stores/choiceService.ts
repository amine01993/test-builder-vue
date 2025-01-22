import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
import { computed, ref, type Ref } from "vue";
import { useFirestoreStore } from "./firestore";
import { useAuthenticationStore } from "./auth";
import type { Choice } from "@/models/Choice";

export const useChoiceServiceStore = defineStore('choiceService', () => {

    const {db} = useFirestoreStore();
    const choices: Ref<Choice[]|null> = ref(null);

    async function getChoice(test_id: string, question_id: string, choice_id: string): Promise<Choice | null> {
        const choiceRef = doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id);
        const snap = await getDoc(choiceRef);
        if(snap.exists()) {
            const choice = <Choice>snap.data();
            choice.id = snap.id;
            return choice;
        }
        return null;
    }

    async function loadChoices(test_id: string, question_id: string) {
        const choicesRef = collection(db, 'tests', test_id, 'questions', question_id, 'choices');
        const q = query(choicesRef, orderBy('position'));
        const snaps = await getDocs(q);
        choices.value = snaps.docs.map(snap => {
            const choice = <Choice>snap.data();
            choice.id = snap.id;
            return choice;
        });
    }

    async function addChoice(test_id: string, question_id: string, choice: Choice) {
        const {user} = useAuthenticationStore();
        choice.updated_at = choice.created_at = Timestamp.fromDate(new Date);
        choice.user_id = user.value?.uid;
        const questionRef = await addDoc(collection(db, 'tests', test_id, 'questions', question_id, 'choices'), choice);
        return questionRef;
    }

    async function updateChoice(test_id: string, question_id: string, choice_id: string, choice: Choice) {
        await updateDoc(doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id), {
            text: choice.text,
            is_correct: choice.is_correct,
            points: choice.points,
            position: choice.position,
            updated_at: Timestamp.fromDate(new Date),
        });   
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
        const choiceRef = doc(db, 'tests', test_id, 'questions', question_id, 'choices', choice_id);
        await deleteDoc(choiceRef);

        if(choices.value) {
            const index = choices.value.findIndex(c => choice_id === c.id);
            if(index > -1) choices.value.splice(index, 1);
        }
    }

    return {
        choices: computed(() => choices),
        getChoice,
        loadChoices,
        addChoice,
        updateChoice,
        updateChoicesPositions,
        deleteChoice,
    }
});
