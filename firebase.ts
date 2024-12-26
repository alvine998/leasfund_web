// firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNOYwkqkiLBI-C0HSLRwo_br1r44LwTLA",
    authDomain: "leasefund.firebaseapp.com",
    databaseURL: "https://leasefund-default-rtdb.firebaseio.com",
    projectId: "leasefund",
    storageBucket: "leasefund.appspot.com",
    messagingSenderId: "615927680318",
    appId: "1:615927680318:web:4247af93adc91b741fb06f",
    measurementId: "G-FSRVWQ08CK"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
