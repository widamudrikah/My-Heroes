import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='mt-5'>
          <Col className='mb-3 mt-3'>
            <p>&copy; 2023 My Heroes. Made with ❤.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
