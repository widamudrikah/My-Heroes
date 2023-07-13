import React, {useState, useEffect } from 'react'
import {Container, Navbar, Nav,} from 'react-bootstrap'
import Logo from "../assets/img/logo/logohero.png";

const NavbarComp = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 580) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

  return (
    <div className='sticky-top'>
      <Navbar variant='dark' expand="lg" className={changeColor ?
      "color-active" : ""}>
      <Container>
      <Navbar.Brand >
      <img src={Logo} alt="hero" className=" logo-image "/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
          <Nav.Link href="/register" className='mx-2'>Register</Nav.Link>
          <Nav.Link href="/login" className='mx-2'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComp;
