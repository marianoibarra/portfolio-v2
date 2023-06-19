import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { Icon } from "@components/icons";
import { ChipList, SectionCard, CardData } from '@elements'

const HoverGlass = styled.span`
  position: absolute;
  width: calc(100% + 42px);
  height: calc(100% + 42px);
  left: -21px;
  top: -21px;
  border-radius: 6px;
  border-top: 1px solid #fff1;
  z-index: 1;
  box-shadow: 0px 2px 14px -6px var(--navy-shadow) ;
  background-color: #ffffff09;
  opacity: 0;

  &:hover { opacity: 1 };

  &, * {
    transition: all 150ms var(--easing);
  }

`

const StyledCard = styled(SectionCard)`
  .gatsby-image-wrapper {
    display: flex;
    width: 120px;
    height: min-content;
    grid-column: 1/2;
    border-radius: 4px;
    overflow: hidden;
    border: var(--img-border);
    background-color: var(--darkest-slate);
    transition: all 150ms var(--easing);
  }  

  &:has(${HoverGlass}:hover) .gatsby-image-wrapper {
    border: var(--img-border-hover);
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

  &:has(${HoverGlass}:hover) h3 svg {
    transform: translate(4px, -4px);
  }

  &:has(.github:hover) ${HoverGlass} {
    opacity: 1;
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
