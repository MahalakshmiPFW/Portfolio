import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary">Mahalakshmi</span>
            </h1>
            <p className="fs-5 mb-3">Full-stack developer and innovation enthusiast</p>
            <p className="text-secondary mb-4">
              Over 4 years of experience in the tech industry. I specialize in building innovative 
              web and mobile applications using technologies such as React, React Native, and Node.js.
            </p>
            <div className="d-flex gap-3">
              <Button variant="outline-secondary" className="custom-btn">
                My resume
              </Button>
              <Button variant="primary" className="custom-btn d-flex align-items-center">
                <span className="me-2">Get in touch!</span>
                <FaArrowRight />
              </Button>
            </div>
          </Col>
          <Col md={7} className="position-relative">
            <div className="hero-image-container d-flex justify-content-center">
              <img 
                src="assets/images/dev-type.svg" 
                alt="Developer coding" 
                className="img-fluid"
                style={{ 
                  maxWidth: '125%', 
                  transform: 'translateX(12%)',
                  position: 'relative',
                  zIndex: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x400';
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;