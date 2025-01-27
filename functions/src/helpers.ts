
import { Timestamp } from 'firebase-admin/firestore';
import {db} from './init';

export async function getTest(test_id: string) {

    const snap = await db.doc('tests/' + test_id).get();

    let test: any = null;
    if(snap.exists) {
        test = snap.data();
        test.id = snap.id;
        test.user_id = undefined;
        test.created_at = undefined;
        test.updated_at = undefined;
        test.questions = [];

        const choicesList = await db.collection('tests/' + test.id + '/questions').orderBy('position').get()
        .then(snapshots => {
            const promises: Promise<any[]>[] = [];
            snapshots.forEach(snap => {
                if(snap.exists) {
                    const question: any = snap.data();
                    question.id = snap.id;
                    question.user_id = undefined;
                    question.created_at = undefined;
                    question.updated_at = undefined;   
                    test.questions.push(question);  
                    
                    promises.push(getChoices(test.id, snap.id));
                }
            });
            return Promise.all(promises);
        })

        choicesList.forEach((choices, index) => {
            test.questions[index].choices = choices;
        });
    }

    return test;
}

async function getChoices(test_id: string, question_id: string, forTest: boolean = true) {
    const snaps = await db.collection('tests/' + test_id + '/questions/' + question_id + '/choices').orderBy('position').get();
    return snaps.docs.map(snap => {
        const choice: any = snap.data();
        choice.id = snap.id;

        if(forTest) {
            choice.is_correct = undefined;
            choice.points = undefined;
            choice.user_id = undefined;
            choice.created_at = undefined;
            choice.updated_at = undefined;   
        }
        return choice;
    });
}

export async function startTest(user_id: string, query: any, test: any) {
    const testRef = await db.collection('user_tests').add({
        user_id,
        user: {
            displayName: query.displayName,
            email: query.email,
        },
        test_id: test.id,
        test: {
            name: test.name,
            max_points: test.max_points,
            questionCount: test.questionCount,
        },    
        started_at: Timestamp.now(),
    });
    return testRef.id;
}

export async function finishTest(params: any) {
    const user_test_id = params.user_test_id[0];
    const test_id = params.test_id[0];
    delete params.user_test_id;
    delete params.test_id;

    const questionIds = Object.keys(params);
    const promises = [];
    const report = [];

    for(const qId of questionIds) {
        promises.push(getChoices(test_id, qId, false));
        report.push({
            question_id: qId,
            answers: params[qId],
        });
    }

    const choicesList = await Promise.all(promises);
    
    let totalScore = 0;
    for(const [index, qId] of Object.entries(questionIds)) {
        totalScore += getScore(params[qId], choicesList[Number(index)]);
    }

    await db.doc('user_tests/' + user_test_id).set({
        report,
        result: {
            score: totalScore,
        },
        ended_in: Timestamp.now(),
    }, {merge: true});

    const snap = await db.doc('user_tests/' + user_test_id).get();

    if(snap.exists) {
        const testReport: any = snap.data();
        testReport.id = snap.id;
        return testReport;
    }

    return null;
}

function getScore(answers: string[], choices: any) {
    let score = 0;
    for(const choice of choices) {
        const answerFound = answers.find(ans => ans.toLowerCase() == choice.text.toLowerCase());
        if(answerFound) score += choice.points;
    }
    return score;
}

export async function updateCounts() {
    console.log('update counts');

    const testsSnaps = await db.collection('tests').get();

    testsSnaps.docs.forEach(async (tsnap) => {
        // const test = tsnap.data();

        const questionsSnaps = await db.collection('tests/' + tsnap.id + '/questions').get();
        await tsnap.ref.update({questionCount: questionsSnaps.docs.length});

        questionsSnaps.docs.forEach(async qsnap => {

            const choiceSnap = await db.collection('tests/' + tsnap.id + '/questions/' + qsnap.id + '/choices').count().get();
            const choiceCount = choiceSnap.data().count;

            await qsnap.ref.update({choiceCount});
        });
    });
}
