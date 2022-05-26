// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xlWYfaudCWHPfJ1uwfJsw35nkppwNLM",
  authDomain: "cotizador-de-proyectos.firebaseapp.com",
  projectId: "cotizador-de-proyectos",
  storageBucket: "cotizador-de-proyectos.appspot.com",
  messagingSenderId: "282498067241",
  appId: "1:282498067241:web:9045741f27e5ec50986538"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)