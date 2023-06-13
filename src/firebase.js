// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2LL_S1Y4ejDmY5OhxyVWP_Vt677sWNwo",
  authDomain: "todo-app-yt-1fd4e.firebaseapp.com",
  projectId: "todo-app-yt-1fd4e",
  storageBucket: "todo-app-yt-1fd4e.appspot.com",
  messagingSenderId: "43343567923",
  appId: "1:43343567923:web:c06407de2821b379045746",
  measurementId: "G-JVFMQZEKFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
