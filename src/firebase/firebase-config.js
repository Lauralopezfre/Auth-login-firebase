// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5LvLF7SAC5nRwZ0zx2A0Umrps8kr2POw",
  authDomain: "react-app-journal-21b88.firebaseapp.com",
  projectId: "react-app-journal-21b88",
  storageBucket: "react-app-journal-21b88.appspot.com",
  messagingSenderId: "38206519387",
  appId: "1:38206519387:web:dd7126303d57eedbd3a77e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}