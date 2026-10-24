import { useNavigate, useLocation } from 'react-router-dom';

function SearchBar({ query, setQuery }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (e) => {
    setQuery(e.target.value);
    // Searching happens on the Home page, so jump there if needed
    if (pathname !== '/') navigate('/');
  };

  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Search titles, genres..."
      value={query}
      onChange={handleChange}
      aria-label="Search movies"
    />
  );
}

export default SearchBar;