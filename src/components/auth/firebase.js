// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKyWQPrjwK1rmjYkkHsyB4Ik84_OeC1zo",
  authDomain: "brainstorm-v1-504df.firebaseapp.com",
  projectId: "brainstorm-v1-504df",
  storageBucket: "brainstorm-v1-504df.firebasestorage.app",
  messagingSenderId: "179042482060",
  appId: "1:179042482060:web:b1ed80d2b55f14560d48a9",
  measurementId: "G-Z1WKYKZFQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };     
// export default app;  // This line was commented out to avoid the error: "Unused default export app"  [eslint(no-unused-vars)]        