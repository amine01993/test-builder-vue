import { QuestionType, type Question } from "@/models/Question";

export function validateEmail(email: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function formatDate(date: Date, locale: string): string {
    const currentDate = new Date();
    return new Intl.DateTimeFormat(locale + '-CA', {
        day: 'numeric',
        month: 'short',
        year: (currentDate.getFullYear() === date.getFullYear() ? undefined : 'numeric'),
        hour: 'numeric',
        minute: 'numeric',
    }).format(date);
}

export function formatInterval(startDate: Date, endDate: Date): string {
    const diffInS = Math.floor((<any>endDate - <any>startDate) / 1000);
    return formatTime(diffInS);
}

export function formatTime(seconds: number) {
    let val = seconds;
    const hours = Math.floor(val / 60 / 60);
    val = val - hours * 60 * 60;
    const minutes = Math.floor(val / 60);
    val = val - minutes * 60;
    const _seconds = val;

    let str = [];
    if(hours) str.push(hours + 'h');
    if(minutes) str.push(minutes + 'min');
    if(_seconds) str.push(_seconds + 's');
    return str.join(' ');
}

export function getQuestionType(question: Question) {
    switch(question?.type) {
        case QuestionType.MultipleChoice:
            return 'Multiple Choice';
        case QuestionType.Number:
            return 'Number';
        case QuestionType.SingleChoice:
            return 'Single Choice';
        default:
            return 'Text';
    }
};

export async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            resolve();
            clearTimeout(timeout);
        }, ms);
    })
}
