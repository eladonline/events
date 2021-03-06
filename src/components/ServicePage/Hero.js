const Hero = ({ src, head }) => {
  return (
    <>
      <div className="static-hero" style={{ backgroundImage: `url(${src})` }}>
        <div className="hero-overlay">
          <header>
            <h1>{head}</h1>
          </header>
        </div>
      </div>
      <div className="hero-static_placeholder" />
    </>
  );
};

export default Hero;
