import React from 'react';
import { NAV_LINKS, RESUME_HREF } from '../constants';
import { usePmTheme } from '../theme';

function navClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const id = e.currentTarget.getAttribute('href');
  if (!id) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  target.classList.remove('pm-nav-pop');
  requestAnimationFrame(() => target.classList.add('pm-nav-pop'));
  if (typeof history !== 'undefined' && history.pushState) history.pushState(null, '', id);
}

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = usePmTheme();

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 50, padding: '18px 24px 0' }}>
      <div
        style={{
          width: 'fit-content',
          margin: '0 auto',
          background: 'var(--pm-bg-translucent)',
          backdropFilter: 'blur(14px)',
          border: '1px solid var(--pm-hairline)',
          borderRadius: 999,
          boxShadow: '0 10px 28px -12px var(--pm-nav-shadow)',
          padding: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <a
          href="#top"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'var(--pm-accent)',
            color: 'var(--pm-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Newsreader',serif",
            fontWeight: 600,
            fontSize: 15,
            flex: 'none',
          }}
        >
          M.
        </a>

        <div className="pm-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={navClick}
              className="pm-nav-pill"
              style={{
                color: 'var(--pm-ink-soft)',
                fontSize: 13.5,
                fontWeight: 500,
                padding: '9px 14px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="pm-dark-toggle"
            style={{
              all: 'unset',
              cursor: 'pointer',
              fontSize: 14,
              lineHeight: 1,
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1.5px solid var(--pm-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <a
            href={RESUME_HREF}
            download="Mahalakshmi_PM_Resume.pdf"
            className="pm-resume-btn"
            style={{
              background: 'var(--pm-accent)',
              color: 'var(--pm-bg)',
              fontWeight: 600,
              fontSize: 13.5,
              padding: '11px 20px',
              borderRadius: 999,
              whiteSpace: 'nowrap',
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
