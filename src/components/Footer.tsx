import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--pm-hairline)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '36px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 13.5, color: 'var(--pm-ink-faint)' }}>
          © {new Date().getFullYear()} Mahalakshmi · USA · <b>Open to relocation</b>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 13.5, color: 'var(--pm-ink-soft)' }}>
          <a href="mailto:mahalak@purdue.edu">Email</a>
          <a href="https://www.linkedin.com/in/mahalakshmimahadevan/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MahalakshmiPFW" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
