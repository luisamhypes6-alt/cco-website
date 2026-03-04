import React from 'react';

const values = [
  { icon: '🔐', title: 'Security First', desc: 'Every product is built with cryptographic security at its core, ensuring user funds and data are protected at all times.' },
  { icon: '🌐', title: 'Transparency', desc: 'All transactions are recorded on-chain, creating an immutable, publicly verifiable record of commerce activity.' },
  { icon: '🚀', title: 'Innovation', desc: 'We continuously push the boundaries of what decentralized commerce can achieve, shipping new features driven by community needs.' },
  { icon: '🤝', title: 'Community', desc: 'CC token holders govern the platform. Every major decision is put to the community, ensuring the protocol evolves for its users.' },
];

const team = [
  { initials: 'CEO', name: 'Ralph Alexis Torres', avatar: 'ralph.png', role: 'CEO & Co-Founder', bio: 'Visionary leader driving CryptoCommerce Co\'s mission to decentralize global e-commerce through blockchain technology.' },
  { initials: 'CBO', name: 'Renzel Gallon', avatar: 'renzel.png', role: 'CBO & Co-Founder', bio: 'Blockchain architect with deep expertise in smart contract development, DeFi protocols, and Web3 infrastructure.' },
  { initials: 'CMO', name: 'Veronica De Roxas', avatar: 'veronica.png', role: 'Head of Recruiters', bio: 'Talent acquisition leader focused on scaling CryptoCommerce’s team and strengthening our global network of top recruiters and candidates.' },
  { initials: 'CFO', name: 'Danica Justo', avatar: 'danica.png', role: 'Senior Recruiter', bio: 'Experienced senior recruiter dedicated to identifying top talent and building strong candidate pipelines to support CryptoCommerce’s growth and innovation.' },
];

const advisors = [
  { initials: 'ADV', name: 'Oleksandr Majdanyk', avatar: 'oleksandr.png', role: 'Web3 Strategy Advisor', bio: 'Veteran blockchain entrepreneur with multiple successful DeFi and Web3 product launches across global markets.' },
  { initials: 'ADV', name: 'Pavlo Slavskyi', avatar: 'pavlo.png', role: 'E-Commerce Advisor', bio: 'Former executive at leading Southeast Asian e-commerce platforms with deep retail and marketplace expertise.' },
  { initials: 'ADV', name: 'Denis Komendantov', avatar: 'denis.png', role: 'Legal & Compliance Advisor', bio: 'Specialist in Philippine and international fintech regulation, cryptocurrency law, and corporate compliance.' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="container">
          <div className="hero-content fade-up" style={{ maxWidth: '720px' }}>
            <div className="hero-badge">About CryptoCommerce Co</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Bridging <span className="accent">Traditional Shopping</span><br />
              with <span className="gold">Blockchain Innovation</span>
            </h1>
            <p className="hero-desc">
              Founded in the Philippines, CryptoCommerce Co is on a mission to democratize global commerce through decentralization —
              making secure, transparent, and borderless e-commerce accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Why We <span>Exist</span></h2>
              <p className="section-desc" style={{ marginBottom: '20px' }}>
                Traditional e-commerce is broken. High platform fees, payment processor gatekeeping, geographic banking restrictions,
                and opaque data practices have long disadvantaged small merchants and underserved communities.
              </p>
              <p className="section-desc" style={{ marginBottom: '20px' }}>
                CryptoCommerce Co was founded to change this. By building commerce tools on blockchain infrastructure, we eliminate
                intermediaries and return power to merchants and buyers. Our platform is Secure, Transparent, and Borderless —
                by design, not by promise.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="tag">🔐 Secure</span>
                <span className="tag">🔍 Transparent</span>
                <span className="tag">🌐 Borderless</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {values.map(v => (
                <div className="card" key={v.title} style={{ padding: '24px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
                  <div className="card-title" style={{ fontSize: '14px', marginBottom: '8px' }}>{v.title}</div>
                  <div className="card-desc" style={{ fontSize: '13px' }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FOUNDATION */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Company Foundation</span>
            <h2 className="section-title">Built in the <span>Philippines</span>, for the World</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              CryptoCommerce Co was incorporated in the Philippines — one of Southeast Asia's fastest-growing technology hubs.
              With a young, digitally savvy population and a thriving startup ecosystem, the Philippines is the perfect launchpad for the Web3 commerce revolution.
            </p>
          </div>

          <div className="highlight-box" style={{ textAlign: 'center', marginBottom: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { icon: '🇵🇭', label: 'Headquarters', value: 'Philippines' },
                { icon: '⛓️', label: 'Technology', value: 'Blockchain / Web3' },
                { icon: '🌏', label: 'Market Focus', value: 'Global Commerce' },
              ].map(i => (
                <div key={i.label}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>{i.icon}</div>
                  <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>{i.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* LEADERSHIP TEAM */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet the <span>Team</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Our leadership team combines deep blockchain expertise with proven e-commerce experience,
              united by a shared vision of a decentralized commercial future.
            </p>
          </div>
          <div className="grid-4">
            {team.map(m => (
              <div className="card team-card" key={m.role}>
                <div className="team-avatar" style={{
                  backgroundImage: `url(${m.avatar})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundOrigin: 'border-box'
                }}></div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ADVISORY TEAM */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Advisory Board</span>
            <h2 className="section-title">Our <span>Advisors</span></h2>
          </div>
          <div className="grid-3">
            {advisors.map(a => (
              <div className="card team-card" key={a.role}>
                <div className="team-avatar" style={{
                  backgroundImage: `url(${a.avatar})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundOrigin: 'border-box'
                }}></div>
                <div className="team-name">{a.name}</div>
                <div className="team-role">{a.role}</div>
                <div className="team-bio">{a.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
