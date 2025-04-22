import PageBanner from '../components/PageBanner';
import './SanduichesPage.css';
import ProductGrid from '../components/ProductGrid';
import bkTasteImage from '../assets/BK_Taste_1.0.png';
import bannerImage from '../assets/banner-sand.jpg';

function SanduichesPage({ addToCart }) {
  const categories = [
    { id: 'premium', name: 'Premium' },
    { id: 'promocao', name: 'Promoção' }
  ];

  const products = [
    {
      id: 1,
      name: 'BK Taste',
      price: 25.00,
      priceLabel: '25',
      description: 'Pão fofinho com gergelim, um hambúrguer de carne 100% bovino grelhado no fogo, alface fresquinha, tomate, cebola, fatias de queijo derretido sabor cheddar e o inédito molho Taste, sabor defumado.',
      image: bkTasteImage,
      imageAlt: 'BK Taste com queijo derretido e vegetais',
      isPromo: true,
      categories: ['premium', 'promocao'],
      tags: [{ name: 'Premium', className: 'premium' }]
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sanduíches" 
        description="Os melhores hambúrgueres grelhados no fogo" 
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

export default SanduichesPage;