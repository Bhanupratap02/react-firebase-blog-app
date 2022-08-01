/** @format */

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBXWhAfRMTSVC38rayY-KuO59zz8UK_w",
  authDomain: "react-firebase-blog-app-a627e.firebaseapp.com",
  projectId: "react-firebase-blog-app-a627e",
  storageBucket: "react-firebase-blog-app-a627e.appspot.com",
  messagingSenderId: "1075204240442",
  appId: "1:1075204240442:web:a6b4946e85406fa38e3103",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);

export {auth,db,storage}