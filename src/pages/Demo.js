import React, { useState } from 'react';

const CURL_COMMAND = `bash <(curl -fsSL https://demo.cryptocommerce.cloud/install.sh)`;

const STEPS = [
  {
    step: '01',
    icon: '💻',
    title: 'Open your Terminal',
    desc: 'Open any terminal on macOS, Linux, or Windows (WSL / Git Bash). No installation required beforehand.',
  },
  {
    step: '02',
    icon: '📋',
    title: 'Paste the Command',
    desc: 'Copy the curl command below and paste it directly into your terminal. It will automatically download and launch the CryptoCart demo environment.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Launch & Explore',
    desc: 'The demo spins up a local CryptoCart storefront at http://localhost:3000. Connect your Web3 wallet and explore the full buying and selling flow.',
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

const REQUIREMENTS = [
  { icon: '🐚', label: 'Bash / zsh shell', note: 'macOS, Linux, or Windows WSL / Git Bash' },
  { icon: '🌐', label: 'curl installed', note: 'Pre-installed on most systems' },
  { icon: '🦊', label: 'MetaMask (optional)', note: 'For the full wallet interaction demo' },
  { icon: '🔌', label: 'Internet connection', note: 'To pull the demo environment' },
];

export default function Demo() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('mac');

  const handleCopy = () => {
    navigator.clipboard.writeText(CURL_COMMAND).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const tabCommands = {
    mac:   `bash <(curl -fsSL https://demo.cryptocommerce.cloud/install.sh)`,
    linux: `bash <(curl -fsSL https://demo.cryptocommerce.cloud/install.sh)`,
    win:   `# In WSL or Git Bash:\nbash <(curl -fsSL https://demo.cryptocommerce.cloud/install.sh)`,
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '70vh', paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container">
          <div className="hero-content fade-up" style={{ maxWidth: '760px' }}>
            <div className="hero-badge">⚡ Live Demo — One Command</div>
            <h1 className="hero-title">
              Try <span className="accent">CryptoCart</span><br />
              on Your Own<br />
              <span className="gold">Machine</span>
            </h1>
            <p className="hero-desc">
              No signups. No cloud dashboards. No waiting. Spin up a fully functional
              CryptoCart decentralized storefront locally in under 60 seconds — with a single
              bash command.
            </p>

            {/* ── COMMAND BOX ── */}
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--border-bright)',
              borderRadius: '14px',
              overflow: 'hidden',
              marginBottom: '32px',
              boxShadow: '0 0 40px rgba(0,170,255,0.12)',
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
                  bash — terminal
                </span>
                <div style={{ width: 52 }} />
              </div>

              {/* OS Tabs */}
              <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border)' }}>
                {[['mac', '🍎 macOS'], ['linux', '🐧 Linux'], ['win', '🪟 Windows']].map(([k, l]) => (
                  <button key={k} onClick={() => setActiveTab(k)} style={{
                    padding: '8px 18px', border: 'none', cursor: 'pointer',
                    fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: '700',
                    letterSpacing: '1px', transition: 'all 0.2s',
                    background: activeTab === k ? 'rgba(0,170,255,0.12)' : 'transparent',
                    color: activeTab === k ? 'var(--accent)' : 'var(--text-muted)',
                    borderBottom: activeTab === k ? '2px solid var(--accent)' : '2px solid transparent',
                  }}>{l}</button>
                ))}
              </div>

              {/* Command */}
              <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <pre style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  color: '#7dd3fc',
                  margin: 0,
                  flex: 1,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  lineHeight: 1.7,
                }}>
                  <span style={{ color: '#86efac' }}>$ </span>{tabCommands[activeTab]}
                </pre>
                <button onClick={handleCopy} style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-bright)',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(0,170,255,0.1)',
                  color: copied ? '#22c55e' : 'var(--accent)',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '12px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s',
                  letterSpacing: '0.5px',
                }}>
                  {copied ? '✓ Copied!' : '⎘ Copy'}
                </button>
              </div>

              {/* Output preview */}
              <div style={{
                padding: '14px 24px 18px',
                background: 'rgba(0,0,0,0.3)',
                borderTop: '1px solid var(--border)',
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                lineHeight: 1.9,
              }}>
                <div style={{ color: '#6ee7b7' }}>✔ Fetching CryptoCart demo environment...</div>
                <div style={{ color: '#93c5fd' }}>✔ Installing dependencies (Node 18, Hardhat, ethers.js)</div>
                <div style={{ color: '#93c5fd' }}>✔ Deploying demo contracts to local testnet...</div>
                <div style={{ color: '#fde68a' }}>✔ Seeding demo storefront with sample products...</div>
                <div style={{ color: '#86efac' }}>🚀 CryptoCart demo running at → http://localhost:3000</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={handleCopy} className="btn btn-primary">
                {copied ? '✓ Copied to Clipboard!' : '⎘ Copy Command'}
              </button>
              <a className="btn btn-outline" href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">
                📅 Prefer a Guided Demo?
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Up and Running in <span>3 Steps</span></h2>
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
              The demo environment is a complete, sandboxed replica of CryptoCart running against
              a local Hardhat testnet — no real funds, full functionality.
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

      {/* ── REQUIREMENTS ── */}
      <section className="section-sm" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">Prerequisites</span>
            <h2 className="section-title">What You <span>Need</span></h2>
          </div>
          <div className="grid-4">
            {REQUIREMENTS.map(r => (
              <div key={r.label} className="card" style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{r.icon}</div>
                <div className="card-title" style={{ fontSize: '13px', marginBottom: '6px' }}>{r.label}</div>
                <div className="card-desc" style={{ fontSize: '12px' }}>{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SECOND COMMAND BLOCK (bottom CTA) ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Ready?</span>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            One Command. <span>Zero Friction.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 36px' }}>
            Launch the full CryptoCart experience locally right now.
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid var(--border-bright)',
            borderRadius: '12px',
            padding: '16px 24px',
            maxWidth: '760px',
            width: '100%',
            boxShadow: '0 0 32px rgba(0,170,255,0.1)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <pre style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '13px',
              color: '#7dd3fc',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}>
              <span style={{ color: '#86efac' }}>$ </span>{CURL_COMMAND}
            </pre>
            <button onClick={handleCopy} className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
              {copied ? '✓ Copied!' : '⎘ Copy'}
            </button>
          </div>

          <div style={{ marginTop: '28px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-outline" href="https://calendly.com/hire-cco-cryptocommerce/new-meeting" target="_blank" rel="noreferrer">
              📅 Book a Live Walkthrough Instead
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
