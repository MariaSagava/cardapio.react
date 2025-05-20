function ProductImage({ src, alt, isPromo }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} loading="lazy" />
      {isPromo && <span className="promo-tag">Promoção</span>}
    </div>
  );
}

export default ProductImage;
