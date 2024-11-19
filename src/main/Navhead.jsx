import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navhead.css'; // Custom CSS

function Navhead() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`custom-navbar ${isScrolled ? 'scrolled-navbar' : ''}`}>
        <Container>
          <Row className="align-items-center w-100">
            <Col xs={12} md={4}>
              
            </Col>
            <Col xs={12} md={8}>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                <Nav className="nav-links">
                  <Nav.Link href="#home" className="nav-link-hover">AboutUS</Nav.Link>
                  <Nav.Link href="#care" className="nav-link-hover">Care</Nav.Link>
                  <Nav.Link href="#therapy" className="nav-link-hover">Therapy</Nav.Link>
                  <Nav.Link href="#athome" className="nav-link-hover">HomeService</Nav.Link>
                  <Nav.Link href="#we" className="nav-link-hover">We</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navhead;
