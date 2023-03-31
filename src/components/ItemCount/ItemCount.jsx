import { useState } from "react";
import Button from "../Button/Button";


const ItemCount = ({inicial, stock, onAddToCart}) => {
  
  const [count, setCount] = useState (inicial)  

  
  const disminuir = () => {
    if (count > inicial) {
  setCount (count - 1)
  }
  };
  
  const incrementar = () => {
  if (count < stock) {  
  setCount (count + 1)}

};


return(
  <div className="adminCant">
    
    <Button color={"red"} onClickButton={disminuir}>-</Button>
    <span id='contador'>{count}</span>
    <Button color={"green"} onClickButton={incrementar}>+</Button>
    <br />
    <Button color={"orange"} onClickButton={()=>onAddToCart(count)}>Agregar al carrito</Button>
  </div> 

);
}

export default ItemCount;