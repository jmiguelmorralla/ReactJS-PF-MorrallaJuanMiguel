import React, { useState, useEffect} from 'react';
import './styles.css';
import listadoProductos, { getFech } from '../../Mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


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


  const params = useParams ();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await listadoProductos; setProductos(respuesta);
  } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory); setProductos(respuesta);
  }
}

  useEffect(()=>{
    leerDatos()
  }, [idCategory])

  return (
  
    <div className=''>
      
      <h1>Catálogo de Productos</h1>
      <div className='container'>
        <ItemList Prod={productos} />
      </div>
    </div>
  )



}

export default ItemListContainer;
