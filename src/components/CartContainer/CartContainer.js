import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
import Button from "../Button/Button";
import CheckoutCart from "./CheckoutCart";

import "./styles.css";

function CartContainer() {
  const { cart, getPriceInCart, removeItem } = useContext(cartContext);

  return (
    <>
        {cart.length === 0? 
        
        <div className="container contenedorCarrito">
            <h1>Carrito</h1>
            <h3>Aún no agregaste productos.</h3>
            <div>
                <Link to={`/`}>                
                <Button color="orange">Catálogo de Productos</Button>
                </Link>
            </div>
        </div>:
        <div className="container contenedorCarrito">
            <div>
                <h1>Carrito</h1>
            </div>

            <table>
                <thead className="tituloTabla">
                <tr className="detalleTabla">
                    <th>Miniatura</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                    <th>Total</th>
                </tr>
                </thead>

                <tbody>
                {cart.map((item) => (
                    <tr key={item.id} className="cartList_row">
                    <td>
                        <img height={70} src={item.img} alt={item.nombre} />
                    </td>
                    <td>{item.nombre}</td>
                    <td>${item.precio}</td>
                    <td>{item.count}</td>
                    <td>
                        <button color="red" onClick={()=>removeItem(item.id)}>X</button>
                    </td>
                    <th>$ {item.precio*item.count}</th>
                    </tr>
                ))}
                </tbody>
            </table>



            <div>
                El total de tu compra es de ${getPriceInCart()}
            </div>

            <div className="checkout">
                <CheckoutCart cart={cart} total={getPriceInCart()}/>
            </div>
        </div>
        }
    </>
  );
}

export default CartContainer;