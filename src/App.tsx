import React from 'react';
import { ThemeProvider } from './theme';
import { useScrollReveal } from './hooks/useScrollReveal';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import Toolkit from './components/Toolkit';
import Education from './components/Education';
import Footer from './components/Footer';

function AppShell() {
  useScrollReveal();

  return (
    <div style={{ background: 'var(--pm-bg)', color: 'var(--pm-ink)', fontFamily: "'IBM Plex Sans',sans-serif", minHeight: '100vh', lineHeight: 1.5 }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Process />
      <CaseStudies />
      <Experience />
      <Toolkit />
      <Education />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
