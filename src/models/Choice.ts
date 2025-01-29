import type { Timestamp } from "firebase/firestore";
import type { QuestionType } from "./Question";

export interface Choice {
    id?: string;
    text: string;
    is_correct?: boolean;
    points?: number;
    question?: {
        type: QuestionType,
    },
    position: number;
    user_id?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}