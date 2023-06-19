import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "styled-components";
import { SectionTitle } from "@elements";
import { JobCard } from "@components";
import FancyLink from "../elements/FancyLink";

const StyledJobs = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  > ol {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  > a {
    width: fit-content;
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              tech
              url
            }
            html
          }
        }
      }
    }
  `);
  const jobs = data.jobs.edges.map(({ node }) => node);
  return (
    <StyledJobs id="jobs">
      <SectionTitle>Experience</SectionTitle>
      <ol>
      { jobs.map(job => <JobCard job={job} />) }
      </ol>
      <a href="/download/resume.pdf" download="Resume - Mariano Ibarra.pdf">
        <FancyLink mt={56}>
          View Full Resume
        </FancyLink>
      </a>
    </StyledJobs>
  );
};

export default Jobs;
