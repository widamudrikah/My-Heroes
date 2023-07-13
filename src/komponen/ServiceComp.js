import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServiceComp = () => {
  return (
    <div className=' services min-vh-100 d-flex align-items-center'>
      <Container>
        <Row className='mb-5'>
          <Col>
            <h1 className='text-center fw-bold'>Kelebihan</h1>
          </Col>
        </Row>
        <Row className='row-cols-lg-4 row-cols-md-2 row-cols-1 justify-content-center'>
          <Col className='text-center py-5 px-3'>
            <i className='fa-regular fa-star fs-2 mb-3'></i>
            <h5>Konten Yang Sesuai</h5>
            <p>konten kisah sahabat Nabi Muhammad yang disajikan sesuai dengan pemahaman anak-anak</p>
          </Col>
          <Col className='text-center py-5 px-3'>
            <i className='fa-solid fa-street-view fs-2 mb-3'></i>
            <h5>Kemudahan navigasi</h5>
            <p>Desainlah tata letak website yang intuitif dan mudah dinavigasi.</p>
          </Col>
          <Col className='text-center py-5 px-3'>
            <i className='fa-solid fa-globe fs-2 mb-3'></i>
            <h5>Ketersediaan offline</h5>
            <p>pengguna dapat mengakses kisah-kisah bahkan saat tidak terhubung ke internet.</p>
          </Col>
          <Col className='text-center py-5 px-3'>
            <i className='fa-solid fa-mobile-screen-button fs-2 mb-3'></i>
            <h5>Mobile-friendly</h5>
            <p>pengguna dapat mengakses website melalui smartphone atau tablet dengan nyaman.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceComp;
