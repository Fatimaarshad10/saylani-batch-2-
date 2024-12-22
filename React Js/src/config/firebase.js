import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrcoU-UyC-ae-FQiGUr-xaMjykAHMNV4k",
  authDomain: "bookstore-1e56e.firebaseapp.com",
  projectId: "bookstore-1e56e",
  storageBucket: "bookstore-1e56e.appspot.com",
  messagingSenderId: "447232552074",
  appId: "1:447232552074:web:1bd3a41e558735fcff1173",
  measurementId: "G-BK5LB95D2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

export const auth = getAuth(app)
export const loginGoogle = new GoogleAuthProvider()

