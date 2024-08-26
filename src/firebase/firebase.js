import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX2BPDhvMp0nfAR1R5QE-9UKU5Lgj0X7U",
    authDomain: "crudoperation-e11bf.firebaseapp.com",
    projectId: "crudoperation-e11bf",
    storageBucket: "crudoperation-e11bf.appspot.com",
    messagingSenderId: "828833094603",
    appId: "1:828833094603:web:620351d20923ecb6a1744e",
    measurementId: "G-3QW5KFD92R"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);
const projectStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp;
export { projectAuth, projectFirestore, projectStorage, timestamp };