import React from 'react';
import { Card } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const getTechIcon = (tech) => {
    switch (tech) {
      case 'react':
        return <SiReact className="tech-icon react-icon" />;
      case 'nodejs':
        return <SiNodedotjs className="tech-icon node-icon" />;
      case 'javascript':
        return <SiJavascript className="tech-icon js-icon" />;
      case 'typescript':
        return <SiTypescript className="tech-icon ts-icon" />;
      case 'bootstrap':
        return <SiBootstrap className="tech-icon bootstrap-icon" />;
      case 'express':
        return <SiExpress className="tech-icon express-icon" />;
      case 'mongodb':
        return <SiMongodb className="tech-icon mongodb-icon" />;
      case 'nextjs':
        return <SiNextdotjs className="tech-icon next-icon" />;
      case 'html':
        return <SiHtml5 className="tech-icon html-icon" />;
      case 'sass':
        return <SiSass className="tech-icon sass-icon" />;
      case 'cypress':
        return <SiCypress className="tech-icon cypress-icon" />;
      case 'jest':
        return <SiJest className="tech-icon jest-icon" />;
      default:
        return null;
    }
  };
  

  return (
    <Card className="project-card h-100 text-center p-3">
      {/* Circular Image Container */}
      <div className="image-container mx-auto">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/100';
          }}
        />
      </div>

      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index}>{getTechIcon(tech)}</span>
            ))}
          </div>
        </div>
        <Card.Title className="fw-bold">{project.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="project-date">{project.date}</span>
        </div>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
