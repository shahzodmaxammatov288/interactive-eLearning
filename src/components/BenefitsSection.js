import React from "react";
import styled from "styled-components";
//! import images
import homeIntro2 from "../images/home_intro2.jpg";
//! import styles
import { About, Description, Image } from "../styles";

const BenefitsSection = () => {
  return (
    <Benefit>
      <Description>
        <h2>Hight quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talanted mentors</h3>
          <h3>Fast learning</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="A girl in laboratory" width={200} />
      </Image>
    </Benefit>
  );
};

const Benefit = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 3rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSection;
