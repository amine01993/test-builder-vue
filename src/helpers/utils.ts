
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
    let val = diffInS;
    const hours = Math.floor(val / 60 / 60);
    val = val - hours * 60 * 60;
    const minutes = Math.floor(val / 60);
    val = val - minutes * 60;
    const seconds = val;

    let str = [];
    if(hours) str.push(hours + 'h');
    if(minutes) str.push(minutes + 'min');
    if(seconds) str.push(seconds + 's');
    return str.join(' ');
}
