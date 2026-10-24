import { useState } from 'react';

function MovieModal({ movie, inList, onToggleList, onClose }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={movie.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div
          className="modal-hero"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        >
          <div className="modal-hero-fade">
            <h2 className="modal-title">{movie.title}</h2>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setPlaying(!playing)}>
                {playing ? '❚❚ Pause' : '▶ Play'}
              </button>
              <button className="btn btn-secondary" onClick={() => onToggleList(movie.id)}>
                {inList ? '✓ In My List' : '+ Add to List'}
              </button>
            </div>
          </div>
        </div>

        <div className="modal-body">
          {playing && <p className="now-playing">Now playing (demo)…</p>}
          <p className="hero-meta">
            <span className="rating">★ {movie.rating}</span> · {movie.year}
          </p>
          <p className="modal-desc">{movie.description}</p>
          <p className="modal-genres">
            <span>Genres:</span> {movie.genres.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;