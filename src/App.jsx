import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './context/cartContext';




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

                <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
        </>

  );
}



export default App;
