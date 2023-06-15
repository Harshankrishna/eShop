import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDB5x1DLLtmklFOgH9NialTHnjh1pIQRqI",
  authDomain: "eshop-be371.firebaseapp.com",
  projectId: "eshop-be371",
  storageBucket: "eshop-be371.appspot.com",
  messagingSenderId: "807513392293",
  appId: "1:807513392293:web:8e23700f0b7c78c8c8f94c",
  measurementId: "G-RED2G6RYPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
