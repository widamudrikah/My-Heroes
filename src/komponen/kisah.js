import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Kisah = ({kisah}) => {
  console.log("URL Gambar:", kisah.gambar);

  const handleBacaSekarang = () => {
    window.location.href = `/detail-kisah/${kisah.id}`;
  }
  return (
    <div>
      <Card className="mt-2">
      
        <Card.Img variant="top" src={ "http://127.0.0.1:8000/storage/"+kisah.gambar } />
        <Card.Body>
          <Card.Title>{ kisah.sub_judul }</Card.Title>
          <Button className="button-cari mt-2" onClick={handleBacaSekarang}>Baca Sekarang</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kisah;
