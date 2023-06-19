import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { Icon } from "@components/icons";
import { ChipList, SectionCard, CardData } from '@elements'

const StyledCard = styled(SectionCard)`

`;

const HoverGlass = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: scale(106%, 125%);
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

const Cover = styled.div`
  grid-column: 1/2;
  width: 120px;
  display: flex;

  & picture > img {
    border-radius: 4px;
    overflow: hidden;
    border: var(--img-border);
    width: 120px;
    background-color: var(--darkest-slate);
  }
`

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
      <Cover>
        <GatsbyImage objectFit="cover" image={image} alt={title} className="img" />
      </Cover>
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
          { tech.length && 
            <ChipList>
              {tech.map((t, i) => <li key={i}>{t}</li>)}
            </ChipList>
          }
      </Data>
    </StyledCard>
  );
};

export default ProjectCard;
