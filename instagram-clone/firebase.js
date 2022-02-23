import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAA5IR_2YI6su6TMMA_HyYvomIqyvO1rGM",
  authDomain: "insta-clone-7ca31.firebaseapp.com",
  projectId: "insta-clone-7ca31",
  storageBucket: "insta-clone-7ca31.appspot.com",
  messagingSenderId: "246797933963",
  appId: "1:246797933963:web:ff1667b828d6b04d8ca38e"
};


const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore();
const storage=getStorage();

export { app,db,storage }
