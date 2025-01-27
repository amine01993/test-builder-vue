import type { Timestamp } from "firebase/firestore";

export interface UserTest {
    id?: string;
    user_id: string;
    user: {
        displayName: string;
        email: string;
    };
    test_id: string;
    test: {
        name: string;
        max_points: number;
        questionCount: number;
    }
    started_at: Timestamp;
    ended_in?: Timestamp;
    report?: Report[];
    result?: {score: number};
}

export interface Report {
    question_id: string;
    answers: string[];
}