import { useState, lazy, Suspense } from 'react';
import './ProductCard.css';

// Importações dinâmicas
const ProductImage = lazy(() => import('./ProductImage'));
const ProductTags = lazy(() => import('./ProductTags'));

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <article 
      role="article" 
      aria-label={`Produto: ${product.name}`}
      data-category={product.categories.join(' ')} 
      className="product-card"
    >
      <Suspense fallback={<div className="loading">Carregando imagem...</div>}>
        <ProductImage 
          src={product.image} 
          alt={product.imageAlt} 
          isPromo={product.isPromo} 
        />
      </Suspense>

      <div className="product-info">
        <h2>{product.name}</h2>

        <Suspense fallback={<div className="loading">Carregando tags...</div>}>
          <ProductTags tags={product.tags} />
        </Suspense>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <p 
            className="price" 
            aria-label={`Preço: ${product.price} reais`}
          >
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
