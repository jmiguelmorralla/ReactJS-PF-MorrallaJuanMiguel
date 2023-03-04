import React from 'react';
import './styles.css';

const Item = ({prod}) => {
    return(
        
        <div className="card">
            <div>
               <h4>{prod.nombre}</h4>
            </div>
            <div className="imagen">
                <h5>{prod.img}</h5>
            </div>
            <div>
                <h5>${prod.precio}</h5>
            </div>
            <button className="btn btn-warning">Ver descripción</button>
        </div>
        

    );
};


export default Item;

