import React from "react";
//! import images
import homeIntro1 from "../images/home_intro1.jpg";
//! import styled
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              you <span>can changes</span>
            </h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
          <p>
            An educated mind can teach many. An educated mind is better than
            empty one.
          </p>
          <button>About us</button>
        </div>
      </Description>
      <Image>
        <img src={homeIntro1} alt="Boy and Girl reading a book" />
      </Image>
    </About>
  );
};

export default AboutSection;
