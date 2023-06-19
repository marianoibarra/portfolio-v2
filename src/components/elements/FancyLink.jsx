import React from 'react'
import { styled } from 'styled-components'
import { Icon } from "@components/icons";

const Styled = styled.div`
  width: auto;
  font-size: var(--fz-md);
  gap: 4px;
  color: var(--white);
  font-weight: 500;
  opacity: .85;

  > span {
    display: inline-block;
    position: relative;
    margin-right: 4px;
  }

  > span::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    position: relative;
    bottom: 0.05em;
    background-color: var(--green);
    opacity: 0.5;
    transition: all 150ms var(--easing);
  }

  > svg {
    display: inline;
    width: 16px;
    height: 16px;
    transition: all 150ms var(--easing);
  }

  &:hover,
  &:focus-visible {
    > span {
      opacity: 1;
      
      &:after {
        width: 100%;
      }
    }

    > svg {
      transform: translateX(6px);
    }
  }
`

const FancyLink = ({ onClick=()=>{}, icon='Arrow', children }) => {
  return (
    <Styled onClick={onClick}>
      <span>
        {children}
      </span>
      <Icon name={icon} />
    </Styled>
  )
}

export default FancyLink