import { useState } from "react";
import Button from "../Button/Button";


const ItemCount = ({inicial, stock, onAddToCart}) => {
  
  let [count, setCount] = useState (inicial)  

  
  let disminuir = () => {
    if (count > inicial) {
  setCount (count --)
  }
  };
  
  let incrementar = () => {
  if (count < stock) {  
  setCount (count ++)}



};

console.log("valor "+count)
return(
  <div className="adminCant">
    
    <Button color={"red"} onClickButton={disminuir}>-</Button>
    <span id='contador'>{count}</span>
    <Button color={"green"} onClickButton={incrementar}>+</Button>
    <Button color={"orange"} onClickButton={()=>onAddToCart(count)}>Agregar al carrito</Button>
  </div> 

);
}

export default ItemCount;