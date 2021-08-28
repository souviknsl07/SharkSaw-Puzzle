import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3sFgyO9foZycVYBCPJRN3_7YShH0h8dA",
  authDomain: "sharksaw-puzzle.firebaseapp.com",
  projectId: "sharksaw-puzzle",
  storageBucket: "sharksaw-puzzle.appspot.com",
  messagingSenderId: "147786734885",
  appId: "1:147786734885:web:6adc23a904d3ca92e50ecc",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore();
const auth = getAuth();

export { db, auth, provider, signInWithPopup };
