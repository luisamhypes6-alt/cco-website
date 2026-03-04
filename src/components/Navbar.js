import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';

const navItems = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Insights', key: 'insights' },
  { label: 'Documentation', key: 'documentation' },
  { label: 'Careers', key: 'careers' },
  { label: 'Contact', key: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, navigate, page } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (key) => {
    navigate(key);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" onClick={() => handleNav('home')}>
          <div className="logo-icon"></div>
          <div className="logo-text">Crypto<span>Commerce</span> Co</div>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.key}>
              <a
                className={page === item.key ? 'active' : ''}
                onClick={() => handleNav(item.key)}
              >
                {item.label}
              </a>
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
