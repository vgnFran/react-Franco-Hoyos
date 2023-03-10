import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./Pages/NotFound/NotFound"
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer"
import { Cart } from './Pages/Cart/Cart';
import CartProvider from './context/CartProvider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </CartProvider>     
      </BrowserRouter>
        
      </header>

    </div>
  );
}

export default App;

