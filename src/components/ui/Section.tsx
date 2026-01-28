import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative ${className}`}>
      {children}
    </section>
  );
};

export default Section;
