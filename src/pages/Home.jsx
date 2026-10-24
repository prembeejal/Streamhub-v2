import { useState } from 'react';
import movies from '../data/movies.json';
import Hero from '../components/Hero.jsx';
import MovieRow from '../components/MovieRow.jsx';
import MovieModal from '../components/MovieModal.jsx';

const GENRE_ROWS = ['Action', 'Comedy', 'Horror', 'Sci-Fi', 'Drama'];

function Home({ query, watchlist, toggleList }) {
  const [selected, setSelected] = useState(null);

  const term = query.trim().toLowerCase();
  const results = term
    ? movies.filter(
        (m) =>
          m.title.toLowerCase().includes(term) ||
          m.description.toLowerCase().includes(term) ||
          m.genres.some((g) => g.toLowerCase().includes(term))
      )
    : [];

  const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <main className="page">
      {term ? (
        <div className="page-content search-results">
          <h2 className="row-title">Results for “{query}”</h2>
          {results.length === 0 ? (
            <p className="empty">No movies found.</p>
          ) : (
            <div className="grid">
              {results.map((m) => (
                <MovieRow key={m.id} title="" movies={[m]} onSelect={setSelected} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <Hero movie={movies[0]} onSelect={setSelected} />
          <div className="page-content">
            <MovieRow title="Trending Now" movies={trending} onSelect={setSelected} />
            {GENRE_ROWS.map((genre) => (
              <MovieRow
                key={genre}
                title={genre}
                movies={movies.filter((m) => m.genres.includes(genre))}
                onSelect={setSelected}
              />
            ))}
          </div>
        </>
      )}

      {selected && (
        <MovieModal
          movie={selected}
          inList={watchlist.includes(selected.id)}
          onToggleList={toggleList}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}

export default Home;