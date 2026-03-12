import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
  { label: 'Documentation', path: '/documentation' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  // { label: '⚡ Demo', path: '/demo' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink className="logo" to="/" onClick={closeMenu}>
          <div className="logo-icon"></div>
          <div className="logo-text">Crypto<span>Commerce</span> Co</div>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {/* <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button> */}
          <a
            className="btn btn-primary"
            href="https://calendly.com/hire-cco-cryptocommerce/new-meeting"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meeting
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
