import React from 'react';
import { Card } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const getTechIcon = (tech) => {
    const iconMap = {
      'react': SiReact,
      'nodejs': SiNodedotjs,
      'javascript': SiJavascript,
      'typescript': SiTypescript,
      'bootstrap': SiBootstrap,
      'express': SiExpress,
      'mongodb': SiMongodb,
      'nextjs': SiNextdotjs,
      'html': SiHtml5,
      'sass': SiSass,
      'cypress': SiCypress,
      'jest': SiJest
    };

    const Icon = iconMap[tech];
    return Icon ? <Icon className="tech-icon" /> : null;
  };

  return (
    <Card className="project-card h-100 d-flex flex-column">
      <div className="project-image-container mx-auto mb-3">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/120';
          }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-center mb-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="mx-1">
              {getTechIcon(tech)}
            </span>
          ))}
        </div>
        
        <Card.Title className="text-center fw-bold mb-2 text-primary">{project.title}</Card.Title>
        
        <div className="text-center mb-2">
          <span className="project-date text-secondary">{project.date}</span>
        </div>
        
        <Card.Text className="text-center flex-grow-1 text-secondary">
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;