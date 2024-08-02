import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../Styles/NavBar.css'; // Import your custom CSS

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [timer, setTimer] = useState(null);

  // Calculate offset for 20% screen height
  useEffect(() => {
    const navElement = document.querySelector('.nav');
    if (navElement) {
      setNavbarHeight(navElement.offsetHeight);
    }
  }, []);

  const offset = -window.innerHeight * 0.2 + navbarHeight; // 20% down the screen

  // Function to handle the expanded state and timer
  const handleToggle = () => {
    if (!expanded) {
      setExpanded(true);
      const newTimer = setTimeout(() => setExpanded(false), 10000); // Collapse after 10 seconds
      setTimer(newTimer);
    } else {
      setExpanded(false);
      if (timer) clearTimeout(timer);
    }
  };

  // Function to handle item click
  const handleItemClick = () => {
    setExpanded(false);
    if (timer) clearTimeout(timer);
  };

  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" expand="lg" className="nav" 
      style={{ position: 'fixed', zIndex: '999' }} expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container">
            <div className="nav-left">
              <Nav.Link className="nav-item mx-2" href="/" onClick={handleItemClick}>Home</Nav.Link>
              <Nav.Link
                className="nav-item mx-2"
                href="https://drive.google.com/file/d/1CWklcKjJcEs2Q31LCbRyNES_hzYC7JMi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleItemClick}
              >
                Resume
              </Nav.Link>
            </div>
            <div className="nav-right">
              <Nav.Link className="nav-item mx-2" href="/" onClick={handleItemClick}>Contact me</Nav.Link>
              <NavDropdown className="nav-item" title="Contents" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    offset={offset} 
                    onClick={handleItemClick}
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
                    onClick={handleItemClick}
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
                    onClick={handleItemClick}
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
                    onClick={handleItemClick}
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
                    onClick={handleItemClick}
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
