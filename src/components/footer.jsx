import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 430px;
  font-size: var(--fz-sm);
  color: var(--dark-slate);
  margin-top: 128px;
  cursor: default;
  a {
    color: var(--slate);
  }

  @media screen and (max-width: 1024px) {
    margin-top: 64px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Loosely designed in <a href="https://www.figma.com/">Figma</a> and coded in{" "}
        <a href="https://code.visualstudio.com/">Visual Studio Code</a> by yours truly. Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby.js</a> and{" "}
        <a href="https://styled-components.com/">styled-components</a>, deployed with{" "}
        <a href="https://vercel.com/">Vercel</a>. All text is set in <a href="https://rsms.me/inter/">Inter</a> and{" "}
        <a href="https://developer.apple.com/fonts/">SF Mono</a> typeface.
      </p>
    </StyledFooter>
  );
};

export default Footer;
