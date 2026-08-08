import React from 'react';
import { CERTIFICATIONS } from '../pmData';
import { usePmTheme } from '../theme';

const Certifications: React.FC = () => {
  const { darkMode } = usePmTheme();

  return (
    <section id="certifications" data-nav-target data-reveal style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 32px 48px' }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Certifications
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'center',
              padding: '12px 14px',
              borderRadius: 12,
              background: 'var(--pm-card)',
              boxShadow: '0 8px 18px -12px var(--pm-nav-shadow)',
              textDecoration: 'none',
              color: 'var(--pm-ink)',
              transition: 'transform 120ms ease, box-shadow 120ms ease',
            }}
          >
            <div style={{ width: 56, height: 56, flex: 'none', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--pm-hairline)', background: 'var(--pm-bg)', display: 'grid', placeItems: 'center' }}>
              {cert.logo ? (
                <img src={cert.logo} alt={cert.name} style={{ width: 48, height: 48, objectFit: 'contain', display: 'block' }} />
              ) : (
                <div style={{ width: 36, height: 36, borderRadius: 6, background: darkMode ? '#2b2b2b' : '#e9e9e9' }} />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{cert.name}</div>
              <div style={{ fontSize: 13, color: 'var(--pm-ink-faint)', marginTop: 4 }}>{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</div>
            </div>

            <div style={{ flex: 'none', color: 'var(--pm-ink-faint)', fontSize: 18 }}>🔗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
