import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarAdmin = ({ handleKisahNavigation, handleUserNavigation }) => {

  return (
    <div>
        <Navbar expand="lg" sticky="top">
            <Container>
            <Navbar.Brand>
            <img
              src="/img/logoo.svg"
              width="180"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={handleKisahNavigation}>Kisah</Nav.Link>
            <Nav.Link onClick={handleUserNavigation}>User</Nav.Link>
          </Nav>
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <span className='d-flex'> Hello Admin</span>
        </Navbar.Collapse>
        
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarAdmin