import { Link } from 'react-router-dom';
import './HomePage.css';
import ProductCard from '../components/ProductCard';
import batataFritaImage from '../assets/bf.jpg';
import bkTasteImage from '../assets/BK_Taste_1.0.png';
import bkMixImage from '../assets/site_BK_Mix_Pistache-1.png';

function HomePage({ addToCart }) {
  const products = [
    {
      id: 1,
      name: 'Batata Frita',
      price: 10.00,
      priceLabel: '10',
      description: 'Crocantes e irresistíveis, nossas batatas fritas podem vir no tamanho pequeno, médio e grande e são servidas sempre levemente salgadas.',
      image: batataFritaImage,
      imageAlt: 'Porção de batatas fritas douradas e crocantes',
      categoryTag: 'Acompanhamento',
      isPromo: false,
      categories: ['vegetariano'],
      tags: [{ name: 'Vegetariano', className: 'vegetarian' }]
    },
    {
      id: 2,
      name: 'BK Taste',
      price: 25.00,
      priceLabel: '25',
      description: 'Pão fofinho com gergelim, um hambúrguer de carne 100% bovino grelhado no fogo, alface fresquinha, tomate, cebola, fatias de queijo derretido sabor cheddar e o inédito molho Taste.',
      image: bkTasteImage,
      imageAlt: 'BK Taste com queijo derretido e vegetais',
      categoryTag: 'Sanduíche',
      isPromo: true,
      categories: ['premium', 'promocao'],
      tags: [{ name: 'Premium', className: 'premium' }]
    },
    {
      id: 3,
      name: 'BK Mix Pistache',
      price: 15.00,
      priceLabel: '15',
      description: 'O delicioso BK Mix com calda sabor Pistache®, mix sabor baunilha e calda de sabor Pistache.',
      image: bkMixImage,
      imageAlt: 'Sobremesa BK Mix com calda de pistache',
      categoryTag: 'Sobremesa',
      isPromo: true,
      categories: ['especial', 'promocao'],
      tags: [{ name: 'Especial', className: 'especial' }]
    }
  ];

  return (
    <>
      <div className="hero-section">
        <link rel="preload" as="style" href="/styles/hero.css" />
        <h2>Bem-vindo ao Burger King</h2>
        <p>Descubra o sabor inigualável do hambúrguer grelhado no fogo</p>
      </div>

      <div className="categories-section">
        <h2>Destaques do Cardápio</h2>
        <p>Confira nossos produtos mais pedidos</p>
      </div>

      <main role="main" className="products-grid">
        {products.map(product => (
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

export default HomePage;