import * as admin from 'firebase-admin';
import * as config from './config.util';

admin.initializeApp({
    credential: admin.credential.cert(config.key),
    databaseURL: "https://mora-backend.firebaseio.com"
});

export const db = admin.firestore();


