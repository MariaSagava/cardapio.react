import { useState, useEffect, Suspense, lazy, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

// Lazy loading para todas as páginas para reduzir bundle inicial
const HomePage = lazy(() => import('./pages/HomePage'));
const AcompanhamentosPage = lazy(() => import('./pages/AcompanhamentosPage'));
const SanduichesPage = lazy(() => import('./pages/SanduichesPage'));
const SobremesasPage = lazy(() => import('./pages/SobremesasPage'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de loading otimizado
const LoadingFallback = ({ text = "Carregando..." }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    fontSize: '16px',
    color: '#666'
  }}>
    {text}
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Memoização do cálculo do total para evitar recálculos desnecessários
  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  // useCallback para funções que são passadas como props
  const addToCart = useCallback((product) => {
    setCartItems(prevItems => [...prevItems, product]);
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCartItems(prevItems => {
      const newCartItems = [...prevItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  }, []);

  const checkout = useCallback(() => {
    if (cartItems.length > 0) {
      alert(`Pedido finalizado! Total: R$ ${cartTotal.toFixed(2)}`);
      setCartItems([]);
      setIsCartOpen(false);
    }
  }, [cartItems.length, cartTotal]);

  // Otimização do event listener - só adiciona quando necessário
  useEffect(() => {
    if (!isCartOpen) return;

    const closeCartOnOutsideClick = (e) => {
      if (!e.target.closest('.cart-container')) {
        setIsCartOpen(false);
      }
    };

    // Usar passive listener para melhor performance
    document.addEventListener('click', closeCartOnOutsideClick, { passive: true });
    
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
          cartTotal={cartTotal}
        />
        
        <Suspense fallback={<LoadingFallback text="Carregando página..." />}>
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route path="/acomp" element={<AcompanhamentosPage addToCart={addToCart} />} />
            <Route path="/sand" element={<SanduichesPage addToCart={addToCart} />} />
            <Route path="/sobrem" element={<SobremesasPage addToCart={addToCart} />} />
          </Routes>
        </Suspense>
        
        <Suspense fallback={<LoadingFallback text="Carregando rodapé..." />}>
          <Footer />
        </Suspense>
      </div>  
    </Router>
  );
}

export default App;