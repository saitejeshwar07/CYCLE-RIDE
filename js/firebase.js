// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const ADMIN_EMAILS = ["pawarsaitejeshwar07@gmail.com"];

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCnRWdYGH6qewlYQajLxzOs4h7yoCC41No",
  authDomain: "cycle-ride-f4f37.firebaseapp.com",
  projectId: "cycle-ride-f4f37",
  storageBucket: "cycle-ride-f4f37.firebasestorage.app",
  messagingSenderId: "1086377251738",
  appId: "1:1086377251738:web:c597606bba5f163f08a023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore exports
export const auth = getAuth(app);
export const db = getFirestore(app);
