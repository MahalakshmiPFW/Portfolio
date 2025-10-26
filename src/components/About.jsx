import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <div className="about-container rounded-4 p-4 p-md-5">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="about-image-container">
                <img
                  src="assets/images/Profile.png"
                  alt="Profile-Pic"
                  className="img-fluid rounded-circle border border-3"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300';
                  }}
                />
              </div>
            </Col>
            <Col lg={8}>
              <h2 className="mb-2 fw-bold">About Me</h2>
              <h3 className="fs-3 mb-3">
                  Building with code. Dreaming in color.
              </h3>
              <p className="mb-4 text-secondary">
                I'm a developer who loves turning ideas into interactive, beautiful apps.<br />
                React, Node.js, and a splash of creativity are my favorite tools.<br />
                I'm now on the lookout for opportunities to bring my skills and enthusiasm to a great company anywhere in the world! <br />
                Always learning, always creating.
              </p>
              <div className="mb-3">
                <strong>Fun Facts:</strong>
                <ul>
                  <li>🎨 Self-taught artist & painter</li>
                  <li>🎤 Love singing and open mics</li>
                  <li>☕ Coffee aficionado</li>
                  <li>📚 Fiction & fantasy bookworm</li>
                </ul>
              </div>
              <Button variant="primary" className="custom-btn me-2"
                onClick={() => window.open('/Resume.pdf', '_blank', 'noopener,noreferrer')}>
                My Resume
              </Button>
              <Button variant="outline-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Collaborate!
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;