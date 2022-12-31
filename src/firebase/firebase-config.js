import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5PN9cC9eFaJE4ciiLtz823tI4iPJ8zaA",
  authDomain: "sticky-notes-app-3ca5b.firebaseapp.com",
  projectId: "sticky-notes-app-3ca5b",
  storageBucket: "sticky-notes-app-3ca5b.appspot.com",
  messagingSenderId: "164357657519",
  appId: "1:164357657519:web:7625f6d83e0b41f492d55a",
  measurementId: "G-ZRLR7MDW4M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
