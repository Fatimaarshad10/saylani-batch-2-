import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6HfAxLV7NCcOMj6GLUIWC6nBaOGUgASk",
  authDomain: "firstproject01-46eb9.firebaseapp.com",
  projectId: "firstproject01-46eb9",
  storageBucket: "firstproject01-46eb9.appspot.com",
  messagingSenderId: "101637677268",
  appId: "1:101637677268:web:35c44e8293cc86a1965b41",
  measurementId: "G-JMC26H8XPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const loginGoogle = new GoogleAuthProvider()

