import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const  [cart, setCart] = useState([]);

    function addItem (item, count) {
        const newCart = [...cart];

        if (isInCart(item.id)) {

            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            newCart[index].count = newCart[index].count + count;
          } else {
            newCart.push({ ...item, count });
          }
        
        setCart(newCart)
    };
    
    const clearCart = () => {
            setCart([]);
        }
        
    function isInCart(id){
                return cart.some(item => item.id === id)
            }

    const removeItem = (id) => setCart((cart.filter(item => item.id !== id)))


    const cartQuantity = () => {
        return cart.reduce((acc, prod) => (acc += prod.count), 0);
      }

    

      const getPriceInCart = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio), 0);
      }

    return (
        <cartContext.Provider value={{cart, addItem, isInCart, clearCart, removeItem, cartQuantity, getPriceInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}






export { CartContextProvider };
export default cartContext;