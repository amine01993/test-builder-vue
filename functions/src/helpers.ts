
import {db} from './init';

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
