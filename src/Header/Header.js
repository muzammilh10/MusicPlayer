
import './header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Music</a>
        <a href="#about">Podcast</a>
        <a href="#about">Live</a>
        <a href="#about">Radio</a>

      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>

  );
}

export default Header;
