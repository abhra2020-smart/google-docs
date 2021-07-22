import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhTk-EoSz1Di6MLfiasxZjPaCrnPhvkwg",
    authDomain: "nextail-docs.firebaseapp.com",
    projectId: "nextail-docs",
    storageBucket: "nextail-docs.appspot.com",
    messagingSenderId: "201752918263",
    appId: "1:201752918263:web:063b08b1a7ca644aa97bf2"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export { db };