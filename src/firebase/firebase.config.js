// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDklOKXBoHa6V1KELG-jE435Qmw-B8aap4",
  authDomain: "focusapp-6eec4.firebaseapp.com",
  projectId: "focusapp-6eec4",
  storageBucket: "focusapp-6eec4.appspot.com",
  messagingSenderId: "415038874731",
  appId: "1:415038874731:web:ca0e8d833bc60c0ef47d2e",
  measurementId: "G-Y5L7M1C2QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);