/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import {db} from './init';
import {_choiceCreate, _choiceUpdate, _questionCreate, _questionUpdate, _testCreate, _testUpdate} from './triggers';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//     // console.log(request.);
//     logger.info("Hello logs!", {structuredData: true});
//     response.send("Hello from Firebase!");
// });

export const getTest = onRequest(async (request, response) => {
    console.log(request.query);
    const snap = await db.doc('tests/' + request.query.testId).get();

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

    response.json(test);
});

async function getChoices(test_id: string, question_id: string) {
    const snaps = await db.collection('tests/' + test_id + '/questions/' + question_id + '/choices').orderBy('position').get();
    return snaps.docs.map(snap => {
        const choice: any = snap.data();
        choice.id = snap.id;
        choice.is_correct = undefined;
        choice.points = undefined;
        choice.user_id = undefined;
        choice.created_at = undefined;
        choice.updated_at = undefined;   
        return choice;
    });
}

export const testCreate = _testCreate;
export const testUpdate = _testUpdate;
export const questionCreate = _questionCreate;
export const questionUpdate = _questionUpdate;
export const choiceCreate = _choiceCreate;
export const choiceUpdate = _choiceUpdate;