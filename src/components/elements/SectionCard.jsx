import styled from 'styled-components'

const SectionCard = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  transition: all 150ms var(--easing);

  :has(~ &:hover), &:hover ~ & { opacity: .5 };

  svg {
    width: 18px;
    height: 18px;
  }
`

export default SectionCard