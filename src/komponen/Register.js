import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    axios
      .post(API_URL + "register", { name, email, password })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location.href = '/dashboard-pembaca'
      })
      .catch((error) => {
        console.log("Error: ", error);
        // Tangani kesalahan saat melakukan pendaftaran
      });
  };

  componentDidMount() {
    document.body.classList.add('login-page')
  }

  componentWillUnmount() {
    document.body.classList.remove('login-page')
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="login-page">
        <Container>
          <Card className="card-login">
          <Container>
          <div>
          <img src="/img/logoo.svg" alt="logo"/>
          <h3 className="salam">Adventure start here 🚀</h3>
          <p className="ayo">Ayo buat akunmu dulu!</p>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label className="label">NAMA</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="label">EMAIL</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="label">PASSWORD</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-login">
              Sign up
            </Button>
            <p className="sudah">Sudah punya akun? <span className="login-span">Login</span></p>
          </Form>
          </Container>
          
          </Card>
          
        </Container>
      </div>
    );
  }
}
