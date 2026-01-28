import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ui/ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto bg-white/90 dark:bg-[#1C1C1E]/90 p-1.5 rounded-full shadow-xl flex items-center gap-1.5 border border-black/5 dark:border-white/10 backdrop-blur-xl max-w-fit transition-all duration-300">

        <a 
          href="#home" 
          className="flex items-center justify-center w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full font-serif font-bold text-xl hover:scale-105 active:scale-95 transition-transform"
        >
          M.
        </a>

        <nav className="hidden md:flex items-center bg-gray-100 dark:bg-[#2C2C2E] rounded-full px-2 h-12 border border-transparent dark:border-white/5 transition-colors duration-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative group h-full flex items-center"
            >
              {link.name}
              <span className="absolute bottom-2 left-1/2 w-1 h-1 bg-black dark:bg-white rounded-full opacity-0 transform -translate-x-1/2 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
            </a>
          ))}
          
          <div className="w-px h-4 bg-gray-300 dark:bg-white/10 mx-1"></div>
          
          <div className="pl-1 pr-1">
            <ThemeToggle className="bg-transparent text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10" />
          </div>
        </nav>

        <div className="md:hidden flex items-center bg-gray-100 dark:bg-[#2C2C2E] rounded-full px-3 h-12 border border-transparent dark:border-white/5 transition-colors duration-300">
             <ThemeToggle className="bg-transparent text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white" />
             <div className="w-px h-4 bg-gray-300 dark:bg-white/10 mx-3"></div>
             <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-black dark:text-white focus:outline-none active:scale-95 transition-transform"
             >
                 {isOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
         </div>

        <a 
          href="/Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-12 px-6 bg-black text-white hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black rounded-full flex items-center justify-center font-bold text-sm transition-colors tracking-wide"
        >
          Resume
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-20 sm:top-24 inset-x-4 p-4 sm:p-6 bg-white dark:bg-[#1C1C1E] text-black dark:text-white rounded-2xl sm:rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/10 pointer-events-auto md:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-5 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base sm:text-lg font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex justify-between items-center group"
              >
                {link.name}
                <span className="text-gray-400 dark:text-white/20 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
