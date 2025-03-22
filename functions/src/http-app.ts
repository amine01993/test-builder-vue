import * as logger from "firebase-functions/logger";
import { getCredentialsMiddleware } from "./middleware/auth";
import { finishTest, getTest, sendContactForm, startTest } from "./helpers";
import { auth } from "./init";

const express = require('express');

export const httpApp = express();

const bodyParser = require('body-parser');
const cors = require('cors');

httpApp.use(bodyParser.json());
httpApp.use(cors({origin:true}));
httpApp.use(getCredentialsMiddleware);

httpApp.post('/finish-test', async (req: any, res: any) => {
    logger.debug('finishing the test', req.body);

    try {
        if(!req['uid']) {
            res.status(403).json({error: 'Access Forbidden.'});
            return;
        }

        const testReport = await finishTest(req.body);

        res.status(200).json(testReport);
    }
    catch(error) {
        logger.error('Error /finish-test', error);
        res.status(500).json({error: 'Error finishing the test.'});
    }
});

httpApp.get('/test', async (req: any, res: any) => {
    logger.debug('retreiving the test', req.query);

    try {
        if(!req['uid']) {
            res.status(403).json({error: 'Access Forbidden.'});
            return;
        }

        const test = await getTest(req.query.testId);

        const userTestId = await startTest(req['uid'], req.query, test);

        test.user_id = undefined;

        res.status(200).json({
            test, userTestId
        });
    }
    catch(error) {
        logger.error('Error /test', error);
        res.status(500).json({error: 'Error loading test data.'});
    }
});

httpApp.post('/update-locale', async (req: any, res: any) => {
    logger.debug('updating locale', req.body);

    try {
        if(!req['uid']) {
            res.status(403).json({error: 'Access Forbidden.'});
            return;
        }

        const locale = req.body.locale === 'fr' ? 'fr' : 'en';

        await auth.setCustomUserClaims(req['uid'], {locale});

        res.status(200).json({ok: true});
    }
    catch(error) {
        logger.error('Error /update-locale', error);
        res.status(500).json({error: 'Error updating locale.'});
    }
});

httpApp.post('/contact-form', async (req: any, res: any) => {
    logger.debug('contact form body data', req.body);

    try {
        if(!req['uid']) {
            res.status(403).json({error: 'Access Forbidden.'});
            return;
        }

        const response = await sendContactForm(req.body);

        res.status(200).json({response});
    }
    catch(error) {
        logger.error('Error /contact-form', error);
        res.status(500).json({error: 'Error sending the contact form.'});
    }
});
