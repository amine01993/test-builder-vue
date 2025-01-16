
export interface Question {
    id: string;
    text: string;
    test_id: string;
    max_points: number;
    type: QuestionType;
    position: number;
}

export enum QuestionType {
    SingleChoice = 1,
    MultipleChoice = 2,
    Text = 3,
    Number = 4,
}