import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "styled-components";
import { SectionTitle } from "@elements";
import { ProjectCard } from "@components";

const StyledProjects = styled.section`

  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  > ol {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.map(({ node }) => node);
  return (
    <StyledProjects id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ol>
      { projects.map(project => <ProjectCard project={project} />) }
      </ol>
    </StyledProjects>
  );
};

export default Projects;
