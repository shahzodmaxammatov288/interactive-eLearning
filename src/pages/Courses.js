import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import react from "../images/react.png";
import soon from "../images/soon.png";
import js from "../images/js.png";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link to="./courses/react">
          <img src={react} alt="Interaktiv React va Redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda...😯</h2>
        <div className="line"></div>
        <Link to="./courses/soon">
          <img src={soon} alt="Tez kunda..." />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript</h2>
        <div className="line"></div>
        <Link to="./courses/javascript">
          <img src={js} alt="Interaktiv JavaScript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 3rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Course = styled.div`
  padding-bottom: 3rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
