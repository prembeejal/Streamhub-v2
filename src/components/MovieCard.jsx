function MovieCard({ movie, onSelect }) {
  return (
    <button className="movie-card" onClick={() => onSelect(movie)} aria-label={movie.title}>
      <img src={movie.poster} alt={movie.title} loading="lazy" />
      <div className="movie-card-info">
        <span className="movie-card-title">{movie.title}</span>
        <span className="rating">★ {movie.rating}</span>
      </div>
    </button>
  );
}

export default MovieCard;