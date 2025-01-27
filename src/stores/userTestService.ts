import { defineStore } from "pinia";
import { useFetchStore } from "./fetch";

export const useUserTestServiceStore = defineStore('userTestService', () => {
    let userTestId: string|undefined;
    let testId: string|undefined;
    let data: Map<string, string[]> = new Map;

    function setUserTestId(_userTestId: string, _testId: string) {
        userTestId = _userTestId;
        testId = _testId;
        console.log('userTestId', userTestId, testId);
    }

    async function sendReport(formData: FormData) {
        const {post} = useFetchStore();
        data = new Map;

        if(userTestId) {
            data.set('user_test_id', [userTestId]);
        }

        if(testId) {
            data.set('test_id', [testId]);
        }

        for(const [qId, val] of formData) {
            if(data.has(qId)) data.get(qId)?.push(val.toString());
            else data.set(qId, [val.toString()]);
        }

        const report = Object.fromEntries(data);
        console.log('report', report);

        const result = await post('/finish-test', report);
        return result;
    }

    return {
        setUserTestId,
        sendReport,
    }
});