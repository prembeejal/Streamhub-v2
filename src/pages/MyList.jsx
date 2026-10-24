import { useState } from 'react';
import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard.jsx';
import MovieModal from '../components/MovieModal.jsx';

function MyList({ watchlist, toggleList }) {
  const [selected, setSelected] = useState(null);
  const saved = movies.filter((m) => watchlist.includes(m.id));

  return (
    <main className="page page-padded">
      <div className="page-content">
        <h2 className="row-title">My List</h2>
        {saved.length === 0 ? (
          <p className="empty">Your list is empty. Add some movies from the Home page.</p>
        ) : (
          <div className="grid">
            {saved.map((m) => (
              <MovieCard key={m.id} movie={m} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

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

export default MyList;