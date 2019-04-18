import React from 'react'
import {
  Heading
} from '@umich-lib/core'
import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Heading level={1} size="xlarge">Page not found - 404</Heading>
      <p className="lede text">What you're looking for isn't here.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
