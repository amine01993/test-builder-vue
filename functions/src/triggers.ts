import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/firestore";
import { Timestamp } from "firebase-admin/firestore";

import {db} from './init';

export const _testCreate = onDocumentCreated('tests/{testId}', async event => {
    return db.doc('tests/' + event.params.testId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    });
});

export const _testUpdate = onDocumentUpdated('tests/{testId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const testBefore = event.data?.before.data();
    const testAfter = event.data?.after.data();

    // To avoid an infinite loop
    if(testAfter.name === testBefore.name &&
        testAfter.description === testBefore.description &&
        testAfter.max_points === testBefore.max_points &&
        testAfter.time_limit === testBefore.time_limit
    ) {
        return;
    }

    return db.doc('tests/' + event.params.testId).update({
        updated_at: Timestamp.now(),
    });
});

export const _questionCreate = onDocumentCreated('tests/{testId}/questions/{questionId}', async event => {
    return db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    });
});

export const _questionUpdate = onDocumentUpdated('tests/{testId}/questions/{questionId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const questionBefore = event.data?.before.data();
    const questionAfter = event.data?.after.data();

    if(questionAfter.text === questionBefore.text &&
        questionAfter.type === questionBefore.type &&
        questionAfter.max_points === questionBefore.max_points &&
        questionAfter.position === questionBefore.position
    ) {
        return;
    }

    return db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId).update({
        updated_at: Timestamp.now(),
    });
});

export const _choiceCreate = onDocumentCreated('tests/{testId}/questions/{questionId}/choices/{choiceId}', async event => {
    return db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices/' + event.params.choiceId).update({
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    });
});

export const _choiceUpdate = onDocumentUpdated('tests/{testId}/questions/{questionId}/choices/{choiceId}', async event => {
    if(!event.data?.after.exists || !event.data?.before.exists) {
        return;
    }

    const choiceBefore = event.data?.before.data();
    const choiceAfter = event.data?.after.data();

    if(choiceAfter.text === choiceBefore.text &&
        choiceAfter.is_correct === choiceBefore.is_correct &&
        choiceAfter.points === choiceBefore.points &&
        choiceAfter.position === choiceBefore.position
    ) {
        return;
    }

    return db.doc('tests/' + event.params.testId + '/questions/' + event.params.questionId + '/choices/' + event.params.choiceId).update({
        updated_at: Timestamp.now(),
    });
});

