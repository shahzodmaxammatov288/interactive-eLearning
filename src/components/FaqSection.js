import React from "react";
//! styles
import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
//! Toggle
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Can I learn programming from 0 your platform?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                earum, id pariatur omnis eos consequatur?
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How much do I have to pay per months?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                earum, id pariatur omnis eos consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
        <Toggle title="Is it possible to pay in full in one go?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                earum, id pariatur omnis eos consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
        <Toggle title="If I buy the course, can my brother and I also study">
          <div className="question">
            <h4></h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                earum, id pariatur omnis eos consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
