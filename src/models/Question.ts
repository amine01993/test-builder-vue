import type { Timestamp } from "firebase/firestore";
import type { Choice } from "./Choice";

export interface Question {
    id?: string;
    text: string;
    max_points: number;
    type: QuestionType;
    position: number;
    choiceCount?: number;
    choices?: Choice[];
    user_id?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}

export enum QuestionType {
    SingleChoice = 1,
    MultipleChoice = 2,
    Text = 3,
    Number = 4,
}