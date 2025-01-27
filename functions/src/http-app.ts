import * as logger from "firebase-functions/logger";
import { getCredentialsMiddleware } from "./middleware/auth";
import { finishTest, getTest, startTest } from "./helpers";

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

        res.status(200).json({
            test, userTestId
        });
    }
    catch(error) {
        logger.error('Error /test', error);
        res.status(500).json({error: 'Error loading test data.'});
    }
});



