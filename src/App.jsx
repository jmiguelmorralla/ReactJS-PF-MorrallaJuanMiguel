import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
        <>
        
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainter />} />

          </Routes>
        </BrowserRouter>
        </>

  );
}



export default App;
