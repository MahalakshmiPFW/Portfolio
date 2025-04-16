import React from 'react';

const DecorativeElement = ({ type, position }) => {
  const renderElement = () => {
    switch(type) {
      case 'diamond':
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="#53c28b" fillOpacity="0.3" />
          </svg>
        );
      case 'corner':
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0 L40 30 L30 40 L0 10 Z" fill="#53c28b" fillOpacity="0.3" />
          </svg>
        );
      case 'music-note':
        return (
          <span style={{ fontSize: '40px', color: '#53c28b',  }}>
            &#x266A; {/* U+266A (♪) */}
          </span>
        );

      case 'piano':
        return (
          <div style={{ textAlign: 'center', color: '#53c28b' }}>
            <span role="img" aria-label="piano" style={{ fontSize: '30px' }}>🎹</span>
            <div style={{ fontSize: '24px', marginTop: '-5px' }}>
              &#x266A; &#x266B; &#x266C;
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`decorative-element ${position}`}>
      {renderElement()}
    </div>
  );
};

export default DecorativeElement;