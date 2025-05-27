function ProductImage({ src, alt, isPromo, nome, descricaoBreveDaImagem }) {
  return (
    <div className="product-image">
      <img
        src={src}
        alt={`Foto apetitosa de ${nome}, mostrando ${descricaoBreveDaImagem || nome}`}
        className="menu-item-imagem"
        loading="lazy"
      />
      {isPromo && <span className="promo-tag">Promoção</span>}
    </div>
  );
}


export default ProductImage;
