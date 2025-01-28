/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import {_choiceCreate, _choiceDelete, _choiceUpdate, _questionCreate, _questionDelete, _questionUpdate, _testCreate, _testUpdate, _userTestCreate, _userTestUpdate} from './triggers';
import { httpApp } from "./http-app";


export const api = onRequest(httpApp);

export const testCreate = _testCreate;
export const testUpdate = _testUpdate;
export const questionCreate = _questionCreate;
export const questionUpdate = _questionUpdate;
export const questionDelete = _questionDelete;
export const choiceCreate = _choiceCreate;
export const choiceUpdate = _choiceUpdate;
export const choiceDelete = _choiceDelete;
export const userTestCreate = _userTestCreate;
export const userTestUpdate = _userTestUpdate;
