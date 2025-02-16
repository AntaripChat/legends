
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVsCG1Mc71n08HOYzb-aTgCaLkAVr1Zcc",
  authDomain: "first-c9457.firebaseapp.com",
  databaseURL: "https://first-c9457-default-rtdb.firebaseio.com",
  projectId: "first-c9457",
  storageBucket: "first-c9457.firebasestorage.app",
  messagingSenderId: "29846654755",
  appId: "1:29846654755:web:0f28dfb012bac474d20696",
  measurementId: "G-6KQD6SPXLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };