function Hero({ movie, onSelect }) {
  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${movie.backdrop})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-meta">
          <span className="rating">★ {movie.rating}</span> · {movie.year} · {movie.genres.join(' / ')}
        </p>
        <p className="hero-desc">{movie.description}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onSelect(movie)}>▶ Play</button>
          <button className="btn btn-secondary" onClick={() => onSelect(movie)}>More Info</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;