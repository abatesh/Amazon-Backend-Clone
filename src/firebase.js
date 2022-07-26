// import firebase from 'firebase';
 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnBBnOZvLwWsjTulR3_I-bUTJWi3TkViU",
  authDomain: "backend-a8d06.firebaseapp.com",
  projectId: "backend-a8d06",
  storageBucket: "backend-a8d06.appspot.com",
  messagingSenderId: "759468613785",
  appId: "1:759468613785:web:e73fbffd3fdb5b57465808",
  measurementId: "G-LNPEYPR6XV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };