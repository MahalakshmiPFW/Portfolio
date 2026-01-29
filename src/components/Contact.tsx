import React, { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
import Section from './ui/Section';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sanjumahalakshmi12@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="pb-20">
      <div className="bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] dark:from-[#0F172A] dark:via-[#1E1B4B] dark:to-[#020617] text-white rounded-[2rem] md:rounded-[3rem] px-8 py-12 md:px-14 md:py-14 lg:px-20 lg:py-16 relative overflow-hidden shadow-2xl transition-all duration-500 border border-white/5">

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000 pointer-events-none" />

        {/* Subtle noise */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex justify-center">
          <div className="w-full max-w-3xl flex flex-col items-center text-center">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-300/20 bg-indigo-950/30 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-10 shadow-lg text-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Work Opportunities
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] mb-6 sm:mb-8 drop-shadow-sm">
              Let’s start a <br />
              <span className="italic font-light text-indigo-200">conversation.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-indigo-100/80 max-w-xl leading-relaxed mb-10 md:mb-12 font-medium text-balance">
              Interested in working together? I’m currently open to entry-level opportunities for 2026 and select freelance projects.
            </p>

            {/* Email CTA */}
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-indigo-200 opacity-60">
                Reach me directly
              </p>

              <button
                onClick={copyEmail}
                className="group w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left hover:text-indigo-200 transition-colors"
              >
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif underline decoration-1 underline-offset-8 decoration-white/20 break-all group-hover:decoration-indigo-300 transition-all">
                  sanjumahalakshmi12@gmail.com
                </span>

                <span className="p-3 rounded-full bg-white/10 group-hover:bg-white group-hover:text-indigo-900 group-hover:scale-110 transition-all duration-300 shrink-0">
                  {copied ? <Check size={20} className="sm:w-6 sm:h-6" /> : <Copy size={20} className="sm:w-6 sm:h-6" />}
                </span>
              </button>

              {copied && (
                <div className="mt-4 text-sm text-indigo-100/80 font-medium">
                  Copied to clipboard ✅
                </div>
              )}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-12">
              {SOCIAL_LINKS
                .filter(l => l.platform !== 'Email' && l.platform !== 'Location')
                .map(link => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-sm font-bold tracking-wide uppercase flex items-center gap-2 group"
                  >
                    {link.platform}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;