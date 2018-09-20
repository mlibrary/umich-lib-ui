import React from 'react'
import Button from '../../../packages/button'
import Heading from '../../../packages/heading'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <div className="y-spacing">
        <Heading level={1} size="xlarge" className="text" style={{ marginTop: '0' }}>Design your service using U-M Library styles, components, and patterns</Heading>

        <p className="lede text">Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.</p>

        <Heading level={2} size="large" className="text">Try it out</Heading>

        <p className="text">Each component has examples to experiment and test. Go even further and launch an online sandbox code editor environment.</p>

        <Button href="https://codesandbox.io/s/8z337kk6r9">Launch online code editor</Button>

        {
          /**
            TODO:
              -- Add previews of the component library used in production projects. Consider in development projects too.
          */
        }
      </div>
    </Layout>
  )
}
