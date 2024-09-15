// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnNjHfEVfoSbfWrRz-JJHPJalwJN9Bb_s",
  authDomain: "boat-authentication.firebaseapp.com",
  projectId: "boat-authentication",
  storageBucket: "boat-authentication.appspot.com",
  messagingSenderId: "215120751890",
  appId: "1:215120751890:web:6112369fe0385703ccd7cb",
  measurementId: "G-TNR913SMEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();