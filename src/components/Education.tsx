import React from 'react';
import { EDUCATION } from '../pmData';
import { hueColors, usePmTheme } from '../theme';

const Education: React.FC = () => {
  const { darkMode } = usePmTheme();

  return (
    <section id="education" data-nav-target data-reveal data-screen-label="Education" style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 32px 88px' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
          Education
        </div>
      </div>

      <div className="pm-edu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {EDUCATION.map((school) => {
          const colors = hueColors(school.hue, darkMode);
          return (
            <div
              key={school.name}
              className="pm-edu-card"
              style={{ '--pm-tilt': school.tilt, borderRadius: 18, padding: 26, background: colors.card, display: 'flex', alignItems: 'center' } as React.CSSProperties}
            >
              <div style={{ flex: 'none', maxWidth: 320 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 10 }}>
                  <span className="pm-doodle-icon" style={{ fontSize: 15, display: 'inline-block', flex: 'none', marginTop: 1 }}>🎓</span>
                  <span style={{ fontWeight: 600, fontSize: 16.5, lineHeight: 1.3, whiteSpace: 'nowrap' }}>{school.name}</span>
                </div>
                <div style={{ fontSize: 14, color: 'var(--pm-ink-soft)', marginBottom: 10 }}>
                  {school.degreeLabel} {school.gpa && <strong style={{ fontWeight: 700, color: 'var(--pm-ink)' }}>{school.gpa}</strong>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--pm-ink-faint)' }}>{school.location} · {school.dates}</div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: 76, height: 76, flex: 'none' }}>
                  <svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: -7, left: -7, pointerEvents: 'none' }}>
                    <circle cx="45" cy="45" r="43" fill="none" stroke={colors.bar} strokeWidth="1.8" strokeDasharray="5 6" strokeLinecap="round" />
                  </svg>
                  <div style={{ width: 76, height: 76, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--pm-hairline)', background: school.logoBg ?? 'var(--pm-bg)' }}>
                    <img src={school.logo} alt={school.name} style={{ width: 76, height: 76, objectFit: 'contain', display: 'block' }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
