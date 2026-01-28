import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'handwriting' | 'fade' | 'none';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'handwriting'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animationClass = animation === 'handwriting' ? 'animate-handwriting' : 'animate-fade-in';
  const baseClass = isVisible ? animationClass : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`${className} ${baseClass}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
