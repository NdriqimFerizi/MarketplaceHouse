// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbv_xycdWI6dlS5rhIj8wsp44_blqwbUo",
  authDomain: "house-marketplace-app-d24bd.firebaseapp.com",
  projectId: "house-marketplace-app-d24bd",
  storageBucket: "house-marketplace-app-d24bd.appspot.com",
  messagingSenderId: "832365884099",
  appId: "1:832365884099:web:23b0fcd53cb49308a5a876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig)
export const db = getFirestore()
