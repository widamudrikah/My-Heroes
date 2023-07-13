import axios from "axios";
import { Component } from "react";
import { API_URL } from "../utils/constant";
import NavbarKomponen from "./NavbarKomponen";
import { Container } from "react-bootstrap";
import Kisah from "./kisah";
import Footer from "./Footer";

export default class DashboardPembaca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kisahs: [],
        }
    }

    componentDidMount() {
        axios
        .get(API_URL + "kisah")
        .then((res) => {
            const kisahs = res.data.Data;
            this.setState({ kisahs })
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
    }


  render() {
    const { kisahs } = this.state;
    return (
      <div>
        <NavbarKomponen />
        <div className="mt-3">
            <Container>
                {Array.isArray(kisahs) && 
                kisahs.map((kisah) => <Kisah key={kisah.id} kisah={kisah} />)}
            </Container>
        </div>
        <div>
            <Footer />
        </div>
      </div>
    );
  }
}
