import React from 'react';
import { EXPLORING } from '../pmData';

const About: React.FC = () => {
  return (
    <section data-reveal style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px 72px' }}>
      <div
        className="pm-toolkit-grid"
        style={{
          position: 'relative',
          borderRadius: 22,
          padding: '34px 38px',
          background: 'var(--pm-accent-soft)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 32,
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        <svg width="30" height="30" viewBox="0 0 26 26" style={{ position: 'absolute', top: -12, left: 22, overflow: 'visible' }}>
          <path d="M13 2 L15 10 L23 12 L15 14 L13 22 L11 14 L3 12 L11 10 Z" fill="none" stroke="var(--pm-accent)" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
            A bit more about me
          </div>
          <p style={{ fontSize: 15.5, color: 'var(--pm-ink-soft)', margin: '0 0 14px' }}>
            I like a messy problem more than a clean one — figuring out who actually needs what, and why three people describe the same request three different ways.
          </p>
          <p style={{ fontSize: 15, color: 'var(--pm-ink-soft)', margin: '0 0 22px' }}>
            Off-screen? You'll find me harmonizing as a soprano <span className="pm-doodle-icon" style={{ display: 'inline-block' }}>🎶</span>, getting lost in fantasy worlds{' '}
            <span className="pm-doodle-icon" style={{ display: 'inline-block' }}>📚</span>, or hunting for the perfect white mocha <span className="pm-doodle-icon" style={{ display: 'inline-block' }}>☕</span>.
          </p>

          <div style={{ display: 'flex', gap: 22 }}>
            <div className="pm-polaroid-1" style={{ background: 'var(--pm-bg)', padding: '10px 10px 26px', borderRadius: 4, boxShadow: '0 10px 20px -12px var(--pm-nav-shadow)' }}>
              <div style={{ width: 120, height: 120, overflow: 'hidden', background: 'var(--pm-chip-bg)' }}>
                <img src="/assets/images/IMG_7852.jpeg" alt="adventures" style={{ width: 120, height: 120, objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'center', fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 11.5, color: 'var(--pm-ink-faint)', marginTop: 8 }}>
                adventures 🌍
              </div>
            </div>
            <div className="pm-polaroid-2" style={{ background: 'var(--pm-bg)', padding: '10px 10px 26px', borderRadius: 4, boxShadow: '0 10px 20px -12px var(--pm-nav-shadow)', marginTop: 14 }}>
              <div style={{ width: 120, height: 120, overflow: 'hidden', background: 'var(--pm-chip-bg)' }}>
                <img src="/assets/images/IMG_9567.jpeg" alt="team wins" style={{ width: 120, height: 120, objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'center', fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 11.5, color: 'var(--pm-ink-faint)', marginTop: 8 }}>
                team wins 🤝
              </div>
            </div>
          </div>
        </div>

        <svg width="2" height="120" viewBox="0 0 2 120" className="pm-about-divider" style={{ overflow: 'visible' }}>
          <path d="M1 2 Q 3 30, 1 60 T 1 118" fill="none" stroke="var(--pm-accent)" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" opacity="0.5" />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span className="pm-doodle-icon" style={{ fontSize: 14, display: 'inline-block' }}>🧭</span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)' }}>Currently exploring</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {EXPLORING.map((item) => (
                <span
                  key={item}
                  className="pm-chip"
                  style={{ fontSize: 13, padding: '7px 13px', borderRadius: 999, background: 'var(--pm-bg)', border: '1px solid var(--pm-hairline)', color: 'var(--pm-ink)', whiteSpace: 'nowrap' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pm-code-block" style={{ borderRadius: 14, background: 'oklch(20% 0.015 260)', padding: '18px 20px', boxShadow: '0 16px 32px -18px var(--pm-nav-shadow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(65% 0.18 20)', display: 'inline-block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(80% 0.15 85)', display: 'inline-block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(70% 0.16 145)', display: 'inline-block' }} />
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'oklch(60% 0.02 260)', letterSpacing: '0.04em' }}>ME.JS</span>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11.5, lineHeight: 1.7, color: 'oklch(85% 0.01 260)' }}>
              <div><span style={{ color: 'oklch(70% 0.18 320)' }}>const</span> <span style={{ color: 'oklch(78% 0.15 200)' }}>me</span> = {'{'}</div>
              <div style={{ paddingLeft: 16 }}><span style={{ color: 'oklch(75% 0.16 25)' }}>askedWhy</span>: <span style={{ color: 'oklch(78% 0.14 145)' }}>true</span>,</div>
              <div style={{ paddingLeft: 16 }}><span style={{ color: 'oklch(75% 0.16 25)' }}>shipsClean</span>: <span style={{ color: 'oklch(78% 0.14 145)' }}>true</span>,</div>
              <div style={{ paddingLeft: 16 }}><span style={{ color: 'oklch(75% 0.16 25)' }}>runsOn</span>: [<span style={{ color: 'oklch(78% 0.14 145)' }}>"matcha"</span>, <span style={{ color: 'oklch(78% 0.14 145)' }}>"good questions"</span>],</div>
              <div style={{ paddingLeft: 16 }}><span style={{ color: 'oklch(75% 0.16 25)' }}>lookingFor</span>: <span style={{ color: 'oklch(78% 0.14 145)' }}>"2026 grad role"</span></div>
              <div>{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
