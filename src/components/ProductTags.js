function ProductTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="product-tags">
      {tags.map((tag, index) => (
        <span key={index} className={`tag ${tag.className}`}>
          {tag.name}
        </span>
      ))}
    </div>
  );
}

export default ProductTags;
