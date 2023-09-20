import { initializeApp } from 'firebase/app';
import { 
    REACT_APP_FIREBASE_APIKEY,
    REACT_APP_FIREBASE_AUTHDOMAIN,
    REACT_APP_FIREBASE_DATABASEURL,
    REACT_APP_FIREBASE_PROJECTID,
    REACT_APP_FIREBASE_STORAGEBUCKET,
    REACT_APP_FIREBASE_MESSAGINGSENDERI,
    REACT_APP_FIREBASE_APPID
} from '@env'

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASEURL,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERI,
    appId: REACT_APP_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
