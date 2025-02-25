import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Add actual form submission logic here
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="contact-container rounded-4 p-4 p-md-5">
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <div className="profile-picture-container mb-4">
                  <img 
                    src="assets/images/profile-picture.jpg" 
                    alt="Profile" 
                    className="profile-picture"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/160x160';
                    }}
                  />
                </div>
                <h3 className="mb-2">Contact</h3>
                <h2 className="fs-2 fw-bold mb-3">Enjoyed my work? Let's work together</h2>
                <p className="text-light mb-4">
                  I'm always up for a chat. Ping me an email at <a href="mailto:mahalakshmimahadevan.1225@gmail.com" className="text-primary">mahalakshmimahadevan.1225@gmail.com</a> or give me a shout on social media.
                </p>
                <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3">
                  <a href="#" className="social-link">
                    <FaGithub className="fs-4" />
                  </a>
                  <a href="#" className="social-link">
                    <FaLinkedin className="fs-4" />
                  </a>
                  <a href="#" className="social-link">
                    <FaInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Control 
                    type="email" 
                    placeholder="E-mail" 
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    placeholder="Your message" 
                    className="form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="text-end">
                  <Button variant="primary" type="submit" className="custom-btn d-inline-flex align-items-center">
                    <span className="me-2">Send me a message</span>
                    <FaArrowRight />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;