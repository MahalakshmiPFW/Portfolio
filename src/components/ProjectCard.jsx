import React from 'react';
import { Card } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiBootstrap } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const getTechIcon = (tech) => {
    switch (tech) {
      case 'react':
        return <SiReact className="tech-icon react-icon" />;
      case 'nodejs':
        return <SiNodedotjs className="tech-icon node-icon" />;
      case 'bootstrap':
        return <SiBootstrap className="tech-icon bootstrap-icon" />;
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
          <span className="project-date">{project.date}</span>
          <div className="d-flex gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index}>{getTechIcon(tech)}</span>
            ))}
          </div>
        </div>
        <Card.Title className="fw-bold">{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
