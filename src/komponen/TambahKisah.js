import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { API_URL } from "../utils/constant";

export default class TambahKisah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "",
      sub_judul: "",
      gambar: null,
      kisah: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFileChange = (event) => {
    this.setState({ gambar: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { judul, sub_judul, gambar, kisah } = this.state;
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("sub_judul", sub_judul);
    formData.append("gambar", gambar);
    formData.append("kisah", kisah);

    axios
      .post(API_URL + "kisah/tambah", formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location.href = '/dashboard-admin'
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
        if(error.response && error.response.data && error.response.data.errors) {
            this.setState({ error: error.response.data.errors })
        } else {
            this.setState({ error: {message: "ada yang belum diisi"} })
        }
      });
  };

  componentDidMount() {
    document.body.classList.add('admin-page')
  }
  componentWillUnmount() {
    document.body.classList.remove('admin-page')
  }

  render() {
    const { judul, sub_judul, kisah } = this.state;
    return (
      <div>
        <Container>
          <Card className="card-tambah-kisah">
            <Container>
              <h4 className="mt-3">Tambah Kisah</h4>
              <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="judul">
                  <Form.Label className="label">Judul</Form.Label>
                  <Form.Control
                    type="text"
                    name="judul"
                    value={judul}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="sub_judul">
                  <Form.Label className="label">Sub Judul</Form.Label>
                  <Form.Control
                    type="text"
                    name="sub_judul"
                    value={sub_judul}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="gambar">
                  <Form.Label className="label">Gambar</Form.Label>
                  <Form.Control
                    type="file"
                    name="gambar"
                    onChange={this.handleFileChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="kisah">
                  <Form.Label className="label">Kisah</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="kisah"
                    value={kisah}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-tambah">
                  Tambah
                </Button>
              </Form>
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}
