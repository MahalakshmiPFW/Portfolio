import React from 'react';
import { PROCESS_STEPS } from '../pmData';

const STEP_UNIT = 0.9;
const TOTAL_CYCLE = `${PROCESS_STEPS.length * STEP_UNIT}s`;

const Process: React.FC = () => {
  return (
    <section data-reveal data-screen-label="Process" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px 72px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--pm-accent)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
          How I work
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 32, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
          Ship, Learn, Iterate!
        </h2>
        <p style={{ fontSize: 15.5, color: 'var(--pm-ink-soft)', maxWidth: 620, margin: 0 }}>
          Each cycle builds on the last, creating a continuous feedback loop that refines and improves the product.
        </p>
      </div>

      <div className="pm-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, alignItems: 'start' }}>
        {PROCESS_STEPS.map((step, i) => {
          const circleDelay = `${i * STEP_UNIT}s`;
          const arrowDelay = `${(i - 1) * STEP_UNIT + STEP_UNIT * 0.4}s`;
          return (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <span
                  className="pm-process-arrow"
                  style={{
                    color: 'var(--pm-accent)',
                    fontSize: 18,
                    flex: 'none',
                    margin: '0 2px',
                    alignSelf: 'flex-start',
                    marginTop: 19,
                    display: 'inline-block',
                    animation: `pmArrowFlow ${TOTAL_CYCLE} ease-in-out infinite`,
                    animationDelay: arrowDelay,
                  }}
                >
                  →
                </span>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10, padding: '0 6px', flex: 1 }}>
                <div className="pm-doodle-icon" style={{ position: 'relative', width: 40, height: 40, flex: 'none', cursor: 'pointer' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      background: 'var(--pm-accent-soft)',
                      animation: `pmRingPulse ${TOTAL_CYCLE} ease-out infinite`,
                      animationDelay: circleDelay,
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'transparent',
                      color: 'var(--pm-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 17,
                      border: '1.5px solid var(--pm-accent)',
                      animation: `pmCirclePulse ${TOTAL_CYCLE} ease-in-out infinite`,
                      animationDelay: circleDelay,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{step.label}</div>
                <div style={{ fontSize: 12, color: 'var(--pm-ink-faint)', lineHeight: 1.4 }}>{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24, fontSize: 13.5, color: 'var(--pm-ink-faint)' }}>
        <span style={{ fontSize: 16, color: 'var(--pm-accent)' }}>↻</span>
        <span>Ship feeds straight back into the next Scope — feedback closes the loop.</span>
      </div>
    </section>
  );
};

export default Process;
