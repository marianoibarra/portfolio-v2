import React from "react";
import { styled } from "styled-components";

const StyledHero = styled.div`
  cursor: default;
  
  h1 {
    font-size: var(--fz-heading1);
    letter-spacing: -1.2px;
  }

  h2 {
    margin-top: 8px;
    color: var(--slate);
    line-height: 1.1;
    font-size: var(--fz-heading2);
  }
`;

const Subfix = styled.p`
  margin: 0px 0px 16px 4px !important;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Subfix>Hi, my name is</Subfix>
      <h1>Mariano Ibarra</h1>
      <h2>Building exceptional digital experiences.</h2>
    </StyledHero>
  );
};

export default Hero;
