import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { formatDate, formatInterval } from "@/helpers/utils";
import type { UserTest } from "@/models/UserTest";

export function useUserTestItem(userTest?: UserTest) {

    const {locale} = useI18n();

    const startedAt = computed(() => {
        if(!userTest) return '';
        const startDate = userTest.started_at.toDate();
        return formatDate(startDate, locale.value);
    });
    
    const lastedFor = computed(() => {
        if(!userTest?.ended_in) return '';
        const startDate = userTest.started_at.toDate();
        const endDate = userTest.ended_in.toDate();
        return formatInterval(startDate, endDate);
    });
    
    const updatedAt = computed(() => {
        if(!userTest) return '';
        const updated_at = userTest.updated_at!.toDate();
        return formatDate(updated_at, locale.value);
    });

    return {
        startedAt, lastedFor, updatedAt,
    }
}