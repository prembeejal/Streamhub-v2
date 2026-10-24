import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import MyList from './pages/MyList.jsx';

const STORAGE_KEY = 'streamhub-watchlist';

// Lazy initializer: reads localStorage once, no useEffect needed
function readWatchlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function App() {
  const [query, setQuery] = useState('');
  const [watchlist, setWatchlist] = useState(readWatchlist);

  const toggleList = (id) => {
    const next = watchlist.includes(id)
      ? watchlist.filter((item) => item !== id)
      : [...watchlist, id];
    setWatchlist(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route
          path="/"
          element={<Home query={query} watchlist={watchlist} toggleList={toggleList} />}
        />
        <Route
          path="/my-list"
          element={<MyList watchlist={watchlist} toggleList={toggleList} />}
        />
      </Routes>
    </>
  );
}

export default App;