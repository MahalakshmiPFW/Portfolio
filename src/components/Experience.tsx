import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const isEducation = (role: string) => {
    const r = role.toLowerCase();
    return (
      r.includes('bachelor') ||
      r.includes('master') ||
      r.includes('b.s') ||
      r.includes('bs') ||
      r.includes('m.s') ||
      r.includes('ms') ||
      r.includes('degree')
    );
  };

  return (
    <Section id="experience" className="my-20 relative">
      <div className="text-center mb-24 relative z-10">
        <div className="inline-block relative">
          <Reveal>
            <p className="font-hand text-3xl md:text-4xl text-gray-500 dark:text-gray-400 mb-2 transform -rotate-2 animate-subtle-float">
              From learning to building
            </p>
          </Reveal>
          <svg
            className="absolute -right-8 -top-2 w-8 h-8 text-light-accent dark:text-dark-accent opacity-50 transform rotate-12"
            viewBox="0 0 100 100"
          >
            <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M85,40 L90,50 L80,55" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>

        {/* Updated title because it’s not just "career" anymore */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-light-text dark:text-dark-text">
          Journey Timeline
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2"></div>

        <div className="space-y-16 md:space-y-24 relative z-10">
          {EXPERIENCE.map((job, index) => {
            const isEven = index % 2 === 0;
            const edu = isEducation(job.role);

            return (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0 mb-4 md:mb-0 ${
                    isEven ? 'md:pl-16 text-left md:text-left' : 'md:pr-16 text-left md:text-right'
                  }`}
                >
                  <div className="flex flex-col items-start md:items-stretch group">
                    {/* Mobile: period */}
                    <span className="md:hidden font-mono text-sm text-gray-400 mb-2 block bg-gray-100 dark:bg-white/5 px-2 py-1 rounded w-fit">
                      {job.period}
                    </span>

                    {/* Mobile: logo */}
                    {job.logo && (
                      <div className="md:hidden mb-3">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-20 w-20 rounded-full object-cover opacity-80 hover:opacity-100 transition-opacity border-4 border-white dark:border-white"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Badge: Education vs Experience (no `type` field needed) */}
                    <div className={`mb-2 ${!isEven ? 'md:ml-auto' : ''}`}>
                      <span
                        className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-[11px] font-mono border ${
                          edu
                            ? 'bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent border-light-accent/20 dark:border-dark-accent/20'
                            : 'bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        {edu ? 'Education' : 'Experience'}
                        <span className="opacity-60">•</span>
                        <span className="opacity-80">{job.location}</span>
                      </span>
                    </div>

                    {/* Role */}
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-2 text-light-text dark:text-dark-text ${
                        !isEven ? 'md:ml-auto' : ''
                      } group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors`}
                    >
                      {job.role}
                    </h3>

                    {/* Company / School */}
                    <div
                      className={`text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 sm:mb-4 ${
                        !isEven ? 'md:ml-auto' : ''
                      }`}
                    >
                      {job.company}
                    </div>

                    {/* Description (first bullet preview) */}
                    <p
                      className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base ${
                        !isEven ? 'md:ml-auto text-left md:text-right' : 'text-left'
                      } max-w-lg`}
                    >
                      {job.description?.[0]}
                    </p>

                    {/* Skills pills */}
                    {job.skills?.length > 0 && (
                      <div className={`flex flex-wrap gap-2 ${!isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {job.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-1 rounded text-xs font-mono border ${
                              edu
                                ? 'bg-light-accent/5 dark:bg-dark-accent/5 border-light-accent/15 dark:border-dark-accent/15 text-gray-600 dark:text-gray-300'
                                : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-gray-800 text-gray-500'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot (slightly different for education) */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center top-0 md:top-1/2 md:-translate-y-1/2">
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] z-20 ${
                      edu
                        ? 'bg-white dark:bg-[#0F0F11] border-light-accent dark:border-dark-accent'
                        : 'bg-light-accent dark:bg-dark-accent border-white dark:border-[#0F0F11]'
                    }`}
                  ></div>
                </div>

                {/* Desktop right column: logo + period */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'pr-16' : 'pl-16'}`}>
                  <div className="flex flex-col items-center gap-3">
                    {job.logo && (
                      <div className="mb-2">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-24 w-24 rounded-full object-cover opacity-80 hover:opacity-100 transition-opacity border-4 border-white dark:border-white"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    <Reveal>
                      <span className="font-hand text-3xl text-gray-400 dark:text-gray-500 select-none animate-subtle-float text-center">
                        {job.period}
                      </span>
                    </Reveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;