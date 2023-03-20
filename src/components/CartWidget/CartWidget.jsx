import './styles.css';
import { useContext } from 'react';
import cartContext from '../../context/cartContext';

function CartWidget() {

  const {cart} = useContext(cartContext)
  const cartCount = cart.length
  return (
    <div className="CartWidget">
      <img src="/img/cart.svg" alt="Carrito" height="50px" />
      <p className='numeroCart'>{cartCount}</p>

    </div>

  );
}

export default CartWidget;
