import React, { useEffect, useState } from "react";
import { Card, Container, Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarKomponen from "./NavbarKomponen";
import Footer from "./Footer";

const DetailKisah = () => {
  const [kisah, setKisah] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Ambil data berdasarkan id
    const fetchKisah = async () => {
      const response = await fetch(`http://localhost:8000/api/kisah/${id}`);
      const data = await response.json();
      setKisah(data.Data[0]);
    };

    fetchKisah();
  }, [id]);

  if (!kisah) {
    return (
      <div>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <NavbarKomponen />
      <Image
        src={"http://127.0.0.1:8000/storage/" + kisah.gambar}
        fluid
        className="mt-3"
      />
      <Container>
        <h2 className="mt-5 mb-4">🚀 {kisah.sub_judul} 🚀</h2>
        <Card>
        <Card.Body className="detail-kisah">
          {kisah.kisah.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Card.Body>
        </Card>
        
      </Container>
      <Footer />
    </div>
  );
};

export default DetailKisah;
