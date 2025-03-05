import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest } from 'react-icons/si';

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
                <SiExpress className="tech-icon express-icon" />
                <SiMongodb className="tech-icon mongodb-icon"/>
                <SiNextdotjs className="tech-icon next-icon" />
                <SiHtml5 className="tech-icon html-icon" />
                <SiSass className="tech-icon sass-icon" />
                <SiCypress className="tech-icon cypress-icon" />
                <SiJest className="tech-icon jest-icon" />
              </div>
              <h2 className="mb-2 fw-bold">About Me</h2>
              <h3 className="fs-3 mb-3">
                I'm a passionate software developer looking for my first international opportunity!
              </h3>
              <p className="mb-4 text-secondary">
                Beyond coding, you’ll find me savoring a cup of coffee or diving into the world of fiction, where I can lose myself for hours. 
                I love singing, painting, and binge-watching TV shows and movies that spark my imagination. As a self-taught artist with a passion 
                for creativity, I’m now on the lookout for opportunities to bring my skills and enthusiasm to a tech company in the United States or 
                Europe. I’m excited by the idea of relocating to embrace new challenges and explore fresh horizons.
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