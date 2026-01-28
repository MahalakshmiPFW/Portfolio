import React from 'react';
import Button from './ui/Button';
import Section from './ui/Section';
import { GraduationCap } from 'lucide-react';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-[90vh] flex flex-col justify-center pt-32 md:pt-32 relative overflow-hidden">
      <div className="absolute top-20 right-0 md:right-20 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 md:left-20 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        
        <div className="col-span-1 lg:col-span-7 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider border border-green-200 dark:border-green-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-700">
              <GraduationCap size={14} />
              Class of 2026 (MS CS)
            </div>
          </div>

          <div className="inline-block relative mb-2 group cursor-default">
            <Reveal delay={200} className="inline-block">
              <span className="font-hand text-3xl md:text-4xl text-light-accent dark:text-dark-accent transform -rotate-2 inline-block group-hover:rotate-0 transition-transform animate-subtle-float">
                Hey there, I'm
              </span>
            </Reveal>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[1.1] md:leading-[0.9] text-light-text dark:text-dark-text mb-6 md:mb-8 break-words sm:whitespace-nowrap">
            MAHALAKSHMI
          </h1>

          <div className="relative">
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-2xl leading-relaxed mb-6 sm:mb-8 text-balance">
              A <span className="font-black text-light-accent dark:text-dark-accent">Full Stack Engineer</span> with a creative soul.
              <br className="hidden sm:block"/>
              <span className="block sm:inline">Currently seeking <span className="underline decoration-wavy decoration-light-accent dark:decoration-dark-accent underline-offset-4">Entry Level Opportunities</span> for 2026.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
             <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                See My Work
             </Button>
             <Button variant="outline" size="lg" onClick={() => window.open('/Resume.pdf', '_blank')}>
                Download Resume
             </Button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-5 relative h-full min-h-[280px] sm:min-h-[300px] lg:min-h-auto flex flex-col items-center justify-center lg:items-end mt-6 sm:mt-8 lg:mt-0 lg:translate-x-8">
           <div className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-[3/4] md:aspect-auto md:h-[500px] rounded-t-[8rem] sm:rounded-t-[10rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] overflow-hidden border-2 sm:border-4 border-light-text dark:border-dark-text bg-gray-100 dark:bg-gray-800 shadow-2xl transform hover:rotate-1 transition-transform duration-500 group z-20">
              <div className="absolute inset-0 overflow-hidden rounded-t-[8rem] sm:rounded-t-[10rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] z-0">
                <img 
                  src="/assets/images/Profile.png" 
                  alt="Mahalakshmi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </div>
              <div className="absolute inset-0 bg-light-accent/10 dark:bg-dark-accent/10 mix-blend-overlay z-10 rounded-t-[8rem] sm:rounded-t-[10rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] pointer-events-none"></div>
              
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white dark:bg-dark-surface p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-all">
                 <span className="block font-serif font-bold text-lg sm:text-2xl text-black dark:text-white">4.0</span>
                 <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">GPA @ Purdue</span>
              </div>
           </div>

           <div className="relative mt-4 sm:mt-8 mr-0 sm:mr-4 lg:mr-12 transform -rotate-3 z-10 text-center sm:text-left">
              <svg className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500 animate-bounce hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <Reveal delay={500}>
                  <span className="font-hand text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 inline-flex items-center gap-2 animate-subtle-float">
                    ( & React Enthusiast! ) <span className="text-2xl sm:text-3xl">⚛️</span>
                  </span>
              </Reveal>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-8 hidden md:flex items-center gap-3 text-gray-400">
        <span className="font-mono text-xs uppercase tracking-widest writing-mode-vertical rotate-180">Scroll</span>
        <div className="h-16 w-px bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-light-accent dark:bg-dark-accent animate-float"></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
