import React from 'react';
import Section from './ui/Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  const categories = [
    { name: "Frontend", items: ["React", "TypeScript", "JavaScript", "Next.js 15", "Tailwind", "HTML5", "CSS3", "SASS", "shadcn/ui"] },
    { name: "Backend & Data", items: ["Node.js", "Express.js", "Django", "MongoDB", "PostgreSQL"] },
    { name: "Testing & Tools", items: ["Jest", "Cypress", "Playwright", "Git/Github", "Vercel", "Figma", "Webflow", "Docker"] }
  ];

  return (
    <div className="py-10 overflow-hidden bg-light-accent dark:bg-[#0F0529] text-white mb-20 transform -skew-y-2 origin-left border-y-4 border-black dark:border-gray-700">
      
      <div className="relative flex overflow-x-hidden py-4 bg-black/10 dark:bg-white/5 mb-8">
        <div className="animate-marquee whitespace-nowrap flex gap-4 sm:gap-8 items-center">
          {marqueeSkills.map((skill, i) => (
            <span key={i} className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tighter mx-2 sm:mx-4 text-white/90">
              {skill} <span className="text-yellow-300 mx-2 sm:mx-4">•</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex overflow-x-hidden animate-marquee2 whitespace-nowrap gap-4 sm:gap-8 items-center">
          {marqueeSkills.map((skill, i) => (
            <span key={i} className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tighter mx-2 sm:mx-4 text-white/90">
              {skill} <span className="text-yellow-300 mx-2 sm:mx-4">•</span>
            </span>
          ))}
        </div>
      </div>

      <Section className="!py-4">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-[#18181B] text-black dark:text-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] sm:dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] border-2 border-black dark:border-gray-600 transform hover:-translate-y-1 transition-transform">
               <h3 className="font-mono text-lg sm:text-xl font-bold border-b-2 border-black dark:border-gray-600 pb-2 mb-3 sm:mb-4 uppercase flex justify-between items-center">
                 {cat.name}
                 <span className="text-[10px] sm:text-xs bg-black text-white dark:bg-white dark:text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">0{idx+1}</span>
               </h3>
               <div className="flex flex-wrap gap-2 sm:gap-3">
                 {cat.items.map((item) => (
                   <span 
                    key={item} 
                    className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold 
                               transition-all duration-300 cursor-default
                               hover:-translate-y-1 hover:shadow-md 
                               hover:bg-indigo-500 hover:text-white hover:border-indigo-600
                               dark:hover:bg-yellow-400 dark:hover:text-black dark:hover:border-yellow-500"
                   >
                     {item}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </Section>

      <style>{`
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 90s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Skills;
