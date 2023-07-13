import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    axios
      .post(API_URL + "login", { email, password })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const { role } = res.data.user[0];
        console.log(role)

        if (role === '1') {
            window.location.href = '/dashboard-admin'
        } else if (role === '2') {
            window.location.href = '/dashboard-pembaca'
        }
        
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
    const { email, password } = this.state;

    return (
      <div className="login-page">
        <Container>
          <Card className="card-login">
          <Container>
          <div>
          <img src="/img/logoo.svg" alt="logo"/>
          <h3 className="salam">Adventure start here 🚀</h3>
          <p className="ayo">Ayo sign in dulu!</p>
          </div>
          <Form onSubmit={this.handleSubmit}>
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
              Sign in
            </Button>
            <p className="sudah">Belum punya akun? <span className="login-span">Sign up</span></p>
          </Form>
          </Container>
          
          </Card>
          
        </Container>
      </div>
    );
  }
}
