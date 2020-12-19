import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavbarList from '../NavbarList';

const Navbar: React.FC = () => {
  const [listItems, setListItems] = useState([
    { id: Math.random(), label: 'Список дел' },
    { id: Math.random(), label: 'Информация' }
  ]);
  return (
    <nav>
      <div className="nav-wrapper blue lighten-3" style={{ padding: '0 30px' }}>
        <NavLink to="/" className="brand-logo">React-TypeScript</NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/todos-page">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about-page">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;