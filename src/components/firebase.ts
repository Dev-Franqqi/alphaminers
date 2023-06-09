// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


import {
    getFirestore,
    collection,
  
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr9xfp9mbSlUAmPYwUsvgSUN1P5JShtRU",
  authDomain: "tonye-project.firebaseapp.com",
  projectId: "tonye-project",
  storageBucket: "tonye-project.appspot.com",
  messagingSenderId: "635843752578",
  appId: "1:635843752578:web:1629506711d96f374ffa9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const colref = collection(db,'UserInfo');
export const auth = getAuth(app);


