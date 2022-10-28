import React from "react";
import homwInro from "../images/home_intro.jpg";

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>Be educated so that</h2>
        </div>
        <div className="hide">
          <h2>you can changes</h2>
        </div>
        <div className="hide">
          <h2>the world.</h2>
        </div>
        <p>
          An educated mind can teach many. An educated mind is better than empty
          one.
        </p>
        <button>About us</button>
      </div>
      <div className="image">
        <img src={homwInro} alt="Boy and Girl reading a book" />
      </div>
    </div>
  );
};

export default AboutSection;
