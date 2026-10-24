import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

function Navbar({ query, setQuery }) {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">STREAMHUB</Link>
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/my-list" className={linkClass}>My List</NavLink>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
    </nav>
  );
}

export default Navbar;