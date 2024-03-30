import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBytJeuoCbDqZRKW62W8fo0Safzj3KZApc",
  authDomain: "fir-blog-a7429.firebaseapp.com",
  projectId: "fir-blog-a7429",
  storageBucket: "fir-blog-a7429.appspot.com",
  messagingSenderId: "870899581717",
  appId: "1:870899581717:web:3a94b80aa069b0ec855f1c",
  measurementId: "G-58Y52TJZJR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);