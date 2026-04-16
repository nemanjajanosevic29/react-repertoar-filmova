import React from 'react';        
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Cinema Repertoar</h1>
      <nav>
        <Link to="/">Pocetna</Link>
        <Link to="/movies">Repertoar</Link>
        <Link to="/about">O nama</Link>
      </nav>
    </header>
  );
}

export default Header;