import React from 'react';
import "./styles.css";

export default function ItemDetail({item}) {

  return (
        <div className="card">
            <div>
               <h4>{item.nombre}</h4>
            </div>
            <div>
                <h5>{item.img}</h5>
            </div>
            <div>
                <h5>{item.marca}</h5>
            </div>
            <div>
                <h5>{item.origen}</h5>
            </div>
            <div>
                <h5>${item.precio}</h5>
            </div>

        </div>
  )
}
