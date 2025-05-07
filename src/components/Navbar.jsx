import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <BootstrapNavbar
      expand="lg"
      variant={darkMode ? "dark" : "light"}
      className="py-3 fixed-top shadow-sm glass-navbar"
      style={{ backdropFilter: 'blur(8px)', background: darkMode ? 'rgba(30,30,30,0.85)' : 'rgba(255,255,255,0.85)' }}
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          className="brand-text fw-bold fs-2"
          style={{
            letterSpacing: '0.05em',
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700
          }}
        >
          <span className="text-primary">
            <Typewriter
              words={['Mahalakshmi', 'Maha.codes()', 'Creative Dev']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#education" className="nav-link">Education</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            <a href="https://github.com/MahalakshmiPFW" target="_blank" rel="noopener noreferrer" className="nav-link px-2">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/mahalakshmimahadevan/" target="_blank" rel="noopener noreferrer" className="nav-link px-2">
              <FaLinkedin size={22} />
            </a>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</Tooltip>}
            >
              <Button
                variant="outline-secondary"
                className="ms-2"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{ border: 'none', background: 'transparent' }}
              >
                {darkMode ? '☀️' : '🌙'}
              </Button>
            </OverlayTrigger>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;