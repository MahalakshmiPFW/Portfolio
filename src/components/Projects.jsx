import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 5,
      title: 'Gesture2Globe',
      description: 'Real-time ASL sign language recognition using MediaPipe to capture hand and pose landmarks via webcam. Recognizes 30-40 common signs and fingerspelling, converting them to English text with Text-to-Speech output. Team project for Applications of Deep Learning course.',
      date: 'Oct. 2024 – Present',
      image: null,
      technologies: ['Python', 'MediaPipe', 'PiperTTS', 'OpenCV', 'Flask/Streamlit', 'ONNX', 'espeak-ng', 'Google Translate API'],
      isWIP: true
    },
    {
      id: 1,
      title: 'SyllabusSync',
      description: 'AI-powered web application that converts course syllabi into organized calendar tasks using Google Gemini 2.0 Flash API. Implemented native PDF processing, automatic semester-aware date detection, and Google Calendar sync.',
      date: 'Sept. 2025',
      image: 'assets/images/SyllabusSync.png',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS v4', 'Node.js', 'Google Gemini API', 'Vercel'],
      demo: 'https://syllabus-sync.vercel.app'
    },
    {
      id: 4,
      title: 'MastodonHub',
      description: 'Full-stack web application for campus club and event engagement. Achieved 95%+ backend test coverage with Cypress and 45%+ frontend coverage with Jest. Built Contact Support with EmailJS and Google Calendar integration.',
      date: 'Jan. 2025 – Apr. 2025',
      image: 'assets/images/MastodonHub.png',
      technologies: ['React', 'Django', 'SQLite', 'Cypress', 'Jest', 'EmailJS', 'Jira', 'Bitbucket'],
      demo: 'https://mastodonhub.vercel.app'
    },
    {
      id: 3,
      title: 'CampusMart',
      description: 'Peer-to-peer responsive ecommerce platform using the MERN stack for secure buying and selling of used items. Deployed on Vercel with Agile development practices.',
      date: 'Aug. 2024 – Dec. 2024',
      image: 'assets/images/CampusMart-logo.png',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Vercel'],
      demo: 'https://campusmart.vercel.app'
    },
    {
      id: 2,
      title: 'Sweetwater Student Opportunities App',
      description: 'Web application for student opportunities with CRUD operations for event management, RSVP functionality, and event feedback. Responsive design for desktop and mobile.',
      date: 'Sep. 2024 – Dec. 2024',
      image: 'assets/images/sweetwater-1.png',
      technologies: ['Next.js', 'MongoDB', 'Express', 'React', 'Node.js']
    }
  ];

  return (
    <section id="projects" className="projects-section py-5" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fs-1 fw-bold mb-4">Projects</h2>
          <p className="text-center text-secondary mb-5 fs-5" style={{ maxWidth: '42rem', margin: '0 auto' }}>
            A curated selection of my recent work, showcasing expertise in full-stack 
            development, AI integration, and modern web technologies.
          </p>
        </motion.div>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col key={project.id} xs={12} sm={12} md={6} lg={6} xl={6}>
              <motion.div
                className="h-100 d-flex"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }} // increased delay increment for smooth stagger
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline-secondary" 
            className="custom-btn d-inline-flex align-items-center"
            onClick={() => window.open('https://github.com/MahalakshmiPFW?tab=repositories', '_blank')}
          >
            <span className="me-2">See all</span>
            <FaArrowRight />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
