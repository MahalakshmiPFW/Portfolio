import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            <span className="fs-5 mb-3 d-block text-primary">
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
          <Col md={7} className="position-relative">
            <motion.div
              className="hero-image-container d-flex justify-content-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="assets/images/dev-type.svg"
                alt="Developer coding"
                className="img-fluid"
                style={{
                  maxWidth: '190%',
                  transform: 'translateX(5%) scale(1.5)',
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