import React from "react";
import { styled } from "styled-components";
import SectionTitle from "@templates/sectionTitle";

const StyledAbout = styled.section``;

const StyledText = styled.div`
  font-size: var(--fz-md);
  line-height: 26px;
  margin-bottom: 24px;

  strong {
    color: var(--white);
  }
`;

const StyledSkills = styled.ul`
  font-size: var(--fz-md);
  columns: 3;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

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
    <StyledAbout id="about">
      <SectionTitle title={"About"} />
      <StyledText>
        <p>
          <strong>Fullstack developer</strong>, with experience in both web projects and mobile. I am passionate about creating
          intuitive, interactive, and visually appealing interfaces that provide an exceptional user experience.
        </p>
        <p>
          For 7 years, I worked as a team leader and restaurant supervisor until 2020 when I decided to shift my focus
          towards learning and working in the programming world. There, I found the perfect fusion of my passions: <strong>
          technology, design, solution creation, and problem-solving.</strong> This transition enabled me to leverage my
          analytical skills and effectively collaborate within teams.
        </p>
        <p>
          I am constantly updating my knowledge and exploring new technologies to continue growing professionally. My
          goal is to keep challenging myself and contribute to exciting projects that drive technological development.
        </p>
        <p>When I'm not at the computer, you'll usually find me cycling, reading, or spending time with <strong>Balti</strong>.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
      </StyledText>
      <StyledSkills>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </StyledSkills>
    </StyledAbout>
  );
};

export default About;
