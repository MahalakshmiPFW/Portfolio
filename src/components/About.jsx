import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <div className="about-container rounded-4 p-4 p-md-5">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="assets/images/developer-with-cat.png" 
                  alt="Developer with a cat" 
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300';
                  }}
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="tech-stack d-flex gap-3 mb-4">
                <SiReact className="tech-icon react-icon" />
                <SiNodedotjs className="tech-icon node-icon" />
                <SiJavascript className="tech-icon js-icon" />
                <SiTypescript className="tech-icon ts-icon" />
                <SiBootstrap className="tech-icon bootstrap-icon" />
              </div>
              <h3 className="text-primary mb-2">About me</h3>
              <h2 className="fs-2 fw-bold mb-3">
                I'm a passionate software developer looking for my first international opportunity
              </h2>
              <p className="text-light mb-4">
                Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who 
                enjoys spending my free time dancing. I am currently seeking opportunities to 
                bring my skills and enthusiasm to a tech company in the United States or Europe 
                and am excited about the prospect of relocating to pursue new challenges.
              </p>
              <Button variant="primary" className="custom-btn">
                My resume
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;