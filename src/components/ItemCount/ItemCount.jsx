import { useState } from "react";



const ItemCount ({inicial, stock, onAddToCart}) {
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
    <button className='btn btn-danger' onClick={disminuir}>-</button>
    <div id='contador'>{valor}</div>
    <button className='btn btn-success' onClick={incrementar}>+</button>
    <button className="btn btn-warning" onClick={onAddToCart}>Agregar al carrito</button>
  </div> 

);
}