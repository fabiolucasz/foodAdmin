// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsj-o5unrfF143Gvd7vMeTG8z_23SPWi4",
  authDomain: "login-expo-ef29e.firebaseapp.com",
  projectId: "login-expo-ef29e",
  storageBucket: "login-expo-ef29e.firebasestorage.app",
  messagingSenderId: "783923279832",
  appId: "1:783923279832:web:781668cfbc5202ea9864ad",
  measurementId: "G-HC34S34GZX"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const analytics = getAnalytics(firebase);