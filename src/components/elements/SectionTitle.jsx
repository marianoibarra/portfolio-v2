import { styled } from "styled-components"

export const SectionTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  line-height: 100%;
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  text-transform: capitalize;
  counter-increment: section;
  color: var(--white);
  cursor: default;

  &:before {
    position: relative;
    bottom: -1px;
    content: '0' counter(section) '.';
    margin-right: 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 1vw, var(--fz-xl));
    font-weight: 400;
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
    margin-bottom: 24px;
    margin-left: -48px;
    padding: 20px 48px;
    backdrop-filter: var(--title-blur);
    background-color: var(--title-bg);
    z-index: 20;

    &:after {
      bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    margin-left: -24px;
    padding: 20px 24px;
  }

`

export default SectionTitle