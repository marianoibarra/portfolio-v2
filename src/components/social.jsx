import React from 'react'
import { styled } from 'styled-components'
import { SOCIAL_MEDIA } from '@config';
import { Icon } from '@components/icons';

const StyledSocial = styled.ul`

  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
  
  svg {
    height: 28px;
  }
`

const Social = () => {
  return (
    <StyledSocial>
      {
        SOCIAL_MEDIA.map(({name, url}, i) => 
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
              <Icon name={name} />
            </a>
          </li>
        )
      }
    </StyledSocial>
  )
}

export default Social