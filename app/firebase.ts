// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvfO7h5mi2v2hiPQr5__fyWCckQwsmhxE',
  authDomain: 'tinkoffbank-d928c.firebaseapp.com',
  projectId: 'tinkoffbank-d928c',
  storageBucket: 'tinkoffbank-d928c.appspot.com',
  messagingSenderId: '592458919251',
  appId: '1:592458919251:web:47657bb0a14f2839b9c5a6',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
