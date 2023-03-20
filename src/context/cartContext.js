import { createContext } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const cart = [{id:1}, {id:1}];
    return (
    <cartContext.Provider value={cart}>{props.children}</cartContext.Provider>
    )
}






export { CartContextProvider }
export default cartContext;