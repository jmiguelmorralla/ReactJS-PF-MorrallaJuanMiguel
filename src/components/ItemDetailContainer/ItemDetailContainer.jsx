import React, { useContext } from 'react';
import './styles.css';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import cartContext from '../../context/cartContext';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../../services/firestore';


async function getSingleItemFromDatabase(idItem) {

    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idItem);
  
    const docSnapshot = await getDoc(docRef);
  
    if (docSnapshot.exists() === false) 
      throw new Error("No existe el documento") 
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
  }



function ItemDetailContainer() {

const [item, setItem] = useState([])
const [compra, setCompra] = useState(false)

const params = useParams()
const idItem = params.idProducto;

const {cart, addItem} = useContext (cartContext);

function onAddToCart(count) {
  alert(`Agregaste ${count} ítems al carrito.`)
  addItem(item, count);
  setCompra(true)
}



useEffect (()=>{

    getSingleItemFromDatabase(idItem)
    .then((respuesta)=>{setItem(respuesta)})
    .catch((error) => alert ("Error."));

}, []);

const precioOferta = ((100-item.oferta)*item.precio/100)


if (item.nombre === undefined) return <Loader />;



  return (
    <div className="container">
        <div className="card">
            <div className='container-card'>
                <div>
                    <h4>{item.nombre}</h4>
                </div>
                    <div>
                        {item.oferta > 0 ? (
                        <div className="oferta">¡En oferta!</div>
                        ): ""}
                    </div>
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
                {item.oferta? (
                        <div> <h5 className='precio-tachado'>${item.precio}</h5>
                        <h3 className='precio-oferta'>${precioOferta}</h3>
                        </div>
                        ) : <h5>${item.precio}</h5>}
                
            </div>
         
            
            
            {compra? 
              <Link to={`/cart`}>                
                <Button color="orange">Ir al carrito</Button>
              </Link>
              :
              <ItemCount onAddToCart={onAddToCart} inicial={1} stock={item.stock} />}
            

        </div>
    </div>
  )
}


export default ItemDetailContainer;