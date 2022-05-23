// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcsz92yqY-PIXjbJ5vB01l5DGnP8vi_wE",
  authDomain: "movie-f8c9a.firebaseapp.com",
  projectId: "movie-f8c9a",
  storageBucket: "movie-f8c9a.appspot.com",
  messagingSenderId: "1025193144328",
  appId: "1:1025193144328:web:4e5e3c841457824f78e1bd",
  measurementId: "G-HSZVPCY9YY"
};

// Initialize Firebase
// const firebaseApp = 
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider };

