import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 65px;
  display: flex;
  margin: auto;
  background-color: black;
`;
const Divs = styled.section`
  display: flex;
  margin: auto;
  color: white;
`;
export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Wrapper>
          <Divs>
            {" "}
            <a src="#">Home</a>
          </Divs>
        </Wrapper>
      </div>
    );
  }
}
