import React from 'react'
import { Link } from 'gatsby'
import { Button } from '@umich-lib/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

function Index() {
  return (
    <Layout>
      <SEO title="Home" keywords={['design system', 'react']} />
      <Button>Hello!</Button>
    </Layout>
  )
}

export default Index

