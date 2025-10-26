import React from 'react';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
//import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      id: 0,
      type: "work",
      title: "Full Stack Software Engineering Intern",
      organization: "ForOurLastNames",
      location: "Remote",
      duration: "June 2025 - August 2025",
      logo: "assets/images/FOLN Logo.png", // Placeholder, update if you have the company logo
      responsibilities: [
        "Built user-facing features for a financial technology platform",
        "Led mobile app deployment to iOS and Android App Stores",
        "Implemented automated testing to improve product quality",
        "Delivered 9 feature enhancements and fixed 4 critical bugs"
      ]
    },
    {
      id: 1,
      type: "education",
      title: "Master of Science in Computer Science",
      organization: "Purdue University",
      location: "Fort Wayne, Indiana",
      duration: "August 2024 - May 2026",
      gpa: "4.0/4.0",
      logo: "assets/images/PurdueLogo.svg",
      activities: [
        {
          title: "Testing Center Student Staff",
          description: "Proctored exams and assisted students in Math & Science courses",
          duration: "2025 - Present"
        },
        {
          title: "Box Office Student Staff",
          description: "Handled ticket sales, customer service, and event operations",
          duration: "2025 - Present"
        }
      ]
    },
    {
      id: 2,
      type: "work",
      title: "Process Automation and Procurement Intern",
      organization: "Schneider Electric",
      location: "Dubai, U.A.E",
      duration: "June 2024 - July 2024",
      logo: "assets/images/SE Logo1.png",
      responsibilities: [
        "Built supplier evaluation application for procurement department",
        "Developed full-stack solution using Python and MySQL",
        "Completed cybersecurity training certification"
      ]
    },
    {
      id: 3,
      type: "work",
      title: "Research Intern",
      organization: "BetaIT",
      location: "Dubai, U.A.E",
      duration: "July 2023 - September 2023",
      logo: "assets/images/BetaIT.jpeg",
      responsibilities: [
        "Conducted research on digital transformation platforms",
        "Analyzed integration strategies for company-wide implementation"
      ]
    },
    {
      id: 4,
      type: "work",
      title: "IT Intern and Team Leader",
      organization: "BetaIT",
      location: "Dubai, U.A.E",
      duration: "July 2022 - August 2022",
      logo: "assets/images/BetaIT.jpeg",
      responsibilities: [
        "Set up cloud infrastructure on Google Cloud Platform",
        "Configured virtual load balancers and security systems",
        "Led team projects and delivered technical presentations"
      ]
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Science in Computer Engineering",
      organization: "American University of Sharjah",
      location: "Sharjah, UAE",
      duration: "August 2020 - December 2023",
      logo: "assets/images/AUS Logo.png",
      activities: [
        {
          title: "Python Bootcamp Instructor Assistant",
          description: "Taught programming concepts to business students",
          duration: "March 2023"
        }
      ]
    }
  ];


  return (
    <section id="timeline" className="timeline-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fs-2 fw-bold mb-2">My Journey</h2>
          <p className="text-secondary">
            A chronological journey through my education and professional experience
          </p>
        </motion.div>

        <div className="timeline-container position-relative" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical dashed line */}
          <div 
            className="timeline-line position-absolute"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              borderLeft: '2px dashed var(--secondary-color)',
              opacity: 0.6,
              top: '0'
            }}
          />

          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item position-relative mb-5"
              >
                <div className="row align-items-center">
                  {/* Image - left or right based on index */}
                  <div className={`col-md-5 ${isEven ? 'order-2' : ''}`}>
                    <motion.div
                      className="timeline-image-container mx-auto"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--component-bg)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        backgroundColor: 'white',
                        padding: '10px'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={item.logo} 
                        alt={`${item.organization}`}
                        className="w-100 h-100"
                        style={{ objectFit: 'contain', borderRadius: '50%' }}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content - opposite side */}
                  <div className={`col-md-7 ${isEven ? 'order-1 text-md-end' : 'text-md-start'}`}>
                    <motion.div
                      className="timeline-content p-4 rounded-4 h-100"
                      style={{
                        background: 'linear-gradient(135deg, var(--component-bg) 0%, var(--secondary-bg) 100%)',
                        border: '1px solid var(--border-color)',
                        minHeight: '200px'
                      }}
                    >
                      <div className="timeline-dot-wrapper position-relative mb-3">
                        <span 
                          className="timeline-dot-inline rounded-circle d-inline-block"
                          style={{
                            width: '16px',
                            height: '16px',
                            background: 'var(--secondary-color)',
                            border: '3px solid var(--component-bg)',
                            boxShadow: '0 0 0 3px var(--secondary-color)'
                          }}
                        />
                      </div>
                      
                      <div className="year-badge mb-2">
                        <span 
                          className="text-primary fw-bold"
                          style={{ fontSize: '1.1rem' }}
                        >
                          {item.duration.split('-')[0].trim()}
                        </span>
                      </div>

                      <h3 className="fs-4 fw-bold mb-2" style={{ color: 'var(--text-color)' }}>
                        {item.title}
                      </h3>
                      
                      <p className="text-secondary mb-2 fw-semibold" style={{ fontSize: '0.95rem' }}>
                        {item.organization}
                      </p>

                      <p className="text-secondary mb-3" style={{ fontSize: '0.875rem' }}>
                        {item.location}
                      </p>

                      {item.responsibilities && (
                        <div className="responsibilities-list">
                          {item.responsibilities.map((resp, index) => (
                            <p 
                              key={index} 
                              className="text-secondary mb-2 small"
                              style={{ fontSize: '0.85rem', lineHeight: '1.4' }}
                            >
                              {resp}
                            </p>
                          ))}
                        </div>
                      )}

                      {item.activities && (
                        <div className="activities-list">
                          {item.activities.map((activity, index) => (
                            <p 
                              key={index} 
                              className="text-secondary small mb-2"
                              style={{ fontSize: '0.85rem' }}
                            >
                              {activity.title}
                            </p>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;