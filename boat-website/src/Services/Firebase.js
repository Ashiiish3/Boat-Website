// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOp2enSKB0uLcQ3N0gsTikPoHB3bmmOYY",
  authDomain: "authentication-93a93.firebaseapp.com",
  projectId: "authentication-93a93",
  storageBucket: "authentication-93a93.appspot.com",
  messagingSenderId: "575277150953",
  appId: "1:575277150953:web:cec5b7fb4b13c56d383678",
  measurementId: "G-ZZD2DZXD55"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();