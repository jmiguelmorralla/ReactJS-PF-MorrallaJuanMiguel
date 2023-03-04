import React from 'react';
import "./styles.css";

export default function ItemDetail() {


  return (
        <div className="card">
            <div>
               <h4>{prod.nombre}</h4>
            </div>
            <div className="imagen">
                <h5>{prod.img}</h5>
            </div>
            <div className="imagen">
                <h5>{prod.marca}</h5>
            </div>
            <div className="imagen">
                <h5>{prod.origen}</h5>
            </div>
            <div>
                <h5>${prod.precio}</h5>
            </div>

        </div>
  )
}
