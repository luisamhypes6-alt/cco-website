import React, { useState } from 'react';

const articles = [
  {
    id: 1, icon: '₿', category: 'News', date: 'Feb 28, 2026', readTime: '5 min',
    title: 'CryptoCommerce Co Launches CryptoCart Beta: The Future of Decentralized Shopping is Here',
    excerpt: 'After months of development and community testing, CryptoCommerce Co officially launches CryptoCart in public beta — enabling merchants worldwide to build fully decentralized storefronts powered by Web3 wallets and smart contracts.',
  },
  {
    id: 2, icon: '📊', category: 'Report', date: 'Feb 20, 2026', readTime: '8 min',
    title: 'The State of Blockchain E-Commerce in Southeast Asia: 2025 Annual Report',
    excerpt: 'Our comprehensive analysis of Web3 commerce adoption across Southeast Asia reveals explosive growth in crypto-native transactions, with the Philippines leading the region in merchant adoption rates and transaction volumes.',
  },
  {
    id: 3, icon: '💡', category: 'Opinion', date: 'Feb 14, 2026', readTime: '6 min',
    title: 'Why Traditional Payment Processors Are Failing the Global South — and How Crypto Fixes It',
    excerpt: "Billions of people remain excluded from the global digital economy due to banking access barriers. This op-ed argues that decentralized commerce isn't just a technological upgrade — it's a human rights imperative.",
  },
  {
    id: 4, icon: '🔗', category: 'Report', date: 'Feb 7, 2026', readTime: '10 min',
    title: 'Cross-Chain Commerce: How Multi-Network Support Unlocks Merchant Flexibility',
    excerpt: "Deep-diving into our multi-chain architecture — why supporting Ethereum, BNB Chain, Polygon and more isn't just a technical feature, but a core business necessity for global merchant adoption.",
  },
  {
    id: 5, icon: '🪙', category: 'News', date: 'Jan 30, 2026', readTime: '4 min',
    title: 'CCC Token Utility Expansion: Staking, Governance, and Premium Feature Access Explained',
    excerpt: "The CCC token is more than a currency — it's the backbone of platform governance, merchant incentives, and community rewards. Here's everything you need to know about the expanded token utility framework.",
  },
  {
    id: 6, icon: '🛡️', category: 'Opinion', date: 'Jan 22, 2026', readTime: '7 min',
    title: 'Smart Contract Escrow vs. Traditional Buyer Protection: A Security Comparison',
    excerpt: 'We compare our trustless smart contract escrow system against legacy platform buyer protection schemes, showing how blockchain-enforced agreements deliver superior security guarantees for both merchants and buyers.',
  },
];

const categories = ['All', 'News', 'Report', 'Opinion'];

const categoryColors = { News: '#00aaff', Report: '#f0b429', Opinion: '#22c55e' };

export default function Insights() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Insights & Knowledge</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Explore the Latest in<br />
              <span className="accent">Decentralized E-Commerce</span>
            </h1>
            <p className="hero-desc">
              News, research reports, and opinions from the frontlines of the Web3 commerce revolution.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FILTER + ARTICLES */}
      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: active === c ? 'var(--accent)' : 'var(--border)',
                  background: active === c ? 'var(--accent-glow)' : 'transparent',
                  color: active === c ? 'var(--accent)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  transition: 'all 0.2s',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map(a => (
              <div className="card article-card" key={a.id} style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, var(--bg3), var(--bg2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: `${categoryColors[a.category]}20`,
                    border: `1px solid ${categoryColors[a.category]}50`,
                    color: categoryColors[a.category],
                    fontSize: '11px',
                    fontFamily: 'Space Mono, monospace',
                    fontWeight: '700',
                    letterSpacing: '1px',
                  }}>
                    {a.category}
                  </div>
                  {a.icon}
                </div>
                <div style={{ padding: '24px' }}>
                  <div className="article-meta">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime} read</span>
                  </div>
                  <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', fontWeight: '600', color: 'var(--text)', lineHeight: '1.5', marginBottom: '10px' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '16px' }}>
                    {a.excerpt}
                  </p>
                  <span className="read-more">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* NEWSLETTER */}
      <section className="section-sm" style={{ background: 'var(--bg2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Stay Informed</span>
          <h2 className="section-title">Subscribe to <span>CCC Insights</span></h2>
          <p className="section-desc" style={{ margin: '0 auto 32px' }}>
            Get the latest news, research, and analysis delivered straight to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '12px 20px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none',
                width: '300px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
