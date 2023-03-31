import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Item = ({prod}) => {
    return(
        
        <div className="card">
            <div className='container-card'>
                <div>
                    <h4>{prod.nombre}</h4>
                </div>
                <div>
                    {prod.oferta !==0 && (
                    <div className="oferta">¡En oferta!</div>
                    )}
                </div>
            </div>
            <div>
                <img className="imagen-prod" src={prod.img}/>
            </div>
            
            <Link to={`/items/${prod.id}`}>                
                <Button color={"#a305f7"}>Ver descripción</Button>

            </Link>
        </div>
        

    );
};


export default Item;

