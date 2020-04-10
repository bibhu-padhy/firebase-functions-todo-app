import * as firebase from 'firebase';
import { key } from './config.util';

firebase.initializeApp(key)

export const auth = firebase.auth();