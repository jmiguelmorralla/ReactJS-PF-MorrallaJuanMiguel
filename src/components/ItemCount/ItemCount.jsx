import { useState } from "react";
import Button from "../Button/Button";


const ItemCount = ({inicial, stock, onAddToCart}) => {
  
  const [count, setCount] = useState (inicial)  

  
  const disminuir = () => {
    if (count != inicial) {
    setCount (count --)}
  };
  
  const incrementar = () => {
  if (count < stock) {  
  setCount (count ++)}

};


return(
  <div className="adminCant">
    
    <Button color={"red"} onClickButton={disminuir}>-</Button>
    <div id='contador'>{count}</div>
    <Button color={"green"} onClickButton={incrementar}>+</Button>
    <Button color={"orange"} onClickButton={()=>onAddToCart(count)}>Agregar al carrito</Button>
  </div> 

);
}

export default ItemCount;