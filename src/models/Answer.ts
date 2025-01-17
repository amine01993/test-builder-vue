import type { Timestamp } from "firebase/firestore";

export interface Answer {
    id?: string;
    question_id: string;
    text: string|number;
    chosen_at: Timestamp;
}