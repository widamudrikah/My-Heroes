import { Component, createRef } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import TableKisah from "./TableKisah";
import GrafikUser from "./GrafikUser";
import NavbarAdmin from "./NavbarAdmin";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default class DashboardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kisahs: [],
      users: [],
      deleteStatus: null,
    };
  }

  componentDidMount() {
    document.body.classList.add('admin-page')

    axios
      .get(API_URL + "kisah")
      .then((res) => {
        const kisahs = res.data.Data;
        this.setState({ kisahs });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

      axios
      .get(API_URL + "user")
      .then((res) => {
        const users = res.data.Data;
        this.setState({ users });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  componentWillUnmount() {
    document.body.classList.remove('admin-page')
  }


  kisahRef = createRef();
  userRef = createRef();

  handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  handleDelete = (id) => {
    axios
    .delete(API_URL + `kisah/delete/${id}`)
    .then((res) => {
        console.log(res);
        this.setState({ deleteStatus: "success"})
        window.location.href = '/dashboard-admin'
    })
    .catch((error) => {
        console.log("Error: " , error)
        this.setState({ deleteStatus: "Error" })
    })
  }

  render() {
    const { kisahs, deleteStatus } = this.state;
    const { users } = this.state;
    return (
      <div>
        <NavbarAdmin
          handleKisahNavigation={() => this.handleNavigation(this.kisahRef)}
          handleUserNavigation={() => this.handleNavigation(this.userRef)}
        />
        <Container>

          <ScrollLink to="kisah" smooth={true} duration={500}>
            <div ref={this.kisahRef}></div>
            {deleteStatus === "success" && (
          <Alert variant="success">Data berhasil dihapus.</Alert>
        )}
        {deleteStatus === "error" && (
          <Alert variant="danger">Terjadi kesalahan saat menghapus data.</Alert>
        )}
            {Array.isArray(kisahs) && kisahs.length > 0 ? (
              <TableKisah kisahs={kisahs} onDelete={this.handleDelete}/>
            ) : (
              <p>Load...</p>
            )}
          </ScrollLink>

          <Link to="/tambah-kisah">
            <button className="mt-3 btn-tambah">Tambah Kisah</button>
          </Link>

          <ScrollLink to="user" smooth={true} duration={500}>
            <div ref={this.userRef}></div>
            {Array.isArray(users) && users.length > 0 ? (
              <GrafikUser users={users} />
            ) : (
              <p>Load</p>
            )}
          </ScrollLink>
          <Footer />
        </Container>
      </div>
    );
  }
}
