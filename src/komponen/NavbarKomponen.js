import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarKomponen = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
      <Navbar.Brand>
            <img
              src="/img/logoo.svg"
              width="150"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <span className='d-flex'> Hello Kawan!</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarKomponen
