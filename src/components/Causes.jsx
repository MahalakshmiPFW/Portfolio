import React from 'react';
import { motion } from 'framer-motion';

const Causes = () => {
  const causes = [
    { name: 'Women-Owned Businesses' },
    { name: 'B-Corp Certified Companies' },
    { name: 'Startups & Innovation' },
    { name: 'Sustainability Focus' },
    { name: 'Diverse Teams' },
    { name: 'Social Impact' },
    { name: 'Tech for Good' },
  ];

  return (
    <section className="causes-section py-3" style={{ 
      background: 'linear-gradient(to bottom, rgba(138, 104, 213, 0.05), var(--component-bg))'
    }}>
      <div className="causes-container" style={{ overflowX: 'hidden', position: 'relative', overflow: 'hidden' }}>
        <div className="causes-scroll d-flex align-items-center py-2">
          {/* First set - original */}
          {causes.map((cause, idx) => (
            <motion.div
              key={`original-${idx}`}
              className="cause-item d-flex align-items-center px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <span className="check-icon me-2" style={{ fontSize: '1.5rem' }}>✓</span>
              <span className="cause-name text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cause.name}
              </span>
            </motion.div>
          ))}
          
          {/* Second set - for infinite loop effect */}
          {causes.map((cause, idx) => (
            <motion.div
              key={`duplicate-${idx}`}
              className="cause-item d-flex align-items-center px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (causes.length + idx) * 0.05 }}
            >
              <span className="check-icon me-2" style={{ fontSize: '1.5rem' }}>✓</span>
              <span className="cause-name text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cause.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;

