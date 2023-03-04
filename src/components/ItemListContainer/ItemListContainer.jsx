import React, { useState, useEffect} from 'react';
import './styles.css';
import { getFech } from '../../Mock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ()=>{

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    getFech
    .then((respuesta) => setProductos(respuesta))
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
  }, [])

  return (
  
    <div className='container'>
      {loading ? <h1>Cargando productos...</h1> : 
      <h1>Catálogo de Productos</h1>}
      <div className='container contenedor'>
        <ItemList Prod={productos} />
      </div>





    </div>



  )



}

export default ItemListContainer;
