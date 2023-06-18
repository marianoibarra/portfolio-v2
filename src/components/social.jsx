import React from 'react'
import { styled } from 'styled-components'
import { socialMedia } from '@config';
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
    width: 28px;
  }
`

const Social = () => {
  return (
    <StyledSocial>
      {
        socialMedia.map(({name, url}) => 
          <li>
            <a href={url}>
              <Icon name={name} />
            </a>
          </li>
        )
      }
    </StyledSocial>
  )
}

export default Social