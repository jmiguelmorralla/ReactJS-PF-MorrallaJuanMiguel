import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const  [cart, setCart] = useState([]);

    console.log(cart)

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

    function removeItem(id) {
      
    }

    function clear () {

    }

    function getCountInCart () {
        let total = 0;
        cart.forEach((item)=> total+item.count)
        return total;
    }

    function isInCart(id){
        cart.some(item => item.id ===id)
    }

    return (
        <cartContext.Provider value={{cart, addItem, isInCart, getCountInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}






export { CartContextProvider };
export default cartContext;