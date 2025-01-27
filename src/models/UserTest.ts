import type { Timestamp } from "firebase/firestore";

export interface UserTest {
    id?: string;
    user_id: string;
    test_id: string;
    started_at: Timestamp;
    ended_in?: Timestamp;
    report?: Report;
    result?: {score: number};
}

export interface Report {
    question_id: string;
    answers: string[];
}