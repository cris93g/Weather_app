import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import axios from "axios";

const Wrapper = styled.section`
  width: 100vh;
  height: 100vh;
  display: flex;
  margin: auto;
  background-color: lightgray;
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
      this.setState({ weather: Object.value(response.data) });
    });
  };

  render() {
    console.log(this.state.weather);
    return (
      <div className="Home">
        <Wrapper>
          <Nav />
        </Wrapper>
      </div>
    );
  }
}
