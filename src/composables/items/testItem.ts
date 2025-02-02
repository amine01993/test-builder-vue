import { computed, onMounted, onUnmounted, ref, useTemplateRef, type ShallowRef } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useMainStore } from "@/stores/main";
import { useModalStore } from "@/stores/modal";
import { useTestServiceStore } from "@/stores/testService";
import type { Test } from "@/models/Test";

export function useTestItem(test?: Test) {
    const router = useRouter();
    const {locale, t} = useI18n();
    const {showMessage, startLoading, endLoading} = useMainStore();
    const {deleteTest} = useTestServiceStore();
    const {confirm: confirmDeletion} = useModalStore();
    const testDescriptionEl: Readonly<ShallowRef<HTMLDivElement | null>> = useTemplateRef('test-description');
    const showMore = ref(false);
    const currentDate = new Date();

    const description = computed(() => {
        if(showMore.value) {
            return test!.description.replace(/\n/g, "<br />");
        }
        else {
            return test!.description.replace(/\n/g, "");
        }
    });
    const updatedAt = computed(() => {
        const updated_at = test!.updated_at!.toDate();
            return new Intl.DateTimeFormat(locale.value + '-CA', {
            day: 'numeric',
            month: 'short',
            year: (currentDate.getFullYear() === updated_at.getFullYear() ? undefined : 'numeric'),
            hour: 'numeric',
            minute: 'numeric',
        }).format(updated_at);
    });

    onMounted(() => {
        if(testDescriptionEl.value) {
            testDescriptionEl.value.addEventListener('click', showMoreDescription);
        }
    });

    onUnmounted(() => {
        if(testDescriptionEl.value) {
            testDescriptionEl.value.removeEventListener('click', showMoreDescription);
        }
    });

    function showMoreDescription() {
        showMore.value = true;
    }

    function confirmTestdeletion() {
        if(test) {
            confirmDeletion(
                t('Are you sure you want to delete this test: "{name}"?', {name: test.name}),
                t('Delete'), deleteDTest
            );
        }
    }

    async function deleteDTest() {
        if(test?.id) {
            try {
                startLoading();
                await deleteTest(test.id);
                showMessage('success', t('Test deleted with success.'));
            }
            catch(error) {
                showMessage('failure', t('Test can not be deleted.'));
            }
            finally {
                endLoading();
            }
        }
    }

    function copyTestLink() {
        const routeLocation = router.resolve({name: 'test-portal', params: {test_id: test!.id}});
        const testLink = location.origin + routeLocation.fullPath;
        navigator.clipboard.writeText(testLink)
        .then(() => {
            showMessage('success', t('Test link copied!'));
        })
        .catch(() => {
            showMessage('failure', t('Sorry, Test link couldn\'t be copied!'));
        });
    }

    return {
        showMore, description, updatedAt,
        confirmTestdeletion, copyTestLink,
    }
}