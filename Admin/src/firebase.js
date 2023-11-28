// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKtPOe_lseVhvPTbt7DEjGWNmblGEoJq0",
  authDomain: "sins-shop.firebaseapp.com",
  projectId: "sins-shop",
  storageBucket: "sins-shop.appspot.com",
  messagingSenderId: "936339604404",
  appId: "1:936339604404:web:9d56a4eb0fe5dea35ba8e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;