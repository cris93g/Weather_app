import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 65px;
  display: flex;
  margin: auto;
  background-color: gray;
`;

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Wrapper />
      </div>
    );
  }
}
