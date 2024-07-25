import React from 'react';
import { Navbar, Nav ,NavDropdown} from 'react-bootstrap';
import '../Styles/NavBar.css'; // Import your custom CSS

const NavBar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" expand="lg" className="nav" 
      style={{ position: 'fixed',zIndex: '999' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container">
            <div className="nav-left">
              <Nav.Link className="nav-item mx-2" href="/">Home</Nav.Link>
              <Nav.Link className="nav-item mx-2" href="/">Resume</Nav.Link>
            </div>
            <div className="nav-right">
              <Nav.Link className="nav-item mx-2" href="/">Contact me </Nav.Link>
              {/* {<Nav.Link className="nav-item mx-2" href="/">Contact</Nav.Link>} */}
              <NavDropdown className="nav-item" title="Contents" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">About</NavDropdown.Item>
            <NavDropdown.Item href="/">Experince</NavDropdown.Item>
            <NavDropdown.Item href="/">Projects</NavDropdown.Item>
            <NavDropdown.Item href="/">Publications</NavDropdown.Item>
            <NavDropdown.Item href="/">Skills</NavDropdown.Item>
          </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
