// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUjYVy43lGNnuiYvK0UkD2psLgyHrRwtY",
  authDomain: "dedebeauty-73385.firebaseapp.com",
  projectId: "dedebeauty-73385",
  storageBucket: "dedebeauty-73385.appspot.com",
  messagingSenderId: "381785076112",
  appId: "1:381785076112:web:239dfacf23d14f5164c315"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);