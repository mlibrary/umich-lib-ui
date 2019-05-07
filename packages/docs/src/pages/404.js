import React from 'react'
import {
  Heading,
  Margins,
  Text
} from '@umich-lib/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Margins>
      <div style={{ margin: '4rem 0' }} className="y-spacing">
        <Heading level={1} size="3XL">Page not found - 404</Heading>
        <Text size="XS">What you're looking for isn't here.</Text>
      </div>
    </Margins>
  </Layout>
)

export default NotFoundPage
