import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import '../Styles/NavBar.css'; 
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const offset = -window.innerHeight / 2 + 50; 
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetails = () => {
    navigate('/Contact');
  };

  const handleNavItemClick = (path, target) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { target } });
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset: offset,
      });
    }
    setExpanded(false);
  };

  return (
    <>
      <Navbar 
         bg={"black"} 
        variant={"dark"}
        fixed="top" expand="lg" className="nav"
        style={{ position: 'fixed', zIndex: '998' }} expanded={expanded}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container w-100 d-flex justify-content-between align-items-center">
            <div className="nav-left d-flex align-items-center">
              <Nav.Link className="nav-item mx-2" href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link
                className="nav-item mx-2"
                href="https://drive.google.com/file/d/1uIydknPzUDDImbZlDlafaePxXiXLN8gK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                Resume
              </Nav.Link>
            </div>
            <div className="nav-right d-flex align-items-center">
              <Nav.Link className="nav-item mx-2" onClick={handleViewDetails}>Contact</Nav.Link>
              <NavDropdown className="nav-item mx-2" title="Contents" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleNavItemClick('/', 'about')}>
                  About
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavItemClick('/', 'experiences')}>
                  Experience
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavItemClick('/', 'projects')}>
                  Projects
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavItemClick('/', 'publications')}>
                  Publications
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavItemClick('/', 'skills')}>
                  Skills
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
