import type { Timestamp } from "firebase/firestore";

export interface Question {
    id?: string;
    text: string;
    test_id: string;
    max_points: number;
    type: QuestionType;
    position: number;
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