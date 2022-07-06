import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.css';

const HeaderNav = () => (
  <header className="Header">
    <h1>The Math Magicians</h1>
    <nav>
      <Link className="Active" to="/">Home</Link>
      <Link to="/calculator" className="Middle">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default HeaderNav;
