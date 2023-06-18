import React from 'react'
import { Layout, Section } from '@components'
import { navLinks } from '../config'


const IndexPage = () => {
  return (
    <Layout>
      {
        navLinks.map(section => <Section n={section.url.slice(2)} />)
      }
    </Layout>
  )
}

export default IndexPage
