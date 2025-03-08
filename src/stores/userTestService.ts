import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import { updateProfile, verifyBeforeUpdateEmail } from "firebase/auth";
import { collection, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter, Timestamp, where } from "firebase/firestore";
import { useFetchStore } from "./fetch";
import { useFirestoreStore } from "./firestore";
import { useAuthenticationStore } from "./auth";
import type { Test } from "@/models/Test";
import type { UserTest } from "@/models/UserTest";

export const useUserTestServiceStore = defineStore('userTestService', () => {

    const {db} = useFirestoreStore();
    const {user} = useAuthenticationStore();

    let userTestId: string|undefined;
    const testReport: Ref<UserTest|undefined> = ref();
    const test: Ref<Test|undefined> = ref();
    let data: Map<string, string[]> = new Map;
    const requestUserInfo: Ref<boolean> = ref(true);
    const time_limit: Ref<number> = ref(180);
    const displayName: Ref<string> = ref('');
    const email: Ref<string> = ref('');

    const userId: Ref<string|undefined> = ref();
    const userTestCount: Ref<number|undefined> = ref();
    const userTests: Ref<UserTest[]|undefined> = ref();
    let lastDoc: any = null;
    const userTestsPerPage = 25;

    async function updateDisplayName() {
        if(user.value) {
            await updateProfile(user.value, {
                displayName: displayName.value,
            });
        }
    }

    async function updateUserInfo() {
        if(user.value) {
            await Promise.all([
                updateProfile(user.value, {
                    displayName: displayName.value,
                }),
                verifyBeforeUpdateEmail(user.value, email.value),
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
                let interval: ReturnType<typeof setInterval>|undefined = setInterval(() => {
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

    async function loadUserTestCount() {
        if(userId.value === user.value?.uid && userTestCount.value !== undefined) return;

        userId.value = user.value?.uid;

        const userTestsRef = collection(db, 'user_tests');
        const countQuery = query(userTestsRef, where('test.user_id', '==', user.value?.uid));

        const countSnap = await getCountFromServer(countQuery);
        userTestCount.value = countSnap.data().count;
    }

    async function loadUserTests() {
        if(userId.value === user.value?.uid && userTests.value) return;

        userId.value = user.value?.uid;

        const userTestsRef = collection(db, 'user_tests');

        const listQuery = query(userTestsRef, where('test.user_id', '==', user.value?.uid), orderBy('started_at', 'desc'), limit(userTestsPerPage));
        const snaps = await getDocs(listQuery);
        userTests.value = snaps.docs.map(snap => {
            const userTest = <UserTest>snap.data();
            userTest.id = snap.id;
            return userTest;
        });

        lastDoc = snaps.docs.length === 0 ? null : snaps.docs[snaps.docs.length - 1];
    }
    
    async function loadMoreUserTests() {
        if(!userTests.value || !lastDoc) return;

        const userTestsRef = collection(db, 'user_tests');

        const listQuery = query(userTestsRef, where('test.user_id', '==', userId.value), orderBy('started_at', 'desc'), startAfter(lastDoc), limit(userTestsPerPage))
        const snaps = await getDocs(listQuery);

        const newUserTests = snaps.docs.map(snap => {
            const userTest = <UserTest>snap.data();
            userTest.id = snap.id;
            return userTest;
        });

        lastDoc = snaps.docs.length === 0 ? null : snaps.docs[snaps.docs.length - 1];

        userTests.value = userTests.value.concat(newUserTests);
    }

    return {
        requestUserInfo: computed(() => requestUserInfo),
        displayName: computed(() => displayName),
        email: computed(() => email),
        test: computed(() => test),
        time_limit: computed(() => time_limit),
        testReport: computed(() => testReport),
        userTestCount: computed(() => userTestCount),
        userTests: computed(() => userTests),
        updateUserInfo,
        updateDisplayName,
        initTest,
        sendReport,
        setTestReport,
        initTestReport,
        loadUserTestCount,
        loadUserTests,
        loadMoreUserTests,
    }
});