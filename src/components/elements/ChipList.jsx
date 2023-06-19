import styled from 'styled-components'

const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  margin-top: 24px;

  li {
    ${({theme}) => theme.mixins.flexCenter}
    background-color: var(--green-tint);
    padding-inline: 12px;
    color: var(--green);
    font-size: var(--fz-xs);
    font-weight: 500;
    border-radius: 28px;
    height: 28px;
  }
`

export default ChipList