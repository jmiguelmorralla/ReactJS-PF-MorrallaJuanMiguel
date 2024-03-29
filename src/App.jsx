import './styles.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import OrderChecked from './components/CartContainer/OrderChecked';
import Nosotros from './components/Nosotros/Nosotros';




function App() {
  return (
    
        <>
        <CartContextProvider value={[]}>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/items/:idProducto" element={<ItemDetailContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/checkout/:id" element={<OrderChecked />} />
                <Route path="*" element={<NotFound />} />
                
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
        </>

  );
}



export default App;
