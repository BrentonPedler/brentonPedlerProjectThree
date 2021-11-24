// FIREBASE.js

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCUWcC2wCaYMOrKb8XGsy31eS0RnpdvQaM",
    authDomain: "brentonpedlerprojectthree.firebaseapp.com",
    projectId: "brentonpedlerprojectthree",
    storageBucket: "brentonpedlerprojectthree.appspot.com",
    messagingSenderId: "475276929119",
    appId: "1:475276929119:web:e1ebf0a283d406139a53ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase
export default firebase;
