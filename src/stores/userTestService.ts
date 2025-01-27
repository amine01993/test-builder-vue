import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import { updateEmail, updateProfile } from "firebase/auth";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { useFetchStore } from "./fetch";
import { useAuthenticationStore } from "./auth";
import { useFirestoreStore } from "./firestore";
import type { Test } from "@/models/Test";
import type { UserTest } from "@/models/UserTest";

export const useUserTestServiceStore = defineStore('userTestService', () => {

    let userTestId: string|undefined;
    let testReport: Ref<UserTest|undefined> = ref();
    let test: Ref<Test|undefined> = ref();
    let data: Map<string, string[]> = new Map;
    const requestUserInfo: Ref<boolean> = ref(true);
    const time_limit: Ref<number> = ref(180);
    const displayName: Ref<string> = ref('');
    const email: Ref<string> = ref('');

    async function updateUserInfo() {
        const {user} = useAuthenticationStore();

        if(user.value) {
            await Promise.all([
                updateProfile(user.value, {
                    displayName: displayName.value,
                }),
                updateEmail(user.value, email.value),
            ]);
        }
    }

    async function initTest(test_id: string) {
        const {get} = useFetchStore();

        const testData = await get('/test', {testId: test_id, displayName: displayName.value, email: email.value});
        test.value = <Test|undefined>testData.test;
        userTestId = testData.userTestId;

        if(test.value) {
            time_limit.value = test.value.time_limit;

            if(time_limit.value > 0) {
                let interval: number|undefined = setInterval(() => {
                    time_limit.value--;
                    if(time_limit.value === 0) {
                        clearInterval(interval);
                        interval = undefined;
                    }
                }, 1000);
                return interval;
            }
        }
    }

    async function sendReport(formData: FormData) {
        const {post} = useFetchStore();
        data = new Map;

        if(userTestId) {
            data.set('user_test_id', [userTestId]);
        }

        if(test.value?.id) {
            data.set('test_id', [test.value.id]);
        }

        for(const [qId, val] of formData) {
            if(val.toString() === '') continue;
            if(data.has(qId)) data.get(qId)?.push(val.toString());
            else data.set(qId, [val.toString()]);
        }

        const report = Object.fromEntries(data);

        const testReport = await post('/finish-test', report);
        testReport.started_at = Timestamp.fromMillis(testReport.started_at._seconds * 1000);
        testReport.ended_in = Timestamp.fromMillis(testReport.ended_in._seconds * 1000);
        return testReport;
    }

    function setTestReport(userTest: UserTest) {
        testReport.value = userTest;
    }

    async function initTestReport(user_test_id: string) {
        const {db} = useFirestoreStore();
        if(!testReport.value) {
            const snap = await getDoc(doc(db, 'user_tests', user_test_id));
            if(snap.exists()) {
                testReport.value = <UserTest>snap.data();
                testReport.value.id = snap.id;
            }
        }
    }

    return {
        requestUserInfo: computed(() => requestUserInfo),
        displayName: computed(() => displayName),
        email: computed(() => email),
        test: computed(() => test),
        time_limit: computed(() => time_limit),
        testReport: computed(() => testReport),
        updateUserInfo,
        initTest,
        sendReport,
        setTestReport,
        initTestReport,
    }
});