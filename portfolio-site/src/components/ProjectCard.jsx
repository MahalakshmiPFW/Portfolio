import React from 'react';
import { Card } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiBootstrap } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const getTechIcon = (tech) => {
    switch(tech) {
      case 'react':
        return <SiReact className="tech-icon react-icon" />;
      case 'node':
        return <SiNodedotjs className="tech-icon node-icon" />;
      case 'bootstrap':
        return <SiBootstrap className="tech-icon bootstrap-icon" />;
      default:
        return null;
    }
  };

  return (
    <Card className="project-card h-100">
      <div className="project-image-container p-2">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image rounded-3"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x200';
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