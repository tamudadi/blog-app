import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        Blog
      </Link>
      <Link to="/contact" className="header-link">
        お問い合わせ
      </Link>
    </header>
  );
}

export default Header;
