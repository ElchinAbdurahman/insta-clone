import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_EzEMxeE8_mFZqWEGi8VxzX4jLzYgPfU",
  authDomain: "twitter-clone-aaafd.firebaseapp.com",
  projectId: "twitter-clone-aaafd",
  storageBucket: "twitter-clone-aaafd.appspot.com",
  messagingSenderId: "205434406910",
  appId: "1:205434406910:web:e49207138150078931a2af"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };