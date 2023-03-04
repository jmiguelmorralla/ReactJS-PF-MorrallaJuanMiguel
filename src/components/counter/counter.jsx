let valor = 0;




function counter () {
    
const [, aumentar] = useState(); 

const incrementar = () => {
    aumentar (valor ++);
    
};

const [, bajar] = useState(); 

const disminuir = () => {
    if (valor != 0) {
    bajar (valor --)}
};

return(
  <div className="adminCant">
  <button className='btn btn-danger' onClick={disminuir}>Disminuir</button>
  <div id='contador'>{valor}</div>
  <button className='btn btn-success' onClick={incrementar}>Incrementar</button>
</div> 

);
}