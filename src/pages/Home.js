import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const features = [
  { icon: '🛒', title: 'CryptoCart', desc: 'Build fully decentralized e-commerce storefronts powered by Web3 wallets and smart contracts. Accept crypto natively — no intermediaries.' },
  { icon: '🔐', title: 'Trustless Payments', desc: 'Every transaction secured by blockchain. Smart contract escrow protects buyers and sellers, eliminating fraud and chargebacks permanently.' },
  { icon: '🌐', title: 'Borderless Commerce', desc: 'Sell globally without banking restrictions. Any wallet, any country, any currency — the decentralized marketplace has no borders.' },
  { icon: '📊', title: 'On-Chain Analytics', desc: 'Real-time, transparent transaction data recorded immutably on-chain. Merchants gain unmatched insight into their storefront performance.' },
  { icon: '🪙', title: 'CCC Token', desc: 'Fuel the ecosystem with our native token. Stake, earn, govern, and unlock premium features across all CryptoCommerce Co products.' },
  { icon: '🔗', title: 'Multi-Chain Support', desc: 'Deploy on Ethereum, BNB Chain, Polygon, and more. Our cross-chain bridge enables seamless interoperability across all major networks.' },
];

const useCases = [
  { icon: '👗', title: 'Fashion & Apparel', desc: 'Verified provenance, no counterfeit goods, direct-from-brand tokenized ownership.' },
  { icon: '🎮', title: 'Gaming & NFTs', desc: 'In-game asset marketplaces with true ownership and royalties enforced by smart contracts.' },
  { icon: '🍽️', title: 'Food & Local Business', desc: 'Loyalty tokens, transparent supply chain, and direct micro-payments for local merchants.' },
  { icon: '🏗️', title: 'Real Estate & Goods', desc: 'Tokenized asset listings with verifiable ownership, fractional investment, and instant settlement.' },
];

export default function Home() {
  const { navigate } = useContext(ThemeContext);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">🇵🇭 Philippines · Web3 · Blockchain Commerce</div>
            <h1 className="hero-title">
              The Future of<br />
              <span className="accent">Decentralized</span><br />
              <span className="gold">E-Commerce</span>
            </h1>
            <p className="hero-desc">
              CryptoCommerce Co is redefining online commerce with blockchain technology —
              building secure, transparent, and borderless shopping experiences for the digital age.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" onClick={() => navigate('documentation')}>
                📄 Read White Paper
              </a>
              <a className="btn btn-outline" href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">
                📅 Book a Demo
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">Web<span>3</span></span>
                <span className="stat-label">Native Platform</span>
              </div>
              <div className="stat-item">
                <span className="stat-num"><span>Multi</span>-Chain</span>
                <span className="stat-label">Blockchain Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">0<span>%</span></span>
                <span className="stat-label">Intermediary Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CRYPTOCART SPOTLIGHT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Flagship Product</span>
              <h2 className="section-title">Meet <span>CryptoCart</span></h2>
              <p className="section-desc" style={{ marginBottom: '24px' }}>
                CryptoCart is the world's most accessible platform for building decentralized e-commerce storefronts.
                Connect your Web3 wallet, configure your shop, and start selling globally — all without a bank account or payment processor.
              </p>
              <p className="section-desc" style={{ marginBottom: '32px' }}>
                Powered by smart contract escrow, real-time on-chain settlement, and multi-currency support,
                CryptoCart puts merchants fully in control of their commerce.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="tag">Web3 Wallet Integration</span>
                <span className="tag">Smart Contract Escrow</span>
                <span className="tag">Multi-Chain</span>
                <span className="tag">NFT Support</span>
              </div>
            </div>
            <div className="card" style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,50,150,0.15), rgba(0,170,255,0.05))' }}>
              <div style={{ fontSize: '80px', marginBottom: '24px' }}>🛒</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '32px', fontWeight: '900', color: 'var(--accent)', marginBottom: '8px' }}>CryptoCart</div>
              <div style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>Build Decentralized E-Commerce Shops</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'left' }}>
                {['Web3 Wallet Pay', 'Smart Contracts', 'Multi-Currency', 'Zero Chargebacks', 'Global Reach', 'CCC Token'].map(f => (
                  <div key={f} style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Platform Features</span>
            <h2 className="section-title">Everything You Need for <span>Web3 Commerce</span></h2>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div className="card" key={f.title}>
                <div className="card-icon">{f.icon}</div>
                <div className="card-title">{f.title}</div>
                <div className="card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Use Cases</span>
            <h2 className="section-title">Commerce for Every <span>Industry</span></h2>
          </div>
          <div className="grid-4">
            {useCases.map(u => (
              <div className="card" key={u.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{u.icon}</div>
                <div className="card-title">{u.title}</div>
                <div className="card-desc">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'linear-gradient(135deg, rgba(0,80,200,0.12), rgba(0,170,255,0.06))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Get Started Today</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Ready to Build the <span>Future</span>?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Join CryptoCommerce Co and be part of the decentralized commerce revolution.
            Whether you're a merchant, developer, or investor — there's a place for you here.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">
              📅 Schedule a Meeting
            </a>
            <a className="btn btn-outline" onClick={() => navigate('documentation')}>
              📄 Explore Documentation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
