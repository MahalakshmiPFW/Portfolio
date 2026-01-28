import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Typewriter from './ui/Typewriter';
import { Coffee, MapPin, Calendar, Sparkles, Music, Camera, Ticket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="relative my-20">
      <div className="absolute -top-10 md:-top-20 left-0 text-[18vw] md:text-[12rem] font-serif font-bold text-gray-100 dark:text-white/5 select-none -z-10 leading-none overflow-hidden w-full whitespace-nowrap">
        PERSONAL
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-10 relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 sm:mb-6">
              The Person Behind the <span className="text-light-accent dark:text-dark-accent italic">Pixels</span>.
            </h2>
            
            <Typewriter 
              text="MS CS Student @ Purdue ('26) & Full Stack Engineer with a design-minded approach." 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 font-medium min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[2rem]"
              speed={40}
            />

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Off-screen? You'll find me harmonizing as a Soprano 🎶, getting lost in fantasy worlds 📚, or hunting for the perfect White Mocha ☕.
            </p>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-500/10 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-r-lg sm:rounded-r-xl relative shadow-sm transform hover:scale-[1.02] transition-transform">
             <div className="absolute -top-2 sm:-top-3 -left-1 sm:-left-2 text-yellow-400">
               <Sparkles size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
             </div>
             <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800 dark:text-yellow-200">Hot Take 🌶️</h3>
             <p className="italic text-gray-700 dark:text-gray-300 font-serif text-sm sm:text-base md:text-lg">
               "While I respect the rigor of algorithms, the real spark for me is turning ideas into polished, inclusive, aesthetically thoughtful experiences. I'd much rather pour that energy into building something delightful and accessible than spend another minute inverting binary trees on a whiteboard. ✨"
             </p>
             <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/50 dark:bg-black/20 rounded text-[10px] sm:text-xs font-mono text-gray-600 dark:text-gray-400">#BuilderAtHeart</span>
             </div>
          </div>

          <div className="relative">
             <Reveal>
                <h3 className="font-hand text-3xl md:text-4xl text-gray-400 mb-4 inline-block animate-subtle-float">Currently Exploring...</h3>
             </Reveal>
             <svg className="absolute left-32 top-0 w-8 h-8 text-gray-300 transform -rotate-12" viewBox="0 0 50 50"><path d="M10,10 Q30,5 40,20" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/></svg>
             
             <div className="flex flex-wrap gap-3">
                {['Web Design', 'Frontend Architecture', 'AI Integration', 'Mobile App Dev', 'React Native', 'Docker'].map(topic => (
                  <span key={topic} className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent dark:hover:text-black transition-colors cursor-default">
                    {topic}
                  </span>
                ))}
             </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative h-auto lg:min-h-[850px] flex flex-col lg:block gap-10 items-center pt-10 lg:pt-0 mt-8 lg:mt-0">
          
          <div className="relative lg:absolute lg:top-0 lg:left-0 z-20 transform rotate-2 lg:-rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 w-full max-w-xs lg:w-56 bg-white p-3 pb-8 shadow-xl rounded-sm">
            <div className="aspect-square bg-gray-100 overflow-hidden mb-3 grayscale hover:grayscale-0 transition-all">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Me Coding" className="w-full h-full object-cover" />
            </div>
            <Reveal delay={100}>
              <div className="text-center font-hand text-2xl text-gray-800 animate-subtle-float">
                Hackathon Mode 💻
              </div>
            </Reveal>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-red-200/50 rotate-1"></div>
          </div>

          <div className="relative lg:absolute lg:top-[120px] lg:left-[200px] z-40 text-gray-800 dark:text-gray-200 transform rotate-12 hover:rotate-45 transition-transform">
             <Camera size={48} strokeWidth={1.5} />
          </div>

          <div className="relative lg:absolute lg:top-4 lg:right-8 z-10 transform -rotate-1 lg:rotate-6 hover:rotate-0 transition-all duration-500 w-full max-w-xs lg:w-52 bg-[#fcfcfc] p-4 shadow-md font-mono text-xs text-gray-600 border-t-4 border-gray-200">
            <div className="text-center mb-4 border-b border-dashed border-gray-300 pb-2">
               <Coffee size={20} className="mx-auto mb-1 text-gray-400" />
               <Reveal delay={200}>
                 <span className="font-bold block text-sm uppercase">Daily Fuel</span>
               </Reveal>
               <span className="text-[10px] text-gray-400">09:42 AM</span>
            </div>
            <div className="space-y-2 mb-4">
               <div className="flex justify-between items-center">
                  <span className="font-bold">1x Hot White Mocha</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-bold">1x Iced Matcha Latte</span>
               </div>
               <div className="pl-2 text-[10px] text-gray-400 italic mt-1">
                  + White Mocha Syrup<br/>
                  + Vanilla Cold Foam
               </div>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-2 text-center font-bold text-xs text-gray-400">
               PAID WITH 💖
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-2 bg-transparent bg-[length:10px_10px] bg-[radial-gradient(circle,transparent_50%,#fcfcfc_50%)] rotate-180"></div>
          </div>

          <div className="relative lg:absolute lg:top-[280px] lg:left-[180px] z-30 transform -rotate-2 lg:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 w-full max-w-[280px] bg-gray-900 text-white p-4 rounded-2xl shadow-2xl border border-gray-700">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-md flex items-center justify-center">
                   <Music size={20} className="text-white" />
                </div>
                <div>
                   <h4 className="text-sm font-bold">Choir Practice</h4>
                   <p className="text-xs text-gray-400">Soprano Playlist</p>
                </div>
             </div>
             <div className="w-full bg-gray-700 h-1 rounded-full mb-2 overflow-hidden">
                <div className="w-2/3 h-full bg-green-400 rounded-full"></div>
             </div>
             <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>2:14</span>
                <span>4:20</span>
             </div>
             <div className="absolute -right-2 -top-2 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded-full">NOW PLAYING</div>
          </div>

          <div className="relative lg:absolute lg:top-[260px] lg:right-0 z-20 transform rotate-1 lg:-rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 w-full max-w-xs lg:w-48 bg-white p-2 pb-8 shadow-xl rounded-sm">
             <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-2 grayscale hover:grayscale-0 transition-all">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" alt="Reading" className="w-full h-full object-cover" />
             </div>
             <Reveal delay={300}>
               <div className="text-center font-hand text-2xl text-gray-800 animate-subtle-float">
                 Bookworm Life 📚
               </div>
             </Reveal>
             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-blue-200/50 -rotate-2"></div>
          </div>

          <div className="relative lg:absolute lg:top-[380px] lg:left-[40px] z-40 transform -rotate-2 hover:rotate-0 transition-transform duration-300 bg-[#1e1e1e]/95 backdrop-blur-sm p-4 rounded-lg text-gray-300 font-mono text-[11px] shadow-2xl border border-gray-700 w-auto min-w-[260px] group">
            <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#ff90b3] hover:brightness-110 transition-all"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] hover:brightness-110 transition-all"></div>
               </div>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest">manifest.js</span>
            </div>

            <div className="space-y-1 font-medium leading-relaxed whitespace-nowrap">
               <p><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">manifesto</span> = {'{'}</p>
               <p className="pl-4"><span className="text-[#d19a66]">vibe</span>: <span className="text-[#98c379]">"Cozy Tech Girly 🎀"</span>,</p>
               <p className="pl-4"><span className="text-[#d19a66]">goal</span>: <span className="text-[#98c379]">"2026 Full-Time ✨"</span>,</p>
               <p className="pl-4"><span className="text-[#d19a66]">fuel</span>: [<span className="text-[#98c379]">"Matcha"</span>, <span className="text-[#98c379]">"Code"</span>],</p>
               <p className="pl-4"><span className="text-[#d19a66]">mood</span>: <span className="text-[#98c379]">"Grateful ☁️"</span></p>
               <p>{'};'}</p>
            </div>
          </div>

          <div className="relative lg:absolute lg:bottom-20 lg:left-0 z-30 transform rotate-1 lg:rotate-2 hover:-rotate-1 transition-all duration-500 w-full max-w-[300px] lg:w-80 group">
             <div className="flex bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden relative border-0">
                
                <div className="flex-1 p-5 relative bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white z-10">
                   
                   <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` }}></div>

                   <div className="absolute -top-3 -right-3 w-6 h-6 bg-light-bg dark:bg-dark-bg rounded-full z-10 shadow-inner"></div>
                   <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-light-bg dark:bg-dark-bg rounded-full z-10 shadow-inner"></div>

                   <div className="flex justify-between items-start mb-3 relative">
                       <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase rounded-sm border border-white/30">Student Access</span>
                       <Ticket size={16} className="text-white/70" />
                   </div>

                   <h3 className="font-serif text-2xl font-black mb-1 leading-tight text-white drop-shadow-sm">SWE Local</h3>
                   <p className="text-xs text-indigo-100 font-medium mb-5 uppercase tracking-wide">Conference 2026 Series</p>

                   <div className="flex gap-4 text-[10px] opacity-90 font-mono text-white">
                      <div className="flex flex-col">
                          <span className="text-[8px] uppercase text-indigo-200 font-bold mb-0.5">Date</span>
                          <span className="font-bold text-sm flex items-center gap-1"><Calendar size={12} className="text-indigo-200"/> Mar '26</span>
                      </div>
                      <div className="flex flex-col">
                          <span className="text-[8px] uppercase text-indigo-200 font-bold mb-0.5">Location</span>
                          <span className="font-bold text-sm flex items-center gap-1 whitespace-nowrap"><MapPin size={12} className="text-indigo-200"/> Columbus, OH</span>
                      </div>
                   </div>
                </div>

                <div className="w-14 relative bg-white dark:bg-gray-800 flex flex-col items-center justify-between py-3 border-l-2 border-dashed border-gray-300 dark:border-gray-600/50">
                   <span className="font-mono text-[9px] font-bold text-gray-400 rotate-90 whitespace-nowrap mt-6">NO. 84921</span>
                   
                   <div className="w-6 h-20 bg-gray-800 dark:bg-gray-400 opacity-70 my-2 mix-blend-multiply dark:mix-blend-normal" style={{ maskImage: 'repeating-linear-gradient(to bottom, black, black 2px, transparent 2px, transparent 5px)' }}></div>
                   
                   <span className="font-mono text-[9px] font-bold text-gray-400 rotate-90 mb-4">ADMIT ONE</span>
                </div>
             </div>
          </div>

          <div className="relative lg:absolute lg:bottom-0 lg:right-4 z-20 transform -rotate-2 lg:-rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 w-full max-w-xs lg:w-56 bg-white p-3 pb-10 shadow-xl rounded-sm">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-2 grayscale hover:grayscale-0 transition-all">
               <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="Friends" className="w-full h-full object-cover" />
            </div>
            <Reveal delay={400}>
              <div className="text-center font-hand text-2xl text-gray-800 animate-subtle-float">
                Adventures ✌️
              </div>
            </Reveal>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-yellow-200/80 rotate-2 shadow-sm backdrop-blur-sm"></div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
