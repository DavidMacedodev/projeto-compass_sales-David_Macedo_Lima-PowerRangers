import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBIhu0UUqdVUQ--2lJga5QVpo53ymA_dGQ",
    authDomain: "appcompass-5733f.firebaseapp.com",
    projectId: "appcompass-5733f",
    storageBucket: "appcompass-5733f.appspot.com",
    messagingSenderId: "304853619460",
    appId: "1:304853619460:web:686e75e77863d873a7f651"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };