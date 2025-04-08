import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

function ProductGrid({ products, categories, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentFilter, setCurrentFilter] = useState('todos');

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  useEffect(() => {
    if (currentFilter === 'todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.categories.includes(currentFilter))
      );
    }
  }, [currentFilter, products]);

  return (
    <>
      <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
      
      <main role="main" className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </main>
    </>
  );
}

export default ProductGrid;