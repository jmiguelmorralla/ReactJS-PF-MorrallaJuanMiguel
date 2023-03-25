import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const  [cart, setCart] = useState([]);

    function addItem (item, count) {
        const newCart = [...cart];
        item.count = count;
        newCart.push(item)
        
        setCart(newCart)
    };

    function removeItem(id) {

    }

    function clear () {

    }

    function getCountInCart () {

    }


    return (
        <cartContext.Provider value={{cart, addItem}}>
            {props.children}
        </cartContext.Provider>
    )
}






export { CartContextProvider };
export default cartContext;