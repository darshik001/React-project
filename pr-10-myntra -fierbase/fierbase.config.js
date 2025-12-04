// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkozfMBNXJqcdwBLF1JZFF6osWd6SykH4",
  authDomain: "myntra-clone-e7a9c.firebaseapp.com",
  projectId: "myntra-clone-e7a9c",
  storageBucket: "myntra-clone-e7a9c.firebasestorage.app",
  messagingSenderId: "85018247548",
  appId: "1:85018247548:web:e2fd38b39050dd2bb1e4f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
