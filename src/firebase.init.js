// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiQRjiyf8mIA_cWPC-VGHpZKSuWAptfuY",
  authDomain: "gymgainer-66f13.firebaseapp.com",
  projectId: "gymgainer-66f13",
  storageBucket: "gymgainer-66f13.appspot.com",
  messagingSenderId: "192555226113",
  appId: "1:192555226113:web:588c565e906506b7909c00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;