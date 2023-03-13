import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./styles.css";

export default function ItemDetail({item}) {


    function onAddToCart(count) {
        alert(`Agregaste ${count} ítems al carrito.`)
      }


  return (
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
  )
}
