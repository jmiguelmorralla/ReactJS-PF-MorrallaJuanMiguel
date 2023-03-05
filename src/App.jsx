import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    
        <>
        
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainter />} />
              <Route path="/items/:idProducto" element={<ItemDetailContainer />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </>

  );
}



export default App;
