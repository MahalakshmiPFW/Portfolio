import React from 'react';
import { Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Card 
      className="project-card h-100 d-flex flex-column border"
      style={{ 
        backgroundColor: 'var(--component-bg)',
        borderColor: 'var(--border-color)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'var(--primary-color)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Project image with blur and text overlay */}
      <div 
        className="project-thumbnail mb-4 position-relative overflow-hidden"
        style={{
          aspectRatio: '16/9',
          backgroundColor: 'var(--secondary-bg)',
          borderRadius: '0.375rem'
        }}
      >
        {project.image ? (
          /* Blurred background image */
          <img 
            src={project.image}
            alt={project.title}
            className="w-100 h-100 position-absolute top-0 start-0"
            style={{
              objectFit: 'cover',
              filter: 'blur(8px) brightness(0.7)',
              transform: 'scale(1.1)',
              transition: 'filter 0.3s ease, transform 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.filter = 'blur(10px) brightness(0.8)';
              e.currentTarget.style.transform = 'scale(1.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.filter = 'blur(8px) brightness(0.7)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          /* No image placeholder with gradient */
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(135deg, rgba(138, 104, 213, 0.3) 0%, rgba(83, 194, 139, 0.3) 100%)',
              filter: 'blur(8px)',
              zIndex: 0
            }}
          />
        )}
        {/* Text overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: project.isWIP ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(1px)',
            zIndex: 1
          }}
        >
          <span 
            style={{
              fontSize: project.isWIP ? '0.9rem' : '1rem',
              color: 'rgba(255, 255, 255, 0.95)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
              padding: '1rem',
              lineHeight: '1.5'
            }}
          >
            {project.isWIP ? 'This project is currently a Work in Progress' : project.title}
          </span>
        </div>
      </div>

      <Card.Body className="d-flex flex-column flex-grow-1 justify-content-between">
        <div className="d-flex flex-column">
          {/* Title and External Link */}
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h3 
              className="fw-bold text-primary mb-0"
              style={{ fontSize: '1.5rem', transition: 'color 0.3s' }}
            >
              {project.title}
            </h3>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
                style={{ fontSize: '1.2rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          {/* Date */}
          <p className="text-secondary mb-3" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {project.date}
          </p>
          
          {/* Description */}
          <p className="text-secondary mb-3" style={{ lineHeight: '1.6' }}>
            {project.description}
          </p>
        </div>
        
        {/* Tech stack badges */}
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-badge"
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-color)',
                fontFamily: 'monospace',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default React.memo(ProjectCard);