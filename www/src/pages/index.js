import React from 'react'
import { Link } from 'gatsby'
import Heading from '../../../packages/heading'
import Text from '../../../packages/text'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <div className="y-spacing content">
        <Heading level={1} size="xlarge" className="text" style={{ marginTop: '0' }}>Design your service using U-M Library styles, components, and patterns</Heading>

        <Text lede>Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.</Text>

        <Heading level={2} size="large">Ways you can use the Design System</Heading>

        <Text>Depending on the context of the project and tech stack, there a variety of ways you can use the Design System.</Text>

        <Heading level={3} size="medium">Consult the styles, components, and patterns</Heading>

        <Text>Consider this is your central source for consulting U-M Library interface designs and make it your go-to destination!</Text>

        <Heading level={3} size="medium" className="text">Read the research insights behind our design decisions</Heading>

        <Text>Use the included key research insights to educate yourself and help you talk to colleagues and stakeholders about the thought process behind designs.</Text>
      
        <Heading level={3} size="medium">Use the styles, components, and patterns</Heading>

        <Text>See the <Link to="/get-started/">get started</Link> page for details.</Text>
      </div>
    </Layout>
  )
}
