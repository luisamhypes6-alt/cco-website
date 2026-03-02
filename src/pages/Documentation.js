import React, { useState } from 'react';

const tokenAllocation = [
  { label: 'Community & Ecosystem', pct: 35, color: '#00aaff' },
  { label: 'Team & Founders', pct: 20, color: '#0066cc' },
  { label: 'Private Sale', pct: 15, color: '#f0b429' },
  { label: 'Public Sale', pct: 10, color: '#22c55e' },
  { label: 'Liquidity & Market Making', pct: 10, color: '#a855f7' },
  { label: 'Advisors & Partners', pct: 5, color: '#ec4899' },
  { label: 'Reserve Fund', pct: 5, color: '#06b6d4' },
];

const roadmapPhases = [
  {
    phase: 'Phase 1 — Foundation',
    period: 'Q1–Q2 2026',
    title: 'Core Infrastructure',
    items: ['Company incorporation in Philippines', 'Core team assembly', 'Smart contract architecture design', 'CryptoCart MVP development', 'Internal security audits'],
    status: 'active',
  },
  {
    phase: 'Phase 2 — Launch',
    period: 'Q3–Q4 2026',
    title: 'Product Launch & Token',
    items: ['CryptoCart public beta launch', 'CCC token generation event (TGE)', 'Private sale rounds', 'Merchant onboarding program', 'First exchange listings'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 3 — Growth',
    period: 'Q1–Q2 2026',
    title: 'Ecosystem Expansion',
    items: ['Multi-chain bridge integration', 'Public sale launch', 'CCC staking & governance launch', 'Partnership program with Philippine businesses', 'Mobile app launch'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 4 — Scale',
    period: 'Q3–Q4 2027',
    title: 'Global Scaling',
    items: ['Expansion to SEA markets (Indonesia, Vietnam, Thailand)', 'Enterprise merchant solutions', 'NFT marketplace integration', 'Cross-border remittance features', 'Regulatory compliance expansion'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 5 — Decentralization',
    period: '2028+',
    title: 'Full Protocol Decentralization',
    items: ['Full DAO governance transfer', 'Protocol-level decentralization', 'Global market penetration', 'DeFi lending integration for merchants', 'Layer 2 native deployment'],
    status: 'upcoming',
  },
];

const sections = ['whitepaper', 'tokenomics', 'roadmap', 'pitchdeck'];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('whitepaper');

  return (
    <>
      {/* HEADER */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Documentation Hub</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="accent">Technical</span> Documentation
            </h1>
            <p className="hero-desc">
              Deep-dive into the CryptoCommerce Co protocol — white paper, tokenomics, roadmap, and pitch deck.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* LAYOUT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Sidebar */}
            <div className="docs-nav">
              <h3>Contents</h3>
              <ul>
                {[
                  { key: 'whitepaper', label: '📄 White Paper' },
                  { key: 'tokenomics', label: '🪙 Tokenomics' },
                  { key: 'roadmap', label: '🗺️ Roadmap' },
                  { key: 'pitchdeck', label: '📊 Pitch Deck' },
                ].map(s => (
                  <li key={s.key}>
                    <a
                      className={activeSection === s.key ? 'active' : ''}
                      onClick={() => setActiveSection(s.key)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>External Links</div>
                <ul>
                  {[
                    { label: 'Full White Paper', href: 'https://cryptocommerce.nuclino-site.com/White%20Paper-2a469bca-2c45-415b-b54c-9faffe43d791' },
                    { label: 'Pitch Deck', href: 'https://cryptocommerce.nuclino-site.com/Pitch%20Deck-c7f00010-c5f9-486c-b8a0-a8fbd7af58bb' },
                    { label: 'Tokenomics Detail', href: 'https://cryptocommerce.nuclino-site.com/Tokenomics-ccb1fef2-fb34-4a10-aa75-581f6bf125a9' },
                    { label: 'Full Roadmap', href: 'https://cryptocommerce.nuclino-site.com/Roadmap-aaa3f685-00b2-4b5d-abe1-7e966eaf68ca' },
                  ].map(l => (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>{l.label} ↗</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div>
              {activeSection === 'whitepaper' && (
                <div className="doc-section">
                  <h2>📄 White Paper</h2>
                  <p>The CryptoCommerce Co White Paper presents the technical and economic framework for a fully decentralized e-commerce ecosystem, powered by blockchain technology and governed by the CCC token community.</p>

                  <h3>Executive Summary</h3>
                  <p>The global e-commerce market generates trillions of dollars annually, yet is dominated by a handful of centralized platforms that extract significant rents from merchants, restrict access to certain geographies, and maintain opaque data practices that disadvantage sellers and buyers alike.</p>
                  <p>CryptoCommerce Co proposes a decentralized alternative: an open, permissionless commerce infrastructure built on programmable smart contracts, enabling peer-to-peer transactions without the need for intermediaries, with transparent fee structures and immutable transaction records.</p>

                  <h3>Problem Statement</h3>
                  <div className="highlight-box">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {[
                        { title: 'High Platform Fees', desc: 'Centralized platforms charge 10-30% fees, drastically reducing merchant margins.' },
                        { title: 'Geographic Exclusion', desc: 'Banking requirements exclude billions of potential merchants and buyers globally.' },
                        { title: 'Payment Censorship', desc: 'Platforms can freeze funds or deplatform merchants without recourse or appeal.' },
                        { title: 'Data Exploitation', desc: 'Merchant and customer data is harvested and monetized without consent or compensation.' },
                      ].map(p => (
                        <div key={p.title}>
                          <div style={{ color: 'var(--text)', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>⚠️ {p.title}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{p.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3>The CryptoCommerce Solution</h3>
                  <p>Our platform introduces a suite of decentralized commerce tools anchored by CryptoCart — a storefront builder that enables anyone with a Web3 wallet to launch a fully functional online shop. Payments flow directly between buyer and seller wallets via audited smart contracts, with optional escrow protection. No banks. No intermediaries. No censorship.</p>

                  <h3>Technical Architecture</h3>
                  <table className="doc-table">
                    <thead>
                      <tr><th>Layer</th><th>Technology</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Blockchain</td><td>EVM-compatible (ETH, BNB, MATIC)</td><td>Transaction settlement & smart contracts</td></tr>
                      <tr><td>Smart Contracts</td><td>Solidity, audited by third parties</td><td>Escrow, payments, governance</td></tr>
                      <tr><td>Storage</td><td>IPFS / Arweave</td><td>Decentralized product catalog & media</td></tr>
                      <tr><td>Identity</td><td>ENS / DID standards</td><td>Wallet-based merchant identity</td></tr>
                      <tr><td>Frontend</td><td>React / Web3.js</td><td>Merchant & buyer interface</td></tr>
                    </tbody>
                  </table>

                  <p style={{ marginTop: '24px' }}>
                    <a href="https://cryptocommerce.nuclino-site.com/White%20Paper-2a469bca-2c45-415b-b54c-9faffe43d791" target="_blank" rel="noreferrer" className="btn btn-primary">
                      Read Full White Paper ↗
                    </a>
                  </p>
                </div>
              )}

              {activeSection === 'tokenomics' && (
                <div className="doc-section">
                  <h2>🪙 Tokenomics — CCC Token</h2>
                  <p>The CCC (CryptoCommerce Co) token is the native utility and governance token of the CryptoCommerce protocol. It powers merchant incentives, platform governance, staking rewards, and access to premium features.</p>

                  <h3>Token Overview</h3>
                  <div className="highlight-box">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                      {[
                        { label: 'Token Name', value: 'CCC Token' },
                        { label: 'Symbol', value: 'CCC' },
                        { label: 'Total Supply', value: '1,000,000,000' },
                        { label: 'Standard', value: 'ERC-20' },
                      ].map(i => (
                        <div key={i.label}>
                          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '16px', fontWeight: '700', color: 'var(--accent)', marginBottom: '4px' }}>{i.value}</div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>{i.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3>Token Allocation</h3>
                  {tokenAllocation.map(t => (
                    <div className="token-bar-wrap" key={t.label}>
                      <div className="token-bar-label">
                        <span>{t.label}</span>
                        <strong>{t.pct}%</strong>
                      </div>
                      <div className="token-bar">
                        <div className="token-bar-fill" style={{ width: `${t.pct}%`, background: `linear-gradient(90deg, ${t.color}, ${t.color}99)` }}></div>
                      </div>
                    </div>
                  ))}

                  <h3>Token Utility</h3>
                  <div className="grid-2" style={{ marginTop: '16px' }}>
                    {[
                      { icon: '🗳️', title: 'Governance', desc: 'Vote on protocol upgrades, fee parameters, and treasury allocation.' },
                      { icon: '💎', title: 'Staking', desc: 'Stake CCC to earn yield from platform transaction fees.' },
                      { icon: '🚀', title: 'Premium Features', desc: 'Unlock advanced merchant tools, analytics, and priority support.' },
                      { icon: '💳', title: 'Payment Discounts', desc: 'Pay platform fees in CCC at a significant discount vs. other tokens.' },
                    ].map(u => (
                      <div className="card" key={u.title} style={{ padding: '20px' }}>
                        <div style={{ fontSize: '24px', marginBottom: '10px' }}>{u.icon}</div>
                        <div className="card-title" style={{ fontSize: '14px', marginBottom: '6px' }}>{u.title}</div>
                        <div className="card-desc" style={{ fontSize: '13px' }}>{u.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p style={{ marginTop: '32px' }}>
                    <a href="https://cryptocommerce.nuclino-site.com/Tokenomics-ccb1fef2-fb34-4a10-aa75-581f6bf125a9" target="_blank" rel="noreferrer" className="btn btn-primary">
                      Full Tokenomics Document ↗
                    </a>
                  </p>
                </div>
              )}

              {activeSection === 'roadmap' && (
                <div className="doc-section">
                  <h2>🗺️ Roadmap</h2>
                  <p>CryptoCommerce Co's development roadmap is structured in five phases, taking the platform from initial infrastructure to full protocol decentralization and global commerce dominance.</p>

                  <div style={{ marginTop: '40px' }} className="timeline">
                    {roadmapPhases.map((r) => (
                      <div className="timeline-item" key={r.phase}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                          <span className="timeline-phase">{r.phase} · {r.period}</span>
                          <span style={{
                            padding: '2px 10px',
                            borderRadius: '100px',
                            fontSize: '11px',
                            fontFamily: 'Space Mono, monospace',
                            background: r.status === 'complete' ? 'rgba(34,197,94,0.15)' : r.status === 'active' ? 'rgba(0,170,255,0.15)' : 'rgba(100,100,150,0.15)',
                            color: r.status === 'complete' ? '#22c55e' : r.status === 'active' ? 'var(--accent)' : 'var(--text-muted)',
                            border: `1px solid ${r.status === 'complete' ? '#22c55e50' : r.status === 'active' ? 'var(--border-bright)' : 'transparent'}`,
                          }}>
                            {r.status === 'complete' ? '✓ Complete' : r.status === 'active' ? '⚡ In Progress' : '◦ Upcoming'}
                          </span>
                        </div>
                        <div className="timeline-title">{r.title}</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                          {r.items.map(item => (
                            <span key={item} style={{
                              fontSize: '12px',
                              padding: '4px 12px',
                              borderRadius: '6px',
                              background: 'var(--bg3)',
                              border: '1px solid var(--border)',
                              color: 'var(--text-muted)',
                            }}>
                              {r.status === 'complete' ? '✓ ' : ''}{item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p style={{ marginTop: '32px' }}>
                    <a href="https://cryptocommerce.nuclino-site.com/Roadmap-aaa3f685-00b2-4b5d-abe1-7e966eaf68ca" target="_blank" rel="noreferrer" className="btn btn-primary">
                      View Full Roadmap ↗
                    </a>
                  </p>
                </div>
              )}

              {activeSection === 'pitchdeck' && (
                <div className="doc-section">
                  <h2>📊 Pitch Deck</h2>
                  <p>CryptoCommerce Co's investor pitch deck provides a compelling overview of the market opportunity, our competitive advantages, team, and financial projections for decentralized commerce infrastructure.</p>

                  <h3>Investment Highlights</h3>
                  <div className="grid-2" style={{ marginTop: '16px' }}>
                    {[
                      { icon: '📈', title: 'Massive Market', desc: 'The global e-commerce market exceeds $6T annually. Web3 commerce is projected to capture 15% by 2030.' },
                      { icon: '🏆', title: 'First Mover in SEA', desc: 'CryptoCommerce Co is the leading decentralized commerce platform in Southeast Asia, with Philippine market leadership.' },
                      { icon: '🔒', title: 'Defensible Moats', desc: 'Smart contract IP, growing merchant network effects, and the CCC token ecosystem create lasting competitive advantages.' },
                      { icon: '💰', title: 'Revenue Model', desc: 'Protocol fees, premium merchant subscriptions, CCC token staking, and B2B white-label solutions provide diversified revenue.' },
                    ].map(h => (
                      <div className="card" key={h.title} style={{ padding: '24px' }}>
                        <div style={{ fontSize: '28px', marginBottom: '12px' }}>{h.icon}</div>
                        <div className="card-title">{h.title}</div>
                        <div className="card-desc" style={{ fontSize: '13px' }}>{h.desc}</div>
                      </div>
                    ))}
                  </div>

                  <h3>Market Opportunity</h3>
                  <table className="doc-table">
                    <thead>
                      <tr><th>Market</th><th>Current Size</th><th>2030 Projection</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Global E-Commerce</td><td>$6.2T</td><td>$9.8T</td></tr>
                      <tr><td>SEA E-Commerce</td><td>$230B</td><td>$600B</td></tr>
                      <tr><td>Web3 Commerce</td><td>$12B</td><td>$1.2T</td></tr>
                      <tr><td>Crypto Payments</td><td>$48B</td><td>$350B</td></tr>
                    </tbody>
                  </table>

                  <div className="highlight-box" style={{ marginTop: '32px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Interested in Investing?</div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>Schedule a meeting with our team to access the full pitch deck and discuss investment opportunities.</p>
                      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer" className="btn btn-primary">
                          📅 Book Investor Meeting
                        </a>
                        <a href="https://cryptocommerce.nuclino-site.com/Pitch%20Deck-c7f00010-c5f9-486c-b8a0-a8fbd7af58bb" target="_blank" rel="noreferrer" className="btn btn-outline">
                          View Pitch Deck ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
