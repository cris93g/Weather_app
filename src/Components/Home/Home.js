import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import axios from "axios";
import Footer from "../Footer/Footer";
// const Wrapper = styled.section`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   margin: auto;
//   background-color: white;
// `;
const Body = styled.section`
  width: 100%;
  height: 80vh;
  background-color: white;
`;
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: []
    };
  }

  componentDidMount = () => {
    axios.get("/api/weather").then(response => {
      this.setState({ weather: Object.values(response.data) });
    });
  };

  render() {
    console.log(this.state.weather[3]);
    let wea = this.state.weather.map((elem, ind) => {
      return (
        <div key={elem}>
          <p>{wea}</p>
        </div>
      );
    });
    return (
      <div className="Home">
        <Nav />
        <Body />
        <Footer />
      </div>
    );
  }
}
