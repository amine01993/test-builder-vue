import { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } from "firebase-functions/firestore";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

import {db} from './init';
import { logger } from "firebase-functions";

export const _testCreate = onDocumentCreated('tests/{testId}', async event => {
    return db.doc('tests/' + event.params.testId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
        questionCount: 0,
    });
});

export const _testUpdate = onDocumentUpdated('tests/{testId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const testBefore = event.data?.before.data();
    const testAfter = event.data?.after.data();

    // To avoid an infinite loop
    if(testBefore.name === testAfter.name &&
        testBefore.description === testAfter.description &&
        testBefore.time_limit === testAfter.time_limit
    ) {
        return;
    }

    return db.doc('tests/' + event.params.testId).update({
        updated_at: Timestamp.now(),
    });
});

export const _questionCreate = onDocumentCreated('tests/{testId}/questions/{questionId}', async event => {
    const question = event.data?.data();
    if(!question) return;

    const promises = [];

    const questionUpdate = db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
        choiceCount: 0,
    });
    promises.push(questionUpdate);

    const testUpdate = db.doc('tests/' + event.params.testId).update({
        questionCount: FieldValue.increment(1),
    });
    promises.push(testUpdate);

    return Promise.all(promises);
});

export const _questionUpdate = onDocumentUpdated('tests/{testId}/questions/{questionId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const questionBefore = event.data?.before.data();
    const questionAfter = event.data?.after.data();

    if(questionBefore.text === questionAfter.text &&
        questionBefore.type === questionAfter.type &&
        questionBefore.max_points === questionAfter.max_points &&
        questionBefore.position === questionAfter.position
    ) {
        return;
    }

    const promises = [];

    if(questionBefore.max_points !== questionAfter.max_points) {
        const testUpdate = db.doc('tests/' + event.params.testId).update({
            max_points: FieldValue.increment(questionAfter.max_points - questionBefore.max_points),
        });
        promises.push(testUpdate);
    }
    else {
        promises.push(db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update({
            updated_at: Timestamp.now(),
        }));
    }
    
    if(questionBefore.type !== questionAfter.type) {
        const choiceSnaps = await db.collection('tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices').get();
        choiceSnaps.docs.forEach(csnap => {
            promises.push(csnap.ref.update({
                question: {
                    type: questionAfter.type,
                },
            }));
        });
    }

    return Promise.all(promises);
});

export const _questionDelete = onDocumentDeleted('tests/{testId}/questions/{questionId}', async event => {
    const question = event.data?.data();
    if(!question) return;

    try {
        return db.doc('tests/' + event.params.testId).update({
            questionCount: FieldValue.increment(-1),
            max_points: FieldValue.increment(-question.max_points),
        });
    }
    catch(error) {
        logger.error('Test update error:', error);
        return;
    }
});

export const _choiceCreate = onDocumentCreated('tests/{testId}/questions/{questionId}/choices/{choiceId}', async event => {
    const promises = [];

    const choice = event.data?.data();
    if(!choice) return;

    const choiceUpdate = db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices/' + event.params.choiceId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    });
    promises.push(choiceUpdate);

    const qData: any = {
        choiceCount: FieldValue.increment(1),
    };

    if(choice.points > 0) {
        if(choice.question.type === 2) {
            qData.max_points = FieldValue.increment(choice.points);
        }
        else {
            const qSnap = await db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).get();
            if(qSnap.exists) {
                const question: any = qSnap.data();    
                qData.max_points = Math.max(question.max_points, choice.points);
            }
        }
    }
    const questionUpdate = db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update(qData);
    promises.push(questionUpdate);

    return Promise.all(promises);
});

export const _choiceUpdate = onDocumentUpdated('tests/{testId}/questions/{questionId}/choices/{choiceId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const choiceBefore = event.data?.before.data();
    const choiceAfter = event.data?.after.data();

    if(choiceBefore.text === choiceAfter.text &&
        choiceBefore.is_correct === choiceAfter.is_correct &&
        choiceBefore.points === choiceAfter.points &&
        choiceBefore.position === choiceAfter.position
    ) {
        return;
    }

    const promises = [];

    if(choiceBefore.points !== choiceAfter.points) {
        const qData: any = {};

        if(choiceAfter.question.type === 2) {
            if(choiceAfter.points > 0) {
                let incrementBy = choiceAfter.points;
                if(choiceBefore.points > 0) incrementBy -= choiceBefore.points;
                qData.max_points = FieldValue.increment(incrementBy);
            }
            else if (choiceBefore.points > 0) {
                qData.max_points = FieldValue.increment(-choiceBefore.points);
            }
        }
        else {
            let maxPoints = 0;
            const choiceSnaps = await db.collection('/tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices')
                .where('points', '>', 0).get();
            choiceSnaps.docs.forEach((csnap) => {
                maxPoints = Math.max(maxPoints, csnap.data().points);
            });
            qData.max_points = maxPoints;
        }

        const questionUpdate = db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update(qData);
        promises.push(questionUpdate);
    }

    const choiceUpdate = db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices/' + event.params.choiceId).update({
        updated_at: Timestamp.now(),
    });
    promises.push(choiceUpdate);

    return Promise.all(promises);
});

export const _choiceDelete = onDocumentDeleted('tests/{testId}/questions/{questionId}/choices/{choiceId}', async event => {
    const choice = event.data?.data();
    if(!choice) return;

    const qData: any = {
        choiceCount: FieldValue.increment(-1),
    };

    if(choice.points > 0) {
        if(choice.question.type === 2) {
            qData.max_points = FieldValue.increment(-choice.points);
        }
        else {
            let maxPoints = 0;
            const choiceSnaps = await db.collection('/tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices')
                .where('points', '>', 0).get();
            choiceSnaps.docs.forEach((csnap) => {
                maxPoints = Math.max(maxPoints, csnap.data().points);
            });
            qData.max_points = maxPoints;
        }
    }

    try {
        return db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update(qData);
    }
    catch(error) {
        logger.error('Question update error:', error);
        return;
    }
});

export const _userTestCreate = onDocumentCreated('user_tests/{userTestId}', async event => {
    return db.doc('user_tests/' + event.params.userTestId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    });
});

export const _userTestUpdate = onDocumentUpdated('user_tests/{userTestId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const userTestBefore = event.data?.before.data();
    const userTestAfter = event.data?.after.data();

    // To avoid an infinite loop
    if(userTestBefore.result.score === userTestAfter.result.score) return;

    return db.doc('user_tests/' + event.params.userTestId).update({
        updated_at: Timestamp.now(),
    });
});

