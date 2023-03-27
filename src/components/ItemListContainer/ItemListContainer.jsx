import React, { useState, useEffect} from 'react';
import './styles.css';
import listadoProductos, { getFech } from '../../Mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


// Configuración Firebase -----------------------------------------------------------

import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}


// function getItemsByCategoryFromDatabase (categoryURL) {
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       let productosFiltrados = listadoProductos.filter(item => item.category === categoryURL)
//       resolve(productosFiltrados)
//     }, 1000); 
//   });
// }

const ItemListContainer = ()=>{
  const params = useParams ();
  const idCategory = params.idCategory;

  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await listadoProductos; 
      setProductos(respuesta);
      setIsLoading(false)
  } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory); 
      setProductos(respuesta);
      setIsLoading(false);
  }
  }




  useEffect(()=>{
    leerDatos()
  }, [idCategory])

  return (
  
    <div>
      
      <h1 className='container'>Catálogo de Productos</h1>
      <div className='container'>
        {isLoading? <Loader /> : 
        <ItemList Prod={productos} /> }
      </div>
    </div>
  )



}

export default ItemListContainer;
