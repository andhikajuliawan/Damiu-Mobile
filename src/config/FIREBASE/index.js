import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';
import { API_KEY } from '../../apikey';

// Replace this with requirement firebase realtime database
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: '',
  databaseURL:
    '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

export default database;
