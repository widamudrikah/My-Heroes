import React from 'react';
import{Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100">
  <Container>
    <Row>
      <Col>
        <h1 className='text-white text-center fs-1'>INGIN MENJELAJAHI KISAH PARA HERO YANG MENAKJUBKAN?</h1>
        <p className="paragraf small-paragraf ">“Maka ceritakanlah wahai Nabi kisah ini kepada kaummu <br></br>agar mereka berpikir.” (QS. Al-A’raf: 176)</p>
        <h4 className='gulir border'>Scroll kebawah untuk Sign-in!</h4>
      </Col>
    </Row>
  </Container>
</div>
  );
};

export default HeroComp
