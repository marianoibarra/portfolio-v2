import { styled } from "styled-components"

const HoverGlass = styled.span`
  @media screen and (min-width: 768px) {

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
    transition: all 150ms var(--easing);
    
    &:hover { opacity: 1 };
  }
`

export default HoverGlass