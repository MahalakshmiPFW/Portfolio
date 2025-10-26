import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, 
  SiExpress, SiMongodb, SiNextdotjs, SiPython, SiGit, SiGithub,
  SiFramer, SiTailwindcss, SiCypress, SiJest, SiFigma
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <SiReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Cypress', icon: <SiCypress /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
  ];

  return (
    <section className="skills-section py-3" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="skills-container" style={{ overflowX: 'hidden', position: 'relative', overflow: 'hidden' }}>
        <div className="skills-scroll d-flex align-items-center py-2">
          {/* First set - original */}
          {skills.map((skill, idx) => (
            <motion.div
              key={`original-${idx}`}
              className="skill-item d-flex align-items-center px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <span className="check-icon me-2" style={{ fontSize: '1.5rem' }}>✓</span>
              <span className="skill-name me-1" style={{ fontWeight: 500 }}>
                {skill.icon}
              </span>
              <span className="skill-name text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
          
          {/* Second set - for infinite loop effect */}
          {skills.map((skill, idx) => (
            <motion.div
              key={`duplicate-${idx}`}
              className="skill-item d-flex align-items-center px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (skills.length + idx) * 0.05 }}
            >
              <span className="check-icon me-2" style={{ fontSize: '1.5rem' }}>✓</span>
              <span className="skill-name me-1" style={{ fontWeight: 500 }}>
                {skill.icon}
              </span>
              <span className="skill-name text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

