import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "styled-components";
import { SectionTitle } from "@elements";
import { ProjectCard } from "@components";
import { PROJECTS_LIMIT } from "../../config";

const StyledProjects = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  > ol {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
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
  const firstProjects = projects.slice(0, PROJECTS_LIMIT);
  const projectsToShow = showMore ? projects : firstProjects;
  return (
    <StyledProjects id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ol>
      { projectsToShow.map((project, i) => <ProjectCard key={i} project={project} />) }
      </ol>
      <button style={{marginTop: '96px'}} onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
    </StyledProjects>
  );
};

export default Projects;
