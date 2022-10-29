import React from "react";
//! import styled
import styled from "styled-components";
//! styles
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Can I learn programming from 0 your platform?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            earum, id pariatur omnis eos consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How much do I have to pay per months?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            earum, id pariatur omnis eos consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Is it possible to pay in full in one go?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            earum, id pariatur omnis eos consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>If I buy the course, can my brother and I also study</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            earum, id pariatur omnis eos consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

//! Styles
const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0;
  }
`;

export default FaqSection;
