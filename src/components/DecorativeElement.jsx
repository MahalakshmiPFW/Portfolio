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