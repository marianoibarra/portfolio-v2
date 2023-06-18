import React from 'react'
import { Layout, Section } from '@components'
import { navLinks } from '../config'
import About from '@sections/about'


const IndexPage = () => {
  return (
    <Layout>
      <About />
      {navLinks.slice(1).map(section => <Section n={section.url.slice(2)} title={section.name} />)}
    </Layout>
  )
}

export default IndexPage
