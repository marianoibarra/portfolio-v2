import React from 'react'
import { styled } from 'styled-components'
import { SectionTitle } from "@elements";

const Div = styled.section`
  height: 1500px;
`

const Section = ({n, title}) => {
  return (
    <Div id={n}>
      <SectionTitle>{title}</SectionTitle>
    </Div>
  )
}

export default Section