import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD6KS4LRqFXELLciwlK8DvcEjp5mRaMvLA",
    authDomain: "virus-chat.firebaseapp.com",
    projectId: "virus-chat",
    storageBucket: "virus-chat.appspot.com",
    messagingSenderId: "717084087657",
    appId: "1:717084087657:web:d95fc801524f76c2bb59f8"
  }).auth();