import React, { useState } from 'react';
import { CASE_STUDIES } from '../pmData';

const CaseStudies: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [prdOpenIndex, setPrdOpenIndex] = useState(-1);

  return (
    <section id="work" data-nav-target data-reveal data-screen-label="Case Studies" style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 32px 72px' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
          Case Studies
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 32, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
          Projects reframed through a product lens
        </h2>
        <p style={{ fontSize: 15.5, color: 'var(--pm-ink-soft)', maxWidth: 620, margin: 0 }}>
          Each one started as an engineering project — but the real work was scoping the problem, weighing tradeoffs, and deciding what mattered enough to build.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {CASE_STUDIES.map((cs, i) => {
          const isOpen = openIndex === i;
          const prdOpen = prdOpenIndex === i;
          return (
            <div key={cs.title}>
              <button
                onClick={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '22px 26px',
                  gap: 20,
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Newsreader',serif", fontSize: 21, fontWeight: 600 }}>{cs.title}</span>
                  <span style={{ fontSize: 13, color: 'var(--pm-ink-faint)' }}>{cs.year}</span>
                </div>
                <span style={{ fontSize: 20, color: 'var(--pm-accent)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'inline-block' }}>⌄</span>
              </button>

              <div style={{ border: '1px solid var(--pm-hairline)', borderRadius: 14, background: 'var(--pm-bg)', overflow: 'hidden' }}>
                {isOpen && (
                  <div style={{ padding: '0 26px 28px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {cs.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 12.5, padding: '5px 11px', borderRadius: 999, background: 'var(--pm-accent-soft)', color: 'var(--pm-accent)', fontWeight: 600 }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pm-cs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 22 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 8 }}>Problem</div>
                        <p style={{ fontSize: 14.5, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.problem}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 8 }}>Approach</div>
                        <p style={{ fontSize: 14.5, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.approach}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 8 }}>Outcome</div>
                        <p style={{ fontSize: 14.5, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.outcome}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setPrdOpenIndex((prev) => (prev === i ? -1 : i))}
                      style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--pm-accent)', padding: '8px 0' }}
                    >
                      <span>{prdOpen ? 'Hide mini PRD' : 'View mini PRD'}</span>
                      <span style={{ fontSize: 11, transform: prdOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'inline-block' }}>▸</span>
                    </button>

                    {prdOpen && (
                      <div style={{ marginTop: 14, borderRadius: 14, background: 'var(--pm-bg)', border: '1px solid var(--pm-hairline)', overflow: 'hidden' }}>
                        <div style={{ background: 'var(--pm-accent-soft)', padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ fontSize: 17 }}>📋</span>
                            <span style={{ fontFamily: "'Newsreader',serif", fontSize: 16, fontWeight: 600 }}>Mini PRD — {cs.title}</span>
                          </div>
                          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--pm-accent)', background: 'var(--pm-bg)', padding: '4px 10px', borderRadius: 999 }}>
                            {cs.prd.status}
                          </span>
                        </div>

                        <div style={{ padding: '24px 22px' }}>
                          <p style={{ fontSize: 15, color: 'var(--pm-ink)', margin: '0 0 22px', lineHeight: 1.55 }}>{cs.prd.overview}</p>

                          <div className="pm-cs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
                            <div style={{ border: '1px solid var(--pm-hairline)', borderRadius: 10, padding: 16 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 8 }}>
                                <span style={{ fontSize: 14 }}>🎯</span> Goal
                              </div>
                              <p style={{ fontSize: 14, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.prd.goal}</p>
                            </div>
                            <div style={{ border: '1px solid var(--pm-hairline)', borderRadius: 10, padding: 16 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 8 }}>
                                <span style={{ fontSize: 14 }}>👥</span> Target users
                              </div>
                              <p style={{ fontSize: 14, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.prd.users}</p>
                            </div>
                          </div>

                          <div style={{ marginBottom: 22 }}>
                            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 10 }}>Key requirements</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {cs.prd.requirements.map((req) => (
                                <div key={req} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 12px', background: 'var(--pm-chip-bg)', borderRadius: 9 }}>
                                  <span style={{ fontSize: 13, color: 'var(--pm-accent)', marginTop: 1, flex: 'none' }}>✓</span>
                                  <span style={{ fontSize: 14, color: 'var(--pm-ink)' }}>{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div style={{ marginBottom: 22 }}>
                            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 10 }}>Success metrics</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {cs.prd.metrics.map((metric) => (
                                <div key={metric} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                  <span style={{ fontSize: 13, flex: 'none', marginTop: 1 }}>📈</span>
                                  <span style={{ fontSize: 14, color: 'var(--pm-ink-soft)' }}>{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', background: 'var(--pm-chip-bg)', borderRadius: 10, border: '1px dashed var(--pm-hairline)' }}>
                            <span style={{ fontSize: 14, flex: 'none' }}>🚫</span>
                            <div>
                              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--pm-ink-faint)', marginBottom: 4 }}>Out of scope</div>
                              <p style={{ fontSize: 14, color: 'var(--pm-ink-soft)', margin: 0 }}>{cs.prd.outOfScope}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
