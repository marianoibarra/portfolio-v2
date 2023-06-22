import React from 'react'
import { SectionCard, ChipList, CardData, HoverGlass } from '@elements'
import { styled } from 'styled-components'
import { Icon } from "@components/icons";

const StyledCard = styled(SectionCard)`
  > header {
    grid-column: 1/2;
    font-size: var(--fz-xxs);
    white-space: nowrap;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    color: var(--dark-slate);
    font-weight: 600;

    @media screen and (max-width: 640px) {
      grid-column: 1;
      grid-row: 1;
    }
  }
`

const Data = styled(CardData)`

  > h3 > a {
    color: var(--light-slate);
    transition: all 150ms var(--easing);
    &:hover,
    &:focus-visible {
      color: var(--green);
    }
    &::before {
      position: relative;
      bottom: 2px;
      margin-inline: 8px;
      margin-left: 8px;
      margin-right: 4px;
      font-size: var(--fz-sm);
      color: var(--green);
      content: "@"
    }
  }

  @media screen and (max-width: 640px) {
      grid-column: 1;
      grid-row: 2;
    }
`

const JobCard = ({job}) => {
  const { frontmatter: { title, company, tech, range, url }, html } = job;
  return (
    <StyledCard>
      <header>{range}</header>
      <Data>
        <h3>
          {title}
          <a href={url}>
            {company}
            <Icon />
            <HoverGlass />
          </a>
        </h3>
        <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
        {tech && tech.length && 
          <ChipList>
            {tech.map((t, i) => <li key={i}>{t}</li>)}
          </ChipList>
        }
      </Data>
    </StyledCard>
  )
}

export default JobCard