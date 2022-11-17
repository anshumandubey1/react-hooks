import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <nav>
      <li className={location.pathname === '/' ? 'active' : 'inactive'}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname === '/counter' ? 'active' : 'inactive'}>
        <Link to="/counter">Counter</Link>
      </li>
      <li className={location.pathname === '/map' ? 'active' : 'inactive'}>
        <Link to="/map">Map</Link>
      </li>
    </nav>
  );
}

export default Header;
