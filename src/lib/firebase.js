// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgERhPgNI7B3_U-42HwIqVLrMySr-LogA",
  authDomain: "crim-4602f.firebaseapp.com",
  projectId: "crim-4602f",
  storageBucket: "crim-4602f.appspot.com",
  messagingSenderId: "697979375657",
  appId: "1:697979375657:web:5ee618fd1ca2f83b5bcc38",
  measurementId: "G-5V1B0LTW17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);