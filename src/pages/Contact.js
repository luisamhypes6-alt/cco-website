import React from 'react';

const contactMethods = [
  {
    icon: '✈️',
    title: 'Telegram',
    subtitle: 'Fastest Response',
    value: '@cryptocommerce_co',
    link: 'https://t.me/cryptocommerce_co',
    desc: 'Join our Telegram for real-time updates, support, and community discussions.',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    subtitle: 'Professional Inquiries',
    value: 'CryptoCommerce Co',
    link: 'https://www.linkedin.com/company/cryptocommerce-co/',
    desc: 'Connect with us on LinkedIn for partnership and business development conversations.',
  },
  {
    icon: '✉️',
    title: 'Email',
    subtitle: 'General Support',
    value: 'support.cco@cryptocommerce.cloud',
    link: 'mailto:support.cco@cryptocommerce.cloud',
    desc: 'For detailed inquiries, partnerships, media, or investor relations — email us directly.',
  },
  {
    icon: '📅',
    title: 'Schedule a Meeting',
    subtitle: 'Book via Calendly',
    value: 'Book a 30-min session',
    link: 'https://calendly.com/hire-cco-cryptocommerce/new-meeting',
    desc: 'Schedule a one-on-one session with our team for demos, partnerships, or investment discussions.',
  },
];

const faqs = [
  { q: 'What is CryptoCart?', a: 'CryptoCart is CryptoCommerce Co\'s flagship product — a platform for building decentralized e-commerce storefronts that accept Web3 wallet payments via smart contracts.' },
  { q: 'How do I become a merchant on CryptoCart?', a: 'Connect your Web3 wallet, configure your store settings, and you\'re live. No bank account or payment processor required. Contact us for onboarding assistance.' },
  { q: 'What blockchains does CryptoCommerce Co support?', a: 'We currently support Ethereum, BNB Chain, and Polygon, with additional chain integrations on our Q2 2026 roadmap.' },
  { q: 'How can I invest in or partner with CryptoCommerce Co?', a: 'Reach out via email or book a meeting through Calendly. Our business development team handles all investor and partnership inquiries.' },
  { q: 'Is CryptoCommerce Co regulated?', a: 'CryptoCommerce Co is incorporated in the Philippines and operates in compliance with applicable Philippine and international fintech regulations. We are actively engaging with regulators as the Web3 commerce space evolves.' },
];

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Get In Touch</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
              Let's <span className="accent">Connect</span>
            </h1>
            <p className="hero-desc">
              Whether you're a merchant, developer, investor, or journalist — we're here to help and connect with you.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CONTACT METHODS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">We're Here to <span>Help</span></h2>
          </div>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
            {contactMethods.map(c => (
              <a
                key={c.title}
                href={c.link}
                target={c.link.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                className="contact-item"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <h3>{c.title}</h3>
                    <span style={{ fontSize: '11px', color: 'var(--accent)', fontFamily: 'Space Mono, monospace' }}>{c.subtitle}</span>
                  </div>
                  <a href={c.link} target="_blank" rel="noreferrer" style={{ fontWeight: '600', fontSize: '13px', display: 'block', marginBottom: '6px' }}>{c.value}</a>
                  <p>{c.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* LOCATION */}
          <div className="highlight-box" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🇵🇭</div>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Philippines Headquarters</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '0' }}>
              CryptoCommerce Co is proudly headquartered in the Philippines — Southeast Asia's rising tech and fintech hub.
              Our team operates globally with a remote-first culture, while our roots remain in the vibrant Philippine startup ecosystem.
            </p>
          </div>

          {/* FAQ */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common <span>Questions</span></h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map(f => (
              <div key={f.q} className="card" style={{ padding: '24px 28px' }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '10px' }}>
                  Q: {f.q}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--bg2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Ready to Start?</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Book a <span>Meeting</span> Today
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 32px' }}>
            Our team is ready to walk you through CryptoCart, discuss partnership opportunities, or answer any questions you have about the CCC ecosystem.
          </p>
          <a className="btn btn-primary" href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">
            📅 Schedule on Calendly
          </a>
        </div>
      </section>
    </>
  );
}
