import React from 'react';
import { TOOLKIT } from '../pmData';
import { hueColors, usePmTheme } from '../theme';

const Toolkit: React.FC = () => {
  const { darkMode } = usePmTheme();

  return (
    <section id="toolkit" data-nav-target data-reveal data-screen-label="Toolkit" style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 32px 72px' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
          Toolkit
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 32, margin: 0, letterSpacing: '-0.01em' }}>
          What I bring day one
        </h2>
      </div>

      <div className="pm-toolkit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {TOOLKIT.map((group) => {
          const colors = hueColors(group.hue, darkMode);
          return (
            <div
              key={group.title}
              className="pm-toolkit-card"
              style={{ border: `1.5px solid ${colors.border}`, borderRadius: 14, padding: 22, background: colors.card }}
            >
              <div style={{ height: 4, width: 34, borderRadius: 999, background: colors.bar, marginBottom: 14 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="pm-doodle-icon" style={{ fontSize: 16, display: 'inline-block' }}>{group.icon}</span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{group.title}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="pm-toolkit-chip"
                    style={{ fontSize: 12.5, padding: '5px 10px', borderRadius: 7, background: 'var(--pm-chip-bg)', color: 'var(--pm-ink-soft)', display: 'inline-block', whiteSpace: 'nowrap' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Toolkit;
