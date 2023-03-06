import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return(
        
        <div className="card">
            <div>
               <h4>{prod.nombre}</h4>
            </div>
            <div>
                <img className="imagen-prod" src={prod.img}/>
            </div>
            <Link to={`/items/${prod.id}`}>                
                <button className="btn btn-warning">Ver descripción</button>
            </Link>
        </div>
        

    );
};


export default Item;

