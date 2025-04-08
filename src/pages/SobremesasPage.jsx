import PageBanner from '../components/PageBanner';
import ProductGrid from '../components/ProductGrid';
import bkMixImage from '../assets/site_BK_Mix_Pistache-1.png';
import bannerImage from '../assets/banner-sobrem.jpg';

function SobremesasPage({ addToCart }) {
  const categories = [
    { id: 'especial', name: 'Especial' },
    { id: 'promocao', name: 'Promoção' }
  ];

  const products = [
    {
      id: 1,
      name: 'BK Mix Pistache',
      price: 15.00,
      priceLabel: '15',
      description: 'O delicioso BK Mix com calda sabor Pistache®, mix sabor baunilha e calda de sabor Pistache. Uma combinação única e irresistível para os amantes de sobremesas.',
      image: bkMixImage,
      imageAlt: 'Sobremesa BK Mix com calda de pistache',
      isPromo: true,
      categories: ['especial', 'promocao'],
      tags: [{ name: 'Especial', className: 'especial' }]
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sobremesas" 
        description="Deliciosas sobremesas para adoçar seu dia" 
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

export default SobremesasPage;
