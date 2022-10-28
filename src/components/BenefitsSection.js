import React from "react";
//! import images
import homeIntro2 from "../images/home_intro2.jpg";

const BenefitsSection = () => {
  return (
    <div className="benefits">
      <div className="description">
        <h2>Hight quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talanted mentors</h3>
          <h3>Fast learning</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <img src={homeIntro2} alt="A girl in laboratory" width={200} />
    </div>
  );
};

export default BenefitsSection;
