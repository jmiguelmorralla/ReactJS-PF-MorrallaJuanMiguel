

// Configuración Firebase -----------------------------------------------------------


import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbBr5QGDOhK7GovGCrOY3mRLJOlqSPj2c",
  authDomain: "reactproyectofinalmorrallajuan.firebaseapp.com",
  projectId: "reactproyectofinalmorrallajuan",
  storageBucket: "reactproyectofinalmorrallajuan.appspot.com",
  messagingSenderId: "620829723264",
  appId: "1:620829723264:web:c82a918562d93a33c93465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Configuración Firebase -----------------------------------------------------------

export async function createOrder (orderData) {
 const collectionRef = collection(db, "orders");
 const response = await addDoc(collectionRef, orderData)
 console.log("orden Ok")
 return response.id
}