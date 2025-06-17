import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.body.classList.contains('dark')
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1><Link to="/" className="brand">Sydney Mitchell</Link></h1>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tech">Tech Stack</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/spotlight">Spotlight</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </div>
    </nav>
  );
}