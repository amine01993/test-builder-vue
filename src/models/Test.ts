import type { Timestamp } from "firebase/firestore";
import type { Question } from "./Question";

export interface Test {
    id?: string;
    name: string;
    description: string;
    max_points?: number;
    time_limit: number;
    questionCount?: number;
    questions?: Question[];
    user_id?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}