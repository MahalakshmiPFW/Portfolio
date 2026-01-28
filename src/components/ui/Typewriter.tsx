import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 50, 
  className = '',
  delay = 0
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;
    
    const startTyping = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          if (intervalId) clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTyping);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isVisible, text, speed, delay]);

  return (
    <p ref={elementRef} className={`${className} inline-block`}>
      {displayedText}
      <span className={`inline-block w-0.5 h-5 ml-1 align-middle bg-light-accent dark:bg-dark-accent ${isTypingComplete ? 'animate-pulse opacity-50' : 'animate-pulse'}`}></span>
    </p>
  );
};

export default Typewriter;
