import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AcompanhamentosPage from './pages/AcompanhamentosPage';
import SanduichesPage from './pages/SanduichesPage';
import SobremesasPage from './pages/SobremesasPage';
import './App.css';

// Usando lazy loading para o Footer
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const checkout = () => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      alert(`Pedido finalizado! Total: R$ ${total.toFixed(2)}`);
      setCartItems([]);
      setIsCartOpen(false);
    }
  };

  const closeCartOnOutsideClick = (e) => {
    if (!e.target.closest('.cart-container') && isCartOpen) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeCartOnOutsideClick);
    return () => {
      document.removeEventListener('click', closeCartOnOutsideClick);
    };
  }, [isCartOpen]);

  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartItems} 
          isCartOpen={isCartOpen} 
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
        
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/acomp" element={<AcompanhamentosPage addToCart={addToCart} />} />
          <Route path="/sand" element={<SanduichesPage addToCart={addToCart} />} />
          <Route path="/sobrem" element={<SobremesasPage addToCart={addToCart} />} />
        </Routes>
        
        <Suspense fallback={<div>Carregando rodapé...</div>}>
          <Footer />
        </Suspense>
      </div>  
    </Router>
  );
}

export default App;