import type { Timestamp } from "firebase/firestore";

export interface TestResult {
    id?: string;
    user_test_id: string;
    score: number;
    deleted_at: Timestamp;
}