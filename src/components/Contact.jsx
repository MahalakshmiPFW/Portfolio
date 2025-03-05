import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });

    const serviceId = 'service_cw9a0ww';
    const templateId = 'template_xw75uhu';
    const publicKey = 'XEnmDteQGfgktRQm3';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mahalakshmi',
      message: message,
    }

    //To send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }


  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="contact-container rounded-4 p-4 p-md-5">
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <div className="profile-picture-container mb-4">
                  <img 
                    src="assets/images/Profile.png" 
                    alt="Profile" 
                    className="profile-picture"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/160x160';
                    }}
                  />
                </div>
                <h2 className="fs-2 sanjumahalakshmi12@gmail.com mb-2 text-center">Enjoyed my work? Let's connect!</h2>
                <p className="mb-4 text-center">
                  I'm always up for a chat. <br />
                  Ping me an email at <a href="mailto:sanjumahalakshmi12@gmail.com" className="text-primary">sanjumahalakshmi12@gmail.com</a> <br />or give me a shout on social media.
                </p>
                <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3">
                  <a href="https://github.com/MahalakshmiPFW" className="social-link">
                    <FaGithub className="fs-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/mahalakshmimahadevan/" className="social-link">
                    <FaLinkedin className="fs-4" />
                  </a>
                  <a href="https://www.instagram.com/tvdforever__delena/" className="social-link">
                    <FaInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="contactName">
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