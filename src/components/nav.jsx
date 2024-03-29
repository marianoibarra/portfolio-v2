import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { SECTION_HEIGHT_RATIO } from '@config'
import { NAV_LINKS } from '../config'
import { Link } from 'gatsby'

const StyledNav = styled.nav`
  flex: 1;
  padding: 48px 0;
  counter-reset: item 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledLink = styled.li`
  width: min-content;
  margin-bottom: 18px;
  font-size: var(--fz-sm) !important;
  font-family: var(--font-mono);
  font-weight: 600;
  color: ${({active}) => active ? 'var(--white)' : 'inherit'};

  a {
    display: flex;
    align-items: center;
    gap: 16px;
    counter-increment: item 1;
  }
  
  span:first-child {
    display: inline-block;
    height: 1px;
    transition: var(--transition);
    background-color: ${({active}) => active ? 'var(--white)' : 'var(--dark-slate)'};
    width: ${({active}) => active ? '2rem' : '1rem'};
  }

  span:nth-child(2)::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: var(--green);
    font-size: var(--fz-sm);
    text-align: right;
  }

  &:hover {
    span:first-child {
      width: 2rem;
      background-color: var(--white);
    }
  }

`

const Nav = () => {
  const [sectionActive, setSectionActive] = useState(NAV_LINKS[0].url)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight*SECTION_HEIGHT_RATIO && rect.bottom > window.innerHeight*SECTION_HEIGHT_RATIO) {
          setSectionActive('/#' + section.id)
        }
      });
    };

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <StyledNav>
      <ul>
        {NAV_LINKS.map(({name, url}, i) => 
          <StyledLink key={i} active={Boolean(sectionActive === url)}>
            <Link href={url}>
              <span/>
              <span>{name}</span>
            </Link>
          </StyledLink>
        )}
      </ul>
    </StyledNav>
  )
}

export default Nav