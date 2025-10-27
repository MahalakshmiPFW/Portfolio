import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight, FaSmileBeam } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi <span className="text-primary"><FaSmileBeam /></span>,<br />
              I'm <span className="text-primary">Mahalakshmi</span>
            </h1>
            <span 
              className="fs-5 mb-3 d-block fw-semibold"
              style={{
                background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 4px rgba(138, 104, 213, 0.2)) drop-shadow(0 0 8px rgba(74, 178, 128, 0.15))',
                textShadow: '0 0 3px rgba(138, 104, 213, 0.25)'
              }}
            >
              <Typewriter
                words={[
                  'Full-Stack Developer',
                  'UI/UX Enthusiast',
                  'Code + Creativity = Magic',
                  'Lifelong Learner'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
            <p className="text-secondary mb-4">
              I craft digital experiences that blend logic and imagination.<br />
              Currently exploring the latest in React, Next.js, and Node.js, I'm eager to join a team where I can grow, collaborate, and make an impact.<br /><br />
              Let’s build something amazing together!
            </p>
            <div className="d-flex gap-3 mb-6">
              <Button variant="primary" className="custom-btn d-flex align-items-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="me-2">Let's Connect!</span>
                <FaArrowRight />
              </Button>
              <Button variant="outline-primary" href="/Resume.pdf" target="_blank">
                Download Resume
              </Button>
            </div>
          </Col>
          <Col md={7} className="position-relative d-flex justify-content-center justify-content-md-end">
            <motion.div
              className="hero-image-container d-flex justify-content-center justify-content-md-end align-items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                minHeight: '500px',
                paddingRight: '0',
                width: '100%',
                height: '100%'
              }}
            >
              <img
                src="assets/images/dev-type.svg"
                alt="Developer coding"
                className="img-fluid"
                loading="eager"
                decoding="async"
                width="900"
                height="900"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  height: '100%',
                  maxHeight: '350px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x400';
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;