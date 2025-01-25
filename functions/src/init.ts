
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// const admin = require('firebase-admin');

initializeApp();

export const db = getFirestore();
export const auth = getAuth();