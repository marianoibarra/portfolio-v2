import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { Icon } from "@components/icons";
import { ChipList, SectionCard, CardData, HoverGlass } from '@elements'

const StyledCard = styled(SectionCard)`
  .gatsby-image-wrapper {
    display: flex;
    width: 100%;
    max-width: 200px;
    height: min-content;
    grid-column: 1/2;
    border-radius: 4px;
    overflow: hidden;
    border: var(--img-border);
    background-color: var(--darkest-slate);
    transition: all 150ms var(--easing);
  }  

  &:is(:has(.github:hover), :has(${HoverGlass}:hover)) .gatsby-image-wrapper {
    border: var(--img-border-hover);
  }

  @media screen and (max-width: 640px) {
    grid-gap: 24px;
    .gatsby-image-wrapper {  
      grid-column: 1;
      grid-row: 2;
      aspect-ratio: 16/10;
    }
  } 
`;

const Data = styled(CardData)`
  .github {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    color: var(--white);
    font-weight: 500;
    font-size: var(--fz-xs);
    z-index: 2;

    &:hover { color: var(--green) };
  }

  @media screen and (max-width: 640px) {
    grid-column: 1;
    grid-row: 1;
  } 
`

const ProjectCard = ({ project }) => {
  const { frontmatter: { external, github, title, tech, cover }, html } = project;
  const image = getImage(cover);

  return (
    <StyledCard>
      <GatsbyImage objectFit="cover" image={image} alt={title} className="img" />
      <Data>
        <h3>
          <a href={external}>
            {title}
            <Icon />
            <HoverGlass />
          </a>
        </h3>
        <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
          {github && 
            <a className="github" href={github}>
              <Icon name="GitHub" />
              Source code
            </a>
          }
          { tech && tech.length && 
            <ChipList>
              {tech.map((t, i) => <li key={i}>{t}</li>)}
            </ChipList>
          }
      </Data>
    </StyledCard>
  );
};

export default ProjectCard;
