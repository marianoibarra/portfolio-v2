import React from "react";
import { styled } from "styled-components";
import SectionTitle from "@templates/sectionTitle";

const StyledText = styled.div`
  font-size: var(--fz-md);
  line-height: 26px;
  margin-bottom: 24px;

  strong {
    color: var(--white);
  }
`;

const LetterHighlight = styled.span`
  color: var(--white);
  font-weight: 600;
  transition: all ${({i}) => i * 90}ms var(--easing);
`

const StyledHighlightHover = styled.span`
  cursor: url(/images/balti/balti.png),auto !important;
  position: relative;
  display: inline-flex;

  &:hover ${LetterHighlight} {
    color: orange;
    font-weight: 700;
    transform: translateY(-2px);
  }

  span:first-child {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`

const StyledSkills = styled.ul`
  font-size: var(--fz-md);
  columns: 3;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    transition: var(--transition);
    cursor: default;

    &:hover {
      color: var(--white);
    }

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--green);
      font-size: var(--fz-sm);
      line-height: 12px;
    }
  }
`;

const HighlightHover = ({children}) => {
  if(typeof children !== 'string') return null;

  const letters = children.split('')
  return (
    <StyledHighlightHover>
      <span aria-hidden={true}>{children}</span>
      {letters.map((l, i) => <LetterHighlight i={i} key={i}>{l}</LetterHighlight>)}
    </StyledHighlightHover>
  )
}

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Gatsby",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Mongo db",
    "graphql",
  ];

  return (
    <section id="about">
      <SectionTitle title={"About"} />
      <StyledText>
        <p>
          <strong>Fullstack developer</strong>, with experience in both web projects and mobile. I am passionate about creating
          intuitive, interactive, and visually appealing interfaces that provide an exceptional user experience.
        </p>
        <p>
          For 7 years, I worked as a team leader and restaurant supervisor until 2020 when I decided to shift my focus
          towards learning and working in the programming world. There, I found the perfect fusion of my passions: <strong>
          technology,</strong> <strong>design,</strong> <strong>solution creation,</strong> and <strong>problem-solving</strong>. This transition enabled me to leverage my
          analytical skills and effectively collaborate within teams.
        </p>
        <p>
          I am constantly updating my knowledge and exploring new technologies to continue growing professionally. My
          goal is to keep challenging myself and contribute to exciting projects that drive technological development.
        </p>
        <p>When I'm not at the computer, you'll usually find me cycling, reading, or having fun with <HighlightHover>Balti</HighlightHover>.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
      </StyledText>
      <StyledSkills>
        {skills.map((skill) => <li>{skill}</li>)}
      </StyledSkills>
    </section>
  );
};

export default About;
