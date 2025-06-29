import React from 'react';
import { Container } from 'react-bootstrap';
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
      duration: "June 2025 - Present",
      logo: "assets/images/FOLN Logo.png", // Placeholder, update if you have the company logo
      responsibilities: [
        "Leading intern for the App Store deployment project (iOS & Android): requirements gathering, scoping, and execution.",
        "Collaborating on the Regression Testing project to ensure product quality and reliability.",
        "Building an AI ChatBot to enhance user engagement and support.",
        "Working closely with cross-functional teams to deliver full stack solutions."
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
          title: "Math & Science Testing Center - Student Staff",
          description: "Assisting students with testing and proctoring for Math and Science courses.",
          duration: "2025 - Present"
        },
        {
          title: "Box Office - Student Staff",
          description: "Handled ticket sales using ticketing software, responded to customer inquiries via phone/email, and assisted with event entry and guest support.",
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
        "Designed and implemented a streamlined, user-friendly supplier scorecard application for the Procurement and Supply Chain department",
        "Utilized Python for backend processing, Tkinter for the user interface, and MySQL with phpMyAdmin for database management",
        "Completed cybersecurity trainings from Schneider ACES Cybersecurity team"
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
        "Assisted the Director of Corporate Development with research regarding Odoo and its applications",
        "Explored how Odoo could be integrated into the company's 2nd digital transformation"
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
        "Utilized Hypervisors and Autopsy in Kali Linux",
        "Created and configured virtual load balancers on Google Public Cloud",
        "Focused on research, presentation, and teamwork"
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
          title: "Python Bootcamp Assistant",
          description: "Assisted with 2-day Python Bootcamp under the Associate Dean of Business",
          duration: "March 2023"
        }
      ]
    }
  ];

  // const getIcon = (type) => {
  //   switch (type) {
  //     case 'education':
  //       return <FaGraduationCap className="text-primary" />;
  //     case 'work':
  //       return <FaBriefcase className="text-primary" />;
  //     default:
  //       return <FaCode className="text-primary" />;
  //   }
  // };

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

        <div className="timeline-container position-relative">
          {/* Vertical line */}
          <div 
            className="timeline-line position-absolute"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'var(--primary-color)',
              opacity: 0.3
            }}
          />

          {timelineData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item position-relative mb-5"
            >
              {/* Timeline dot */}
              <div 
                className="timeline-dot position-absolute rounded-circle"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: 'var(--primary-color)',
                  border: '4px solid var(--component-bg)',
                  zIndex: 1
                }}
              />

              <div className="row">
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-end' : 'text-md-start order-md-2'}`}>
                  <div 
                    className="timeline-content p-4 rounded-4"
                    style={{
                      background: 'var(--component-bg)',
                      border: '1px solid var(--border-color)',
                      marginRight: idx % 2 === 0 ? '2rem' : '0',
                      marginLeft: idx % 2 === 0 ? '0' : '2rem',
                      textAlign: 'left'
                    }}
                  >
                    <div className="d-flex align-items-center mb-3 justify-content-between">
                      <div>
                        <h3 className="fs-4 fw-bold mb-1">{item.title}</h3>
                        <p className="text-secondary mb-0">{item.organization}</p>
                      </div>
                      <div className="organization-logo ms-3" style={{ width: '60px', height: '60px' }}>
                        <img 
                          src={item.logo} 
                          alt={`${item.organization} logo`}
                          className="img-fluid rounded"
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/60x60';
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="mb-1">
                        <span className="text-secondary">Location:</span> {item.location}
                      </p>
                      <p className="mb-1">
                        <span className="text-secondary">Duration:</span> {item.duration}
                      </p>
                      {item.gpa && (
                        <p className="mb-1">
                          <span className="text-secondary">GPA:</span> {item.gpa}
                        </p>
                      )}
                    </div>

                    {item.activities && (
                      <div>
                        <h4 className="fs-5 fw-bold mb-2">
                          {/* <span>Campus Activities</span>
                          <FaBriefcase className="text-primary" /> */}
                          Campus Activities
                        </h4>
                        <div className="activities-list">
                          {item.activities.map((activity, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="activity-item mb-3"
                            >
                              <h5 className="fs-6 fw-bold mb-1">{activity.title}</h5>
                              <p className="text-secondary mb-1 small">{activity.description}</p>
                              <p className="text-secondary mb-0 small">
                                <span className="text-primary">Duration:</span> {activity.duration}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.responsibilities && (
                      <div>
                        <h4 className="fs-5 fw-bold mb-2">
                          {/* <span>Key Responsibilities</span>
                          <FaCode className="text-primary" /> */}
                          Key Responsibilities
                        </h4>
                        <ul className="list-unstyled mb-0">
                          {item.responsibilities.map((responsibility, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="mb-2 d-flex align-items-center"
                            >
                              <span className="text-primary me-2">•</span>
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-start' : 'text-md-end order-md-1'}`}>
                  <div className="timeline-date d-none d-md-block">
                    <span className="badge bg-primary rounded-pill px-3 py-2">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;