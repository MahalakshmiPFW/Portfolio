import React, { useEffect, useRef, useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import DecorativeElement from './components/DecorativeElement';
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Timeline = React.lazy(() => import('./components/Timeline'));

function LazySection({ children, rootMargin = '200px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={containerRef}>{isVisible ? children : null}</div>;
}

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Skills />
        <LazySection>
          <Suspense fallback={null}>
            <About />
          </Suspense>
        </LazySection>
        <DecorativeElement type="music-note" position="left" />
        <LazySection>
          <Suspense fallback={null}>
            <Timeline />
          </Suspense>
        </LazySection>
        <DecorativeElement type="diamond" position="right" />
        <LazySection>
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
        </LazySection>
        <DecorativeElement type="corner" position="right" />
        <LazySection rootMargin="100px">
          <Suspense fallback={<div className="text-center py-5">Loading contact section...</div>}>
            <Contact />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
      </div>
    </ThemeProvider>
  );
}

export default App;