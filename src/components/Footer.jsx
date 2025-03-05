import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="text-secondary mb-0">
              © Mahalakshmi 2025.
            </p>
          </Col>
          <Col md={6}>
            <div className="footer-links d-flex justify-content-md-end justify-content-center gap-4">
              <a href="https://github.com/MahalakshmiPFW" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/mahalakshmimahadevan/" className="footer-link">LinkedIn</a>
              <a href="https://www.instagram.com/tvdforever__delena/" className="footer-link">Instagram</a>
              <a href="#home" className="footer-link">
                <FaArrowUp />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;