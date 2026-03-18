import React from 'react';

const openRoles = [
  { title: 'Chief Technology Officer', dept: 'Product', type: 'Full-time · Remote', desc: 'Lead the technology strategy and innovation at CryptoCommerce Co. Deep expertise in blockchain architecture, scalable systems, and secure crypto solutions required.' },
  { title: 'Lead Blockchain Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Lead development of our smart contract suite. Deep expertise in EVM, DeFi protocols, and security auditing required.' },
  { title: 'Full-Stack Web3 Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Build and maintain CryptoCart\'s React frontend and Web3 integration layer. Experience with ethers.js / wagmi required.' },
  { title: 'Senior Backend Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Lead the design and implementation of robust backend systems. Strong experience in API development, database management, and scalable architecture required.' },
  { title: 'Blockchain & Web3 Advisor', dept: 'Product', type: 'Part-time · Remote', desc: 'Provide strategic guidance on blockchain architecture, Web3 ecosystem positioning, and tokenomics. Strong network in the blockchain, DeFi, and investment community with proven experience in Web3 advisory or operator roles required.' },
];

const perks = [
  { icon: '🌐', title: 'Remote-First', desc: 'Work from anywhere in the world. We trust our team to deliver.' },
  { icon: '🪙', title: 'CC Token Allocation', desc: 'All team members receive CC token vesting packages with competitive terms.' },
  { icon: '📚', title: 'Learning Budget', desc: '$1,500 annual budget for courses, conferences, and certifications.' },
  { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive health coverage for full-time Philippines-based employees.' },
  { icon: '🕹️', title: 'Equipment Stipend', desc: 'Full home-office setup budget provided on day one.' },
  { icon: '🚀', title: 'Equity in a Rocket', desc: 'Join early and be part of the founding team building Web3 commerce.' },
];

export default function Careers() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '55vh', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Join the Team</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
              Build the <span className="accent">Future</span> of<br />
              <span className="gold">Commerce</span> With Us
            </h1>
            <p className="hero-desc">
              We're assembling a world-class team to decentralize global e-commerce. If you're passionate about blockchain,
              Web3, and building products that matter — we want to hear from you.
            </p>
            <a className="btn btn-primary" href="https://www.jotform.com/form/253523983500153" target="_blank" rel="noreferrer">
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PERKS */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Why Join Us</span>
            <h2 className="section-title">Life at <span>CryptoCommerce Co</span></h2>
          </div>
          <div className="grid-3">
            {perks.map(p => (
              <div className="card" key={p.title}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{p.icon}</div>
                <div className="card-title">{p.title}</div>
                <div className="card-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* OPEN ROLES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Open Positions</span>
            <h2 className="section-title">Current <span>Opportunities</span></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
            {openRoles.map(r => (
              <div
                key={r.title}
                className="card"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '15px', fontWeight: '600', color: 'var(--text)' }}>{r.title}</span>
                    <span className="tag" style={{ fontSize: '11px' }}>{r.dept}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--accent)', fontFamily: 'Space Mono, monospace', marginBottom: '8px' }}>{r.type}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{r.desc}</div>
                </div>
                <a
                  href="https://www.jotform.com/form/253523983500153"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Apply →
                </a>
              </div>
            ))}
          </div>

          {/* EMBEDDED JOB FORM */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">Application Form</span>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Ready to <span>Apply</span>?</h2>
            <p className="section-desc" style={{ margin: '0 auto 40px' }}>
              Fill out the form below and our team will get back to you within 3 business days.
            </p>
          </div>

          <div className="iframe-wrap" style={{ borderRadius: '16px', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
            <iframe
              src="https://form.jotform.com/253523983500153"
              title="CryptoCommerce Co Job Application"
              width="100%"
              height="800px"
              frameBorder="0"
              scrolling="yes"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
