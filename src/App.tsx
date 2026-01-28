import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main className="relative">
        {/* Background texture/grid - optional artistic touch */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-900">
        <p>© {new Date().getFullYear()} Mahalakshmi. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
