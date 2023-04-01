import React, { useState, useEffect} from 'react';
import './styles.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { db } from '../../services/firestore';
import { collection, getDocs, query, where } from "firebase/firestore";


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



const ItemListContainer = ()=>{
  const params = useParams ();
  const idCategory = params.idCategory;

  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
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
  }, [params])

  return (
  
    <div>
      
      <h1 className='container'>Catálogo de Productos</h1>
      <div className='container'>
        {isLoading? <Loader /> : 
        <ItemList Prod={productos} />
        }
      </div>
    </div>
  )



}

export default ItemListContainer;