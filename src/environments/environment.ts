import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdDAXOl-xbiozPnrsOgfyk2qhihVMP6nI",
  authDomain: "eatlesssaltreloaded.firebaseapp.com",
  projectId: "eatlesssaltreloaded",
  storageBucket: "eatlesssaltreloaded.firebasestorage.app",
  messagingSenderId: "889125748294",
  appId: "1:889125748294:web:0c21eb4a2970ccf2139447",
  measurementId: "G-7YVNH6KFWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);