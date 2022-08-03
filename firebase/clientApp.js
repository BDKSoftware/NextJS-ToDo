import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf5mQwc2jjxtjnRV6EGUVWmxMEkeiG3LI",
  authDomain: "nextjs-todo-e5784.firebaseapp.com",
  projectId: "nextjs-todo-e5784",
  storageBucket: "nextjs-todo-e5784.appspot.com",
  messagingSenderId: "553332789774",
  appId: "1:553332789774:web:af6657b847c0bc4eb7225f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
