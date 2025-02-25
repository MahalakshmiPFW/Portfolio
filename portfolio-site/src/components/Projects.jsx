import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DevLinks',
      description: 'A link aggregator for social media.',
      date: 'Jul - Dec 2023',
      image: 'assets/images/devlinks-project.png',
      technologies: ['react']
    },
    {
      id: 2,
      title: 'Feedback Widget',
      description: 'A feedback widget to improve your applications based on users feedback.',
      date: 'Jul - Dec 2023',
      image: 'assets/images/feedback-widget-project.png',
      technologies: ['react', 'node']
    },
    {
      id: 3,
      title: 'Nutritional table',
      description: 'An app to improve your eating habits based on the nutritional values.',
      date: 'Jul - Dec 2023',
      image: 'assets/images/nutritional-table-project.png',
      technologies: ['react', 'bootstrap']
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="compass-element mb-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" stroke="#53c28b" strokeWidth="2" />
            <line x1="10" y1="20" x2="30" y2="20" stroke="#53c28b" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="30" stroke="#53c28b" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-center mb-2">Projects</h3>
        <h2 className="text-center fs-2 fw-bold mb-2">Take a look at my highlighted projects</h2>
        
        <Row className="g-4">
          {projects.map(project => (
            <Col key={project.id} md={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline-secondary" className="custom-btn d-inline-flex align-items-center">
            <span className="me-2">See all</span>
            <FaArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;