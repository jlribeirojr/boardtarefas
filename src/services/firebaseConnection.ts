
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAA_qogtjYRBphH5JAF2dhuvyin3eiUB4s",
  authDomain: "tarefasplus-bf43c.firebaseapp.com",
  projectId: "tarefasplus-bf43c",
  storageBucket: "tarefasplus-bf43c.appspot.com",
  messagingSenderId: "805917901020",
  appId: "1:805917901020:web:a17e426eda122eff2ab419"
};

const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
export {db}