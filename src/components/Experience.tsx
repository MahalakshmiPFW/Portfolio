import React from 'react';
import { COMMUNITY, EXPERIENCE } from '../pmData';
import { hueColors, usePmTheme } from '../theme';

const Experience: React.FC = () => {
  const { darkMode } = usePmTheme();

  return (
    <section id="experience" data-nav-target data-reveal data-screen-label="Experience" style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 32px 72px' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
          Experience
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 32, margin: 0, letterSpacing: '-0.01em' }}>
          Where the product thinking came from
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {EXPERIENCE.map((job) => (
          <div key={job.org} className="pm-exp-row" style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 24, padding: '22px 0', borderTop: '1px solid var(--pm-hairline)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 88, height: 88, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--pm-hairline)', background: 'var(--pm-chip-bg)', flex: 'none' }}>
                <img src={job.logo} alt={job.org} style={{ width: 88, height: 88, objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--pm-ink-faint)', textAlign: 'center' }}>{job.dates}</div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 12 }}>
                {job.role && <span style={{ fontWeight: 600, fontSize: 16.5 }}>{job.role}</span>}
                <span style={{ fontSize: 14, color: 'var(--pm-ink-soft)' }}>{job.org}</span>
              </div>
              {job.positions ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', paddingLeft: 20 }}>
                  <div style={{ position: 'absolute', left: 8, top: 12, bottom: 12, width: 2, background: 'var(--pm-hairline)', borderRadius: 999 }} />
                  {job.positions.map((position, index) => (
                    <div key={`${job.org}-${position.role}-${position.dates}`} style={{ position: 'relative', paddingLeft: 20 }}>
                      <div style={{ position: 'absolute', left: -16, top: 10, width: 12, height: 12, borderRadius: '50%', background: 'var(--pm-bg)', border: '2px solid var(--pm-accent)' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                        <span style={{ fontWeight: 600, fontSize: 15.5 }}>{position.role}</span>
                        <span style={{ fontSize: 14, color: 'var(--pm-ink-soft)' }}>{position.dates}</span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: 'var(--pm-ink-soft)' }}>
                        {position.bullets.map((bullet) => (
                          <li key={bullet} style={{ marginBottom: 5 }}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: 'var(--pm-ink-soft)' }}>
                  {job.bullets?.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: 5 }}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.recommendations && job.recommendations.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                  {job.recommendations.map((rec) => (
                    <a
                      key={rec.url}
                      href={rec.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--pm-accent)',
                        background: 'var(--pm-accent-soft)',
                        padding: '6px 12px',
                        borderRadius: 999,
                        textDecoration: 'none',
                      }}
                    >
                      📄 {rec.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {COMMUNITY.length > 0 && (
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 14 }}>
            Leadership & Community
          </div>
          <div className="pm-community-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
            {COMMUNITY.map((item) => {
              const colors = hueColors(item.hue, darkMode);
              return (
                <div
                  key={item.org}
                  className="pm-edu-card pm-community-card"
                  style={{ '--pm-tilt': item.tilt, borderRadius: 18, padding: 22, background: colors.card, display: 'flex', alignItems: 'flex-start', gap: 16 } as React.CSSProperties}
                >
                  <div style={{ position: 'relative', width: 60, height: 60, flex: 'none' }}>
                    <svg width="72" height="72" viewBox="0 0 72 72" style={{ position: 'absolute', top: -6, left: -6, pointerEvents: 'none' }}>
                      <circle cx="36" cy="36" r="34" fill="none" stroke={colors.bar} strokeWidth="1.8" strokeDasharray="5 6" strokeLinecap="round" />
                    </svg>
                    <div style={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--pm-hairline)', background: item.logoBg ?? 'var(--pm-bg)' }}>
                      <img src={item.logo} alt={item.org} style={{ width: 60, height: 60, objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
                      <span className="pm-doodle-icon" style={{ fontSize: 15, display: 'inline-block', flex: 'none' }}>{item.icon}</span>
                      <span style={{ fontWeight: 600, fontSize: 15.5, lineHeight: 1.3 }}>{item.org}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--pm-ink-soft)', marginBottom: 8 }}>
                      <div>{item.role}</div>
                      <div>{item.dates}</div>
                    </div>
                    <p style={{ margin: 0, fontSize: 13.5, color: 'var(--pm-ink-soft)', lineHeight: 1.5 }}>{item.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
