import { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article 
      role="article" 
      aria-label={`Produto: ${product.name}`} 
      data-category={product.categories.join(' ')} 
      className="product-card"
    >
      <div className="product-image">
        <img src={product.image} alt={product.imageAlt} />
        {product.isPromo && <span className="promo-tag">Promoção</span>}
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        {product.tags && product.tags.length > 0 && (
          <div className="product-tags">
            {product.tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.className}`}>{tag.name}</span>
            ))}
          </div>
        )}
        <p>{product.description}</p>
        <div className="product-footer">
          <p className="price" aria-label={`Preço: ${product.priceLabel} reais`}>
            R$ {product.price.toFixed(2)}
          </p>
          <button 
            className={`add-to-cart ${isAdded ? 'added' : ''}`} 
            aria-label={`Adicionar ${product.name} ao carrinho`}
            onClick={handleAddToCart}
          >
            {isAdded ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;