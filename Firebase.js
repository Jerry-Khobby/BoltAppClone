// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvHPCTkKxsARhi0vbw7Xm9CMWDhlU9H90",
  authDomain: "boltappclone-c9c23.firebaseapp.com",
  projectId: "boltappclone-c9c23",
  storageBucket: "boltappclone-c9c23.appspot.com",
  messagingSenderId: "174712401789",
  appId: "1:174712401789:web:1c25d3ca3e99cfcfa56614",
  measurementId: "G-XKE034KHM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);