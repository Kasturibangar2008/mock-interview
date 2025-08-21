
import { initializeApp,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBvV26dr0UBwy08A_MZQbMD8i5fLGZBOjE",
  authDomain: "prepwise-d4039.firebaseapp.com",
  projectId: "prepwise-d4039",
  storageBucket: "prepwise-d4039.firebasestorage.app",
  messagingSenderId: "516529583616",
  appId: "1:516529583616:web:95737a0c9b9e136fcc4ae5",
  measurementId: "G-W2WVT4N7ZV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth= getAuth(app);
export const db= getFirestore(app)