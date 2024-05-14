// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVw4iTeN4637gS-CWUoj0etNqkm2cF9ZM",
  authDomain: "e-learning-65ca9.firebaseapp.com",
  projectId: "e-learning-65ca9",
  storageBucket: "e-learning-65ca9.appspot.com",
  messagingSenderId: "225646505751",
  appId: "1:225646505751:web:51ae6a5fe24d064d871152",
  measurementId: "G-9VLC90L7N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB,'users');
export const meetingRef = collection(firebaseDB,'meetings');