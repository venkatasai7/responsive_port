import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../Styles/NavBar.css'; // Import your custom CSS

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  // Define an offset to center the section in the viewport
  const offset = -window.innerHeight / 2 + 50; // Adjust the +50 value as needed to account for the navbar height

  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" expand="lg" className="nav" 
      style={{ position: 'fixed', zIndex: '999' }} expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container">
            <div className="nav-left">
              <Nav.Link className="nav-item mx-2" href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link
                className="nav-item mx-2"
                href="https://drive.google.com/file/d/1CWklcKjJcEs2Q31LCbRyNES_hzYC7JMi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                Resume
              </Nav.Link>
            </div>
            <div className="nav-right">
              <Nav.Link className="nav-item mx-2" href="/" onClick={() => setExpanded(false)}>Contact me</Nav.Link>
              <NavDropdown className="nav-item" title="Contents" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={() => setExpanded(false)}
                  >
                    About
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    to="experiences" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={() => setExpanded(false)}
                  >
                    Experience
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    to="projects" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={() => setExpanded(false)}
                  >
                    Projects
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    to="publications" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={() => setExpanded(false)}
                  >
                    Publications
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={() => setExpanded(false)}
                  >
                    Skills
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
