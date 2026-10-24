import MovieCard from './MovieCard.jsx';

function MovieRow({ title, movies, onSelect }) {
  if (movies.length === 0) return null;

  return (
    <section className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-scroller">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;