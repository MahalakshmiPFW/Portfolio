import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
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

    //To send email using EmailJS (dynamically imported to reduce initial bundle size)
    const { default: emailjs } = await import('@emailjs/browser');
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      setStatus('error');
    });
  }


  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-5 fw-bold mb-3">🪄 Let's Build Something Timeless ✨</h2>
        </motion.div>
        <motion.div
          className="contact-container rounded-4 p-4 p-md-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <motion.div
                  className="profile-picture-container mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src="assets/images/Profile.png" 
                    alt="Profile" 
                    className="profile-picture"
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="160"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/160x160';
                    }}
                  />
                </motion.div>
                <h2 className="fs-2 mb-2 text-center">Enjoyed my work? Let's connect!</h2>
                <p className="mb-4 text-center">
                  I'm always up for a chat.<br />
                  <a href="mailto:sanjumahalakshmi12@gmail.com" className="text-primary fw-bold">sanjumahalakshmi12@gmail.com</a>
                </p>
                <motion.div
                  className="social-links d-flex justify-content-center gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {[
                    { href: "https://github.com/MahalakshmiPFW", icon: <FaGithub className="fs-4" />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/mahalakshmimahadevan/", icon: <FaLinkedin className="fs-4" />, label: "LinkedIn" },
                    { href: "https://www.instagram.com/tvdforever__delena/", icon: <FaInstagram className="fs-4" />, label: "Instagram" }
                  ].map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </motion.div>
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
                  <Button variant="primary" type="submit" className="custom-btn d-inline-flex align-items-center" disabled={status === 'loading'}>
                    <span className="me-2">{status === 'loading' ? 'Sending...' : 'Send me a message'}</span>
                    <FaArrowRight />
                  </Button>
                </div>
                {status === 'success' && <div className="alert alert-success mt-3">Email sent successfully! 🎉</div>}
                {status === 'error' && <div className="alert alert-danger mt-3">Error sending email. Please try again.</div>}
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;