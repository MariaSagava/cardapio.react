import { useState } from 'react';
import './acomp.css';
import PageBanner from '../components/PageBanner';
import ProductGrid from '../components/ProductGrid';
import batataFritaImage from '../assets/bf.jpg';
import onionRingsImage from '../assets/onionring.jpeg';
import nuggetsImage from '../assets/nuggets.jpeg';
import bannerImage from '../assets/banner-acomp.jpeg'

function AcompanhamentosPage({ addToCart }) {
  const categories = [
    { id: 'vegetariano', name: 'Vegetariano' },
    { id: 'promocao', name: 'Promoção' },
    { id: 'novidade', name: 'Novidades' }
  ];

  const products = [
    {
      id: 1,
      name: 'Batata Frita',
      price: 10.00,
      priceLabel: '10',
      description: 'Crocantes e irresistíveis, nossas batatas fritas podem vir no tamanho pequeno, médio e grande e são servidas sempre levemente salgadas.',
      image: batataFritaImage,
      imageAlt: 'Porção de batatas fritas douradas e crocantes',
      isPromo: true,
      categories: ['vegetariano', 'promocao'],
      tags: [{ name: 'Vegetariano', className: 'vegetarian' }]
    },
    {
      id: 2,
      name: 'Onion Rings',
      price: 12.00,
      priceLabel: '12',
      description: 'Deliciosos anéis de cebola empanados e fritos até ficarem dourados e crocantes. Acompanhamento perfeito para seu lanche.',
      image: onionRingsImage,
      imageAlt: 'Anéis de cebola empanados e dourados',
      isPromo: true,
      categories: ['vegetariano', 'promocao'],
      tags: [{ name: 'Vegetariano', className: 'vegetarian' }]
    },
    {
      id: 3,
      name: 'Nuggets',
      price: 15.00,
      priceLabel: '15',
      description: 'Deliciosos pedacinhos de frango empanados, dourados e crocantes. Disponível em 4, 6 ou 10 unidades.',
      image: nuggetsImage,
      imageAlt: 'Nuggets de frango crocantes',
      isPromo: true,
      categories: ['promocao'],
      tags: []
    }
  ];

  return (
    <>
      <PageBanner 
        title="Acompanhamentos" 
        description="O complemento perfeito para o seu lanche" 
        backgroundImage={bannerImage}
      />
      
      <ProductGrid 
        products={products}
        categories={categories}
        addToCart={addToCart}
        
      />
    </>
  );
}

export default AcompanhamentosPage;