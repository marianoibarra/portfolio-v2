import styled from 'styled-components'

const SectionCard = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  transition: all 150ms var(--easing);

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    :has(~ &:hover), &:hover ~ & { opacity: .5 };
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    grid-gap: 12px;
  }
`

export default SectionCard