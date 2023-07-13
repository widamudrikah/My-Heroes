import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Gallery1 from "../assets/img/gallery/gallery1.png";
import Gallery2 from "../assets/img/gallery/gallery2.png";
import Gallery3 from "../assets/img/gallery/gallery3.png";
import Gallery4 from "../assets/img/gallery/gallery4.png";
import Gallery5 from "../assets/img/gallery/gallery5.png";
import Gallery6 from "../assets/img/gallery/gallery6.png";

const GalleryComp = () => {
  return (
    <div className='gallery min-vh-100 d-flex align-items-center'>
      <Container>
        <h1 className='kata'>Taukah Kamu Manfaat membaca?</h1>
        <Row className='mt-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4'>
          <Col>
          <img src={Gallery1} alt="unspalsh.com" className='w-100'/> 
          </Col>
          <Col>
          <img src={Gallery2} alt="unspalsh.com" className="w-100"/> 
          </Col>
          <Col>
          <img src={Gallery3} alt="unspalsh.com" className="w-100"/> 
          </Col>
          <Col>
          <img src={Gallery4} alt="unspalsh.com" className='w-100'/> 
          </Col>
          <Col>
          <img src={Gallery5} alt="unspalsh.com" className='w-100'/> 
          </Col>
          <Col>
          <img src={Gallery6} alt="unspalsh.com" className='w-100'/> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp
