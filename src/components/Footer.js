import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Footer() {
  const { navigate } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">CCC</div>
              <div className="logo-text">Crypto<span>Commerce</span> Co</div>
            </div>
            <p>Bridging traditional online shopping with blockchain innovation. Building the decentralized future of e-commerce from the Philippines to the world.</p>
            <div className="social-links" style={{ marginTop: '20px' }}>
              <a className="social-link" href="https://t.me/cryptocommerce_co" target="_blank" rel="noreferrer" title="Telegram">✈</a>
              <a className="social-link" href="https://www.linkedin.com/company/cryptocommerce-co/" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
              <a className="social-link" href="mailto:support.cco@cryptocommerce.cloud" title="Email">✉</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a onClick={() => navigate('home')}>CryptoCart</a></li>
              <li><a onClick={() => navigate('documentation')}>White Paper</a></li>
              <li><a onClick={() => navigate('documentation')}>Tokenomics</a></li>
              <li><a onClick={() => navigate('documentation')}>Roadmap</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a onClick={() => navigate('about')}>About Us</a></li>
              <li><a onClick={() => navigate('insights')}>Insights</a></li>
              <li><a onClick={() => navigate('careers')}>Careers</a></li>
              <li><a onClick={() => navigate('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://cryptocommerce.nuclino-site.com/White%20Paper-2a469bca-2c45-415b-b54c-9faffe43d791" target="_blank" rel="noreferrer">Documentation</a></li>
              <li><a href="https://cryptocommerce.nuclino-site.com/Pitch%20Deck-c7f00010-c5f9-486c-b8a0-a8fbd7af58bb" target="_blank" rel="noreferrer">Pitch Deck</a></li>
              <li><a href="https://www.jotform.com/form/253523983500153" target="_blank" rel="noreferrer">Apply Now</a></li>
              <li><a href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">Schedule Meeting</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 CryptoCommerce Co. All rights reserved. · Philippines</span>
          <span style={{ color: 'var(--accent)', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
            Secure · Transparent · Borderless
          </span>
        </div>
      </div>
    </footer>
  );
}
