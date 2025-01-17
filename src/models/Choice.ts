
export interface Choice {
    id?: string;
    text: string;
    question_id: string;
    is_correct: boolean;
    points: number;
    position: number;
}