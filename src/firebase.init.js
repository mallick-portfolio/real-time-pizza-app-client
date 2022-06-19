// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVKlHm78nKZxIKSRmkxZg1hQsz5jZBKZQ",
  authDomain: "real-time-pizza-app.firebaseapp.com",
  projectId: "real-time-pizza-app",
  storageBucket: "real-time-pizza-app.appspot.com",
  messagingSenderId: "702165333403",
  appId: "1:702165333403:web:4a0628f0a0f56a26529d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth