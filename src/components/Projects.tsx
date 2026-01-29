import React from 'react';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const getStatusStyles = (status?: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-amber-300 text-black border-amber-400 dark:bg-amber-500 dark:border-amber-600';
      case 'Learning':
        return 'bg-blue-300 text-black border-blue-400 dark:bg-blue-500 dark:border-blue-600';
      case 'Completed':
        return 'bg-emerald-300 text-black border-emerald-400 dark:bg-emerald-500 dark:border-emerald-600';
      default:
        return 'bg-gray-200 text-gray-800 border-gray-300';
    }
  };

  return (
    <Section id="projects" className="pt-24 md:pt-32 pb-6 md:pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[20vw] font-serif font-bold text-gray-100 dark:text-white/5 leading-none -z-10 select-none pointer-events-none">
        Work
      </div>

      <div className="mb-24 md:mb-40 border-b border-black/10 dark:border-white/10 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl relative">
            <div className="absolute -top-8 left-0 transform -rotate-3 hidden md:block">
              <Reveal>
                <span className="font-hand text-3xl md:text-4xl text-light-accent dark:text-dark-accent animate-subtle-float block">
                  Selected Works
                </span>
              </Reveal>
              <svg
                className="w-12 h-12 absolute -right-12 top-2 text-gray-300 rotate-90"
                viewBox="0 0 100 100"
              >
                <path
                  d="M10,10 Q50,50 90,90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight">
              Curated <br />{' '}
              <span className="italic text-gray-500 dark:text-gray-400">Portfolio.</span>
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-balance">
              A selection of applications focusing on user experience, performance, and clean architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-32 md:space-y-48">
        {PROJECTS.map((project, index) => (
          <article key={project.id} className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
              {/* Left Sticky Meta */}
              <div className="lg:col-span-3 lg:sticky lg:top-32 order-2 lg:order-1 hidden lg:flex flex-col gap-12 border-l-2 border-gray-100 dark:border-white/5 pl-6">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Year
                  </span>
                  <span className="font-mono text-lg">{project.year}</span>
                </div>

                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Status
                  </span>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase ${getStatusStyles(
                      project.status
                    )} bg-opacity-20 border-0`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="w-full lg:w-auto">
                  <Reveal delay={200}>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-hand text-xl md:text-2xl transform -rotate-1 text-light-accent dark:text-dark-accent animate-subtle-float">
                      Tech Stack
                    </span>
                  </Reveal>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-xs font-medium uppercase text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12">
                  <span className="font-serif text-6xl text-gray-200 dark:text-white/5 font-bold">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-9 order-1 lg:order-2">
                {/* Mobile Header */}
                <div className="block lg:hidden mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                    {project.year} — {project.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-white/10 rounded text-[9px] sm:text-[10px] font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ✅ Smaller Image Block */}
                <div className="relative aspect-[5/4] md:aspect-[21/9] max-h-[340px] md:max-h-[300px] lg:max-h-[320px] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8 md:mb-10 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-700 border border-black/5 dark:border-white/5">
                  {project.status && (
                    <div
                      className={`absolute top-6 left-6 z-30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${getStatusStyles(
                        project.status
                      )} shadow-xl backdrop-blur-sm hidden md:block`}
                    >
                      <span className="relative flex items-center gap-2">
                        {project.status === 'In Progress' && (
                          <span className="w-2 h-2 rounded-full bg-black/50 animate-pulse"></span>
                        )}
                        {project.status}
                      </span>
                    </div>
                  )}

                  {project.featured && index === 0 && (
                    <div className="absolute -right-4 -bottom-4 z-40 bg-yellow-200 text-black font-hand text-2xl md:text-3xl px-4 py-2 shadow-lg transform rotate-3 hidden md:block">
                      <Reveal>
                        <span className="animate-subtle-float block">My Pride & Joy! ✨</span>
                      </Reveal>
                    </div>
                  )}

                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {project.image && project.image !== '' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform scale-100 group-hover:scale-[1.02] origin-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900">
                      <span className="text-4xl font-serif font-bold text-gray-600 dark:text-gray-300">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 md:hidden"
                    >
                      <span className="px-6 py-3 bg-white text-black rounded-full font-bold uppercase text-sm">
                        View Project
                      </span>
                    </a>
                  )}
                </div>

                <div className="max-w-3xl relative">
                  <h3 className="hidden lg:block text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="relative pl-4 sm:pl-6 border-l-2 border-light-accent/30 dark:border-dark-accent/30 md:border-0 md:pl-0">
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-balance mb-6 sm:mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
                      >
                        Live Demo <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors text-gray-500"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-32 pt-10 flex flex-col items-center justify-center gap-10 relative">
        <a
          href="https://github.com/MahalakshmiPFW?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-transparent dark:border-white border-2 border-black text-black dark:text-white rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-xl"
        >
          View All Projects
          <FolderGit2 size={20} className="group-hover:rotate-12 transition-transform" />
        </a>

        <div className="absolute bottom-0 -right-4 md:right-20 transform -rotate-6 pointer-events-none opacity-80">
          <Reveal>
            <span className="font-hand text-gray-400 dark:text-gray-600 text-2xl md:text-3xl animate-subtle-float block">
              See the code behind the magic! ⚡
            </span>
          </Reveal>
          <svg
            className="w-8 h-8 absolute -left-8 -top-4 text-gray-300 rotate-180"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,10 Q50,50 90,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
};

export default Projects;