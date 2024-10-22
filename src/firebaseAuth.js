/* This file sets up and initializes Firebase Authentication for the application:

- It imports necessary Firebase SDK functions for app initialization, authentication, and Firestore.
- It defines the Firebase configuration object with API keys and project details.
- The Firebase app is initialized using the provided configuration.
- It creates instances of Firebase Authentication (auth) and Firestore (db).
- Finally, it exports the 'auth' and 'db' objects, making them available for use in other parts of the application. */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDp6O9xskslUCSk8bqlHQLJz8HGFidUvwo",
    authDomain: "login-349f2.firebaseapp.com",
    projectId: "login-349f2",
    storageBucket: "login-349f2.appspot.com",
    messagingSenderId: "1062053335811",
    appId: "1:1062053335811:web:5a8c40851e8d43d6c98f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db}; // makes certain variables and functions available for use in other JavaScript files