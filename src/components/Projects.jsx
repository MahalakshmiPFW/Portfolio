import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CampusMart - Buy Smart, Sell Fast',
      description: 'An e-commerce platform for students to buy and sell products on campus.',
      date: 'Sept - Dec 2024',
      image: 'assets/images/CampusMart-logo.png',
      technologies: ['react', 'nodejs', 'mongodb', 'express', 'bootstrap']
    },
    {
      id: 2,
      title: 'Sweetwater Student Opportunities App',
      description: 'An event management app for students to find and join opportunities at Sweetwater.',
      date: 'Sept - Dec 2024',
      image: 'assets/images/sweetwater-1.png',
      technologies: ['react', 'nodejs', 'express', 'nextjs', 'typescript']
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A personal portfolio showcasing my web development skills, including projects built with React, Node.js, and other modern technologies.',
      date: 'Jul - Dec 2023',
      image: 'assets/images/Portfolio.png',
      technologies: ['react', 'bootstrap']
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="text-center fs-2 fw-bold mb-5">Take a look at my Highlighted Projects</h2>
        
        <Row className="g-4">
          {projects.map(project => (
            <Col key={project.id} md={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button 
            variant="outline-secondary" 
            className="custom-btn d-inline-flex align-items-center"
          >
            <span className="me-2">See all</span>
            <FaArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;