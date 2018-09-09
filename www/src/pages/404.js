import React from 'react'
import Layout from '../components/layout'

import { Heading } from 'umich-lib-components-react'

const NotFoundPage = () => (
  <Layout>
    <Heading level={1} size="xlarge">Page not found - 404</Heading>
    <p className="lede text">What you're looking for isn't here.</p>
  </Layout>
)

export default NotFoundPage
