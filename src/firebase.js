// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVhcDgA3HhS4ftyZfvy8HJftscx4th7Y",
  authDomain: "bookify-69de1.firebaseapp.com",
  projectId: "bookify-69de1",
  storageBucket: "bookify-69de1.appspot.com",
  messagingSenderId: "320732819463",
  appId: "1:320732819463:web:052f8bb9492881d5b5baa2",
  databaseURL:"https://bookify-69de1-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);