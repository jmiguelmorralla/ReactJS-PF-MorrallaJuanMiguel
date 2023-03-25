import React, { useState, useEffect} from 'react';
import './styles.css';
import listadoProductos, { getFech } from '../../Mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


function getItemsByCategoryFromDatabase (categoryURL) {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      let productosFiltrados = listadoProductos.filter(item => item.category === categoryURL)
      resolve(productosFiltrados)
    }, 1000); 
  });
}

const ItemListContainer = ()=>{

  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const params = useParams ();
  const idCategory = params.idCategory;

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
