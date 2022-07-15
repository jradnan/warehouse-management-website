// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJDtSHnfo5hY2x4-qQ3i94eOSBfZFDpoU",
  authDomain: "assignment-11-d8684.firebaseapp.com",
  projectId: "assignment-11-d8684",
  storageBucket: "assignment-11-d8684.appspot.com",
  messagingSenderId: "357495858912",
  appId: "1:357495858912:web:d85c53d00a2303deead285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth