import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { IFirebaseConfig } from "../types";

const firebaseConfig: IFirebaseConfig = {
    // apiKey: "AIzaSyCiMme8y82YgV-4TlrPlrMAA1D86i2nMQA",
    // authDomain: "chat-db-fa7cd.firebaseapp.com",
    // databaseURL: "https://chat-db-fa7cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    // projectId: "chat-db-fa7cd",
    // storageBucket: "chat-db-fa7cd.appspot.com",
    // messagingSenderId: "156268552386",
    // appId: "1:156268552386:web:662e1c44bf91d773ed9b5b",
    // measurementId: "G-P9FRG67CQX"
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string
};

// Initializations
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
