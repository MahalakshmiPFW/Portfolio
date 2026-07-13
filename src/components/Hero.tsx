import React from 'react';
import { RESUME_HREF } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="top" data-screen-label="Hero" style={{ maxWidth: 1080, margin: '0 auto', padding: '88px 32px 72px' }}>
      <div className="pm-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 56, alignItems: 'center' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--pm-accent)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 18,
              position: 'relative',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pm-accent)', display: 'inline-block' }} />
            Open to Entry-Level Software Engineer / Product-Adjacent roles
            <svg width="26" height="26" viewBox="0 0 26 26" style={{ position: 'absolute', right: -30, top: -14, overflow: 'visible' }}>
              <path d="M13 2 L15 10 L23 12 L15 14 L13 22 L11 14 L3 12 L11 10 Z" fill="none" stroke="var(--pm-accent)" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="pm-name" style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 58, lineHeight: 1.05, margin: '0 0 22px', letterSpacing: '-0.01em', position: 'relative' }}>
            I ask why it's worth building —{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--pm-accent)', position: 'relative' }}>
              then ship it right.
              <svg width="200" height="14" viewBox="0 0 200 14" style={{ position: 'absolute', left: 0, bottom: -8, width: '100%', height: 14, overflow: 'visible' }}>
                <path d="M2 8 Q 20 2, 38 8 T 74 8 T 110 8 T 146 8 T 182 8" fill="none" stroke="var(--pm-accent)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </em>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--pm-ink-soft)', maxWidth: 560, margin: '0 0 28px' }}>
            Full-stack engineer with two years shipping production features — who's just as comfortable scoping the requirements, weighing tradeoffs, and talking to the people who'll use it. I like sitting where the code and the "why" meet.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={RESUME_HREF}
              download="Mahalakshmi_PM_Resume.pdf"
              style={{ background: 'var(--pm-accent)', color: 'var(--pm-bg)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Download Résumé
            </a>
            <a href="mailto:mahalak@purdue.edu" style={{ border: '1px solid var(--pm-hairline)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14.5 }}>
              mahalak@purdue.edu
            </a>
            <a href="https://www.linkedin.com/in/mahalakshmimahadevan/" target="_blank" rel="noreferrer" style={{ border: '1px solid var(--pm-hairline)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14.5 }}>
              LinkedIn
            </a>
            <a href="https://github.com/MahalakshmiPFW" target="_blank" rel="noreferrer" style={{ border: '1px solid var(--pm-hairline)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14.5 }}>
              GitHub
            </a>
          </div>
        </div>

        <div className="pm-hero-photo" style={{ width: 260, height: 260, position: 'relative', flex: 'none' }}>
          <svg width="284" height="284" viewBox="0 0 284 284" style={{ position: 'absolute', top: -12, left: -12, pointerEvents: 'none' }}>
            <circle cx="142" cy="142" r="136" fill="none" stroke="var(--pm-accent)" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
          </svg>
          <svg width="34" height="34" viewBox="0 0 34 34" style={{ position: 'absolute', top: -14, right: -10, overflow: 'visible' }}>
            <path
              d="M17 28 C 6 20, 3 12, 9 7 C 13 4, 17 7, 17 12 C 17 7, 21 4, 25 7 C 31 12, 28 20, 17 28 Z"
              fill="none"
              stroke="var(--pm-accent)"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ width: 260, height: 260, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--pm-hairline)' }}>
            <img src="/assets/images/Profile.png" alt="Mahalakshmi" style={{ width: 260, height: 260, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
