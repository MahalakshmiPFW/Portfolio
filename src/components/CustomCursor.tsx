import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const dot = document.getElementById('pm-cursor-dot');
    const ring = document.getElementById('pm-cursor-ring');

    const onMouseMove = (e: MouseEvent) => {
      if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }
      if (ring) { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px'; }
    };
    const onMouseOver = (e: MouseEvent) => {
      if (!ring) return;
      const target = e.target as HTMLElement;
      const interactive = target.closest && target.closest('a, button');
      if (interactive) { ring.style.width = '42px'; ring.style.height = '42px'; ring.style.opacity = '0.6'; }
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!ring) return;
      const target = e.target as HTMLElement;
      const interactive = target.closest && target.closest('a, button');
      if (interactive) { ring.style.width = '28px'; ring.style.height = '28px'; ring.style.opacity = '1'; }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div id="pm-cursor-dot" style={{ width: 6, height: 6, background: 'var(--pm-accent)' }} />
      <div id="pm-cursor-ring" style={{ width: 28, height: 28, border: '1.5px solid var(--pm-accent)' }} />
    </>
  );
};

export default CustomCursor;
