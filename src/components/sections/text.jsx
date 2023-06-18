import React from 'react'
import { styled } from 'styled-components'
import SectionTitle from '../../templates/sectionTitle'

const Div = styled.section`
  height: 1500px;
`

const Section = ({n, title}) => {
  return (
    <Div id={n}>
      <SectionTitle title={title} />
    </Div>
  )
}

export default Section