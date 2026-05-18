import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrn7FoUxvc1H77Cd9LY1yZe-QY1QqM6s0",
  authDomain: "drivexdealership.firebaseapp.com",
  projectId: "drivexdealership",
  storageBucket: "drivexdealership.firebasestorage.app",
  messagingSenderId: "974783056903",
  appId: "1:974783056903:web:72968bc482e5c519a42ea2",
  measurementId: "G-JFZ65SHE8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);