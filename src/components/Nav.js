import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#!">
          eLearning
        </a>
      </h1>
      <ul>
        <li>
          <a href="#!">About us</a>
        </li>
        <li>
          <a href="#!">Courses</a>
        </li>
        <li>
          <a href="#!">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: "Silkscreen", cursive;
  }
`;

export default Nav;
