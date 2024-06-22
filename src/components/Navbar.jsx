import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const urlPages = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Post',
    href: '/posts',
  },
  {
    label: 'Contatti',
    href: '/contacts',
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <menu>
          {urlPages.map(({ label, href }, i) => (
            <li key={`urlPage${i}`}>
              <NavLink to={href}>{label}</NavLink>
            </li>
          ))}
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
