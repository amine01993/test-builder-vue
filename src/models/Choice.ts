import type { Timestamp } from "firebase/firestore";

export interface Choice {
    id?: string;
    text: string;
    is_correct?: boolean;
    points?: number;
    position: number;
    user_id?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}