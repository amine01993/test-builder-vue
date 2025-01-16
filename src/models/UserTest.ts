import type { Timestamp } from "firebase/firestore";
import type { Answer } from "./Answer";

export interface UserTest {
    id: string;
    user_id: string;
    test_id: string;
    report: Report;
    ended_in: number;
}

export interface Report {
    name: string;
    email: string;
    start_at: Timestamp;
    ended_at: Timestamp;
    answers: Answer[];
}