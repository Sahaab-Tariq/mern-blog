// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7eeb4.firebaseapp.com",
  projectId: "mern-blog-7eeb4",
  storageBucket: "mern-blog-7eeb4.appspot.com",
  messagingSenderId: "567231902714",
  appId: "1:567231902714:web:822352dd460740a5da2a43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);