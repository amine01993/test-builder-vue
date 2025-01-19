import type { Timestamp } from "firebase/firestore";

export interface Test {
    id?: string;
    name: string;
    description: string;
    max_points: number;
    time_limit: number;
    user_id?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}