import { computed } from "vue";
import type { UserTest } from "@/models/UserTest";

export function useUserTestItem(userTest?: UserTest) {

    const currentDate = new Date();

    const startedAt = computed(() => {
        const startDate = userTest!.started_at.toDate();
        return new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === startDate.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(startDate);
    });
    
    const lastedFor = computed(() => {
        const startDate: any = userTest!.started_at.toDate();
        const endDate: any = userTest!.ended_in?.toDate();
        if(endDate) {
            const diffInS = Math.floor((endDate - startDate) / 1000);
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
        return '';
    });
    
    const updatedAt = computed(() => {
        const updated_at = userTest!.updated_at!.toDate();
            return new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(updated_at);
    });

    return {
        startedAt, lastedFor, updatedAt,
    }
}