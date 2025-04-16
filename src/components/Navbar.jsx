import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <BootstrapNavbar expand="lg" variant={darkMode ? "dark" : "light"} className="py-3 fixed-top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="brand-text">
          <span className="text-primary">Mahalakshmi</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link 
              href="#" 
              className="nav-link theme-toggle fs-4" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;