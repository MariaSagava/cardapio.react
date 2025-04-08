function PageBanner({ title, description, backgroundImage = null }) {
    const bannerStyle = backgroundImage 
      ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})` }
      : {};
  
    return (
      <div className="page-banner" style={bannerStyle}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default PageBanner;