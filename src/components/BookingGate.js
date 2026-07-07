import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const BookingContext = createContext(null);

// hCaptcha site key. Set REACT_APP_HCAPTCHA_SITE_KEY in your environment for
// production; falls back to hCaptcha's public test key (always passes) for local dev.
const HCAPTCHA_SITE_KEY =
  process.env.REACT_APP_HCAPTCHA_SITE_KEY || '10000000-ffff-ffff-ffff-000000000001';

// Consumers call openBooking(url) to request a meeting booking.
// The gate forces an hCaptcha human-verification challenge before the URL is opened.
export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}

export function BookingProvider({ children }) {
  const [pendingUrl, setPendingUrl] = useState(null);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const captchaRef = useRef(null);

  const openBooking = useCallback((url) => {
    setVerified(false);
    setError('');
    setPendingUrl(url);
  }, []);

  const close = useCallback(() => {
    setPendingUrl(null);
    setVerified(false);
    setError('');
    if (captchaRef.current) {
      try { captchaRef.current.resetCaptcha(); } catch (_) { /* noop */ }
    }
  }, []);

  // Continue only fires from a real click, so window.open isn't blocked as a popup.
  const proceed = useCallback(() => {
    if (!verified) return;
    const url = pendingUrl;
    close();
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [verified, pendingUrl, close]);

  // Close on Escape while the modal is open.
  useEffect(() => {
    if (!pendingUrl) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pendingUrl, close]);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {pendingUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Human verification"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(2, 6, 16, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '400px',
              background: 'rgba(6, 14, 28, 0.98)',
              border: '1px solid var(--border-bright)',
              borderRadius: '16px',
              boxShadow: '0 0 60px rgba(0,100,255,0.18)',
              overflow: 'hidden',
            }}
          >
            <div style={{
              padding: '16px 22px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.03)',
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}>
                🔒 Human Verification
              </span>
              <button
                onClick={close}
                aria-label="Cancel"
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1,
                }}
              >×</button>
            </div>

            <div style={{ padding: '24px 22px' }}>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: '0 0 18px',
              }}>
                Complete the check below to confirm you're human and continue to the booking page.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITE_KEY}
                  theme="dark"
                  onVerify={() => { setVerified(true); setError(''); }}
                  onExpire={() => { setVerified(false); setError('Verification expired — please try again.'); }}
                  onError={() => { setVerified(false); setError('Verification failed — please try again.'); }}
                />
              </div>

              {error && (
                <p style={{ color: '#ef4444', fontSize: '12px', margin: '0 0 14px', textAlign: 'center' }}>
                  {error}
                </p>
              )}

              <button
                onClick={proceed}
                disabled={!verified}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  justifyContent: 'center',
                  opacity: verified ? 1 : 0.5,
                  cursor: verified ? 'pointer' : 'not-allowed',
                }}
              >
                Continue →
              </button>
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
