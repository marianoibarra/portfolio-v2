import { styled } from "styled-components"

export const SectionTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  line-height: 100%;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  text-transform: capitalize;
  counter-increment: section;
  color: var(--white);
  margin-top: 0;
  cursor: default;

  &:before {
    position: relative;
    bottom: -3px;
    content: '0' counter(section) '.';
    margin-right: 8px;
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
    bottom: 10px;
    width: 100%;
    height: 1px;
    margin-left: 16px;
    background-color: var(--lightest-navy);

    /* 
    @media (max-width: 600px) {
      margin-left: 10px;
    } */
  }

  @media (max-width: 1024px) {
    position: sticky;
    width: 100vw;
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    top: 0;
    margin-left: -48px;
    padding: 20px 48px 20px;
    backdrop-filter: var(--title-blur);
    background-color: var(--title-bg);
    z-index: 20;

    &:after {
      bottom: 8px;
    }
  }

`

export default SectionTitle