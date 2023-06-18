import React from 'react'
import { styled } from 'styled-components'

const Div = styled.section`
  height: 1500px;
`

const Section = ({n}) => {
  return (
    <Div id={n}>{"Section " + n}</Div>
  )
}

export default Section