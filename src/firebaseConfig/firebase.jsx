import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9vbVtHL6_pXv_pOGHj6wXKtrxb5sHcg0",
  authDomain: "crud-fire-react-55fad.firebaseapp.com",
  databaseURL: "https://crud-fire-react-55fad-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-55fad",
  storageBucket: "crud-fire-react-55fad.appspot.com",
  messagingSenderId: "845816295122",
  appId: "1:845816295122:web:879b90f0afaa001d8e070b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)