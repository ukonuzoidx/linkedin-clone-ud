import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZRvUOICPHdWHkf7Apfivs2X2pFzhViNI",
  authDomain: "linkedin-clone-ud.firebaseapp.com",
  projectId: "linkedin-clone-ud",
  storageBucket: "linkedin-clone-ud.appspot.com",
  messagingSenderId: "408897984211",
  appId: "1:408897984211:web:6d9358d9e793c2ae456626",
  measurementId: "G-T5Q1JH4KZ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
