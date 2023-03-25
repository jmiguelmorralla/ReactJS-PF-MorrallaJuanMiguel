import React, { useContext } from 'react';
import './styles.css';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import listadoProductos from "../../Mock";
import ItemCount from '../ItemCount/ItemCount';
import cartContext from '../../context/cartContext'


export default function ItemDetailContainer() {

const [item, setItem] = useState([])

const params = useParams()
const idProduct = params.idProducto;

const {addItem} = useContext (cartContext);

function onAddToCart(count) {
  alert(`Agregaste ${count} ítems al carrito.`)
  addItem(item, count);
}


useEffect (()=>{
    const promesaItem = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let encontrado = listadoProductos.find((item) => item.id === parseInt(idProduct)); resolve(encontrado);
        }, 1000)
    });

    promesaItem.then((respuesta)=>setItem(respuesta));


}, []);



  return (
    <div className="container">
        <div className="card">
            <div>
               <h4>{item.nombre}</h4>
            </div>
            <div>
                <img className="imagen-detail" src={item.img} />
            </div>
            <div>
                <h5>Marca: {item.marca}</h5>
            </div>
            <div>
                <h5>Origen: {item.origen}</h5>
            </div>
            <div>
                <h5>${item.precio}</h5>
            </div>
            <ItemCount onAddToCart={onAddToCart} inicial={1} stock={item.stock} />
            

        </div>
    </div>
  )
}


