import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="text-white bg-[#333] p-7 font-bold flex justify-between">
      <Link to="/">Blog</Link>
      <Link to="/contact">お問い合わせ</Link>
    </header>
  );
}

export default Header;
