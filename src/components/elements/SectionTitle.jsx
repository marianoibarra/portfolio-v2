import { styled } from "styled-components"

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  text-transform: capitalize;
  counter-increment: section;
  color: var(--white);
  margin-top: 0;

  &:before {
    position: relative;
    bottom: -1px;
    content: '0' counter(section) '.';
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 1vw, var(--fz-xl));
    font-weight: 400;

    @media (max-width: 480px) {
      margin-bottom: -3px;
      margin-right: 5px;
    }
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    width: 100%;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);

    @media (max-width: 1080px) {
      width: 200px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin-left: 10px;
    }
  }
`

export default SectionTitle