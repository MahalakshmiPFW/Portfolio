import React from 'react';
import { EXPERIENCE } from '../pmData';

const Experience: React.FC = () => {
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
          <div key={job.org} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 24, padding: '22px 0', borderTop: '1px solid var(--pm-hairline)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 88, height: 88, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--pm-hairline)', background: 'var(--pm-chip-bg)', flex: 'none' }}>
                <img src={job.logo} alt={job.org} style={{ width: 88, height: 88, objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--pm-ink-faint)', textAlign: 'center' }}>{job.dates}</div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 12 }}>
                <span style={{ fontWeight: 600, fontSize: 16.5 }}>{job.role}</span>
                <span style={{ fontSize: 14, color: 'var(--pm-ink-soft)' }}>{job.org}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: 'var(--pm-ink-soft)' }}>
                {job.bullets.map((bullet) => (
                  <li key={bullet} style={{ marginBottom: 5 }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 8, padding: '22px 24px', borderRadius: 14, background: 'var(--pm-accent-soft)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 22, lineHeight: 1 }}>☎</span>
        <p style={{ margin: 0, fontSize: 14.5, color: 'var(--pm-ink)' }}>
          <strong>Also — months of direct customer-facing work.</strong> At the Purdue Fort Wayne Box Office I booked and rebooked event tickets, fielded calls, resolved complaints in real time, and ushered events — the same muscle PM work leans on constantly: staying calm, listening past the complaint to the actual need, and finding a fix on the spot.
        </p>
      </div>
    </section>
  );
};

export default Experience;
