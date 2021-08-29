import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoLDBFr6zaM9dVZ2ARd8wCpmt1xn8DDaw",
  authDomain: "coderhouse-tienda-2021.firebaseapp.com",
  projectId: "coderhouse-tienda-2021",
  storageBucket: "coderhouse-tienda-2021.appspot.com",
  messagingSenderId: "8061326823",
  appId: "1:8061326823:web:45099d480e8dce333d5942"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);