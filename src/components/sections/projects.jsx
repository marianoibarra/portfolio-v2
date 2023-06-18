import React from "react";
import SectionTitle from "@templates/sectionTitle";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const StyledProjects = styled.section``;

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
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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

  const projects = data.projects.edges.filter(({ node }) => node);
  console.log(projects);
  return (
    <StyledProjects>
      <SectionTitle title="Projects" />
    </StyledProjects>
  );
};

export default Projects;
