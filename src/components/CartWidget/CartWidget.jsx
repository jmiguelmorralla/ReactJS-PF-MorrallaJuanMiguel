import './styles.css';
import { useContext } from 'react';
import cartContext from '../../context/cartContext';




function CartWidget() {

  const {cart, getCountInCart} = useContext(cartContext)
  const cartCount = getCountInCart()

 
  return (
    
    
    <div className="CartWidget">
      <img src="/img/cart.svg" alt="Carrito" height="50px" />

      {cart.length===0 ? "" : <p className='numeroCart'>{cartCount}</p> }

    

    </div>

  );
}

export default CartWidget;
