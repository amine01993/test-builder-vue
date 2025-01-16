import type { Timestamp } from "firebase/firestore";

export interface Answer {
    id: string|undefined;
    question_id: string;
    text: string|number;
    chosen_at: Timestamp;
}