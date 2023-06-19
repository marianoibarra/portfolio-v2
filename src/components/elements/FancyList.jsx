import { styled } from "styled-components";

const FancyList = styled.ul`
  font-size: var(--fz-md);
  columns: ${({columns}) => columns || 1};
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    transition: var(--transition);
    cursor: default;

    &:hover {
      color: var(--white);
    }

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--green);
      font-size: var(--fz-sm);
      line-height: 12px;
    }
  }
`

export default FancyList