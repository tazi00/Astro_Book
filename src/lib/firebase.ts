import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config from the screenshot
const firebaseConfig = {
  apiKey: "AIzaSyCGMKFt2EdUViasxbSCLjA68uzZw0dK80s",
  authDomain: "astrobook-4a069.firebaseapp.com",
  projectId: "astrobook-4a069",
  storageBucket: "astrobook-4a069.firebasestorage.app",
  messagingSenderId: "863538894717",
  appId: "1:863538894717:web:56e0274ea0487262b79e14",
  measurementId: "G-540WDEGH0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
