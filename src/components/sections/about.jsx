import React from 'react'
import { styled } from 'styled-components'

const StyledAbout = styled.section`
  
`

const StyledText = styled.div`

`

const StyledSkills = styled.ul`
  
`



const About = () => {


  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <StyledAbout>
      <SectionTitle title={"About"} />
      <StyledText>
        <p></p>
      </StyledText>
      <StyledSkills>
        {skills.map(skill => <li>{skill}</li>)}
      </StyledSkills>
    </StyledAbout>
  )
}

export default About