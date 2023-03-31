import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../services/firestore'
import { useContext } from 'react';
import cartContext from '../../context/cartContext';
import CheckoutForm from './CheckoutForm';



function CheckoutCart({cart, total}) {

  const { clear } = useContext(cartContext);

    const navigate = useNavigate();

    async function handleCheckout () {
      const orderData = {
        buyer: {name: "Miguel", phone: "233", email: "juan@gfs.com" },
        items: cart,
        total: total,
        timestamp: new Date(),
      }
      const id = await createOrder(orderData)

      navigate('/checkout/${id}')

      

    }
  return (
    <div>
        <CheckoutForm onSubmit={handleCheckout} />
    </div>
  )
}

export default CheckoutCart