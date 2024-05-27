// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCFWlgmWUmHsHlMeKE4EbmdxZUFcVjND4",
  authDomain: "netflix-gpt-aa86c.firebaseapp.com",
  projectId: "netflix-gpt-aa86c",
  storageBucket: "netflix-gpt-aa86c.appspot.com",
  messagingSenderId: "324890922923",
  appId: "1:324890922923:web:00bab7da70207bb1878cee",
  measurementId: "G-3TP7TH3V59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
