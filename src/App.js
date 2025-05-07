import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DecorativeElement from './components/DecorativeElement';
import Timeline from './components/Timeline';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <DecorativeElement type="music-note" position="right" />
        <About />
        <DecorativeElement type="music-note" position="left" />
        <Timeline />
        <DecorativeElement type="diamond" position="right" />
        <Projects />
        <DecorativeElement type="corner" position="right" />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;