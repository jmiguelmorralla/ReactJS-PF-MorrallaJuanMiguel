import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const  [cart, setCart] = useState([]);

    function addItem() {
        
    }


    return (
        <cartContext.Provider value={{cart: cart}}>
            {props.children}
        </cartContext.Provider>
    )
}






export { CartContextProvider };
export default cartContext;