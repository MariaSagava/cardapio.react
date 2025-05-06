import { useRef } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/bk2.png';

function Header({ cartItems, isCartOpen, setIsCartOpen, removeFromCart, checkout }) {
  const location = useLocation();
  const cartRef = useRef(null);

  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2)}`;
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  const toggleCart = (e) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header role="banner">
      <h1>Burguer King</h1>
      <img src={logo} alt="Logo do Burguer King" loading='lazy' />
      <div className="cart-container" ref={cartRef}>
        <button 
          className="cart-button" 
          aria-label="Abrir carrinho" 
          aria-expanded={isCartOpen}
          onClick={toggleCart}
        >
          <span className="cart-icon">🛒</span>
          <span id="cart-counter">{cartItems.length}</span>
        </button>
        <div 
          className={`cart-dropdown ${isCartOpen ? 'active' : ''}`} 
          aria-hidden={!isCartOpen}
        >
          <h3>Seu Carrinho</h3>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Seu carrinho está vazio</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                  </div>
                  <button 
                    className="remove-item" 
                    aria-label={`Remover ${item.name} do carrinho`}
                    onClick={() => removeFromCart(index)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span id="cart-total-value">{formatPrice(calculateTotal())}</span>
          </div>
          <button 
            className="checkout-button" 
            aria-label="Finalizar pedido"
            onClick={checkout}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>

      <nav role="navigation" aria-label="Menu principal">
        <ul role="menubar">
          <li role="menuitem" className={location.pathname === '/acomp' ? 'active' : ''}>
            <Link to="/acomp">Acompanhamentos</Link>
          </li>
          <li role="menuitem" className={location.pathname === '/sand' ? 'active' : ''}>
            <Link to="/sand">Sanduíches</Link>
          </li>
          <li role="menuitem" className={location.pathname === '/sobrem' ? 'active' : ''}>
            <Link to="/sobrem">Sobremesas</Link>
          </li>
          <li role="menuitem" className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Página Inicial</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;