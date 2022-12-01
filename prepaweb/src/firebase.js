import { firebase, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRqVug3oTOMrhieyQfuPxgOdILWo-9jw",
  authDomain: "prepanet-cyberhusk.firebaseapp.com",
  databaseURL: "https://prepanet-cyberhusk-default-rtdb.firebaseio.com",
  projectId: "prepanet-cyberhusk",
  storageBucket: "prepanet-cyberhusk.appspot.com",
  messagingSenderId: "641913532424",
  appId: "1:641913532424:web:7ce21678aeb559d59aa1bd",
  measurementId: "G-87CK65Q9NP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
// export const fireDb = firebase.initializeApp(firebaseConfig);

export const auth = getAuth()