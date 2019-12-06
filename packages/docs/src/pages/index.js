import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  COLORS,
  SPACING,
  MEDIA_QUERIES,
  Margins
} from '@umich-lib/core'
import Layout from '../components/layout'
import homeImage from '../images/home.png'
import SEO from '../components/seo'

const features = [
  {
    heading: 'Introduction',
    to: '/getting-started/introduction',
    text: 'Onboarding for designers and developers using the design system for the first time.',
    borderColor: COLORS.orange[200]
  },
  {
    heading: 'Install',
    to: '/getting-started/install',
    text: 'Using React? Install our package and import the components you need to start using the Design System.',
    borderColor: COLORS.maize[400]
  },
  {
    heading: 'Accessibility',
    to: '/guides/accessibility',
    text: 'We’re committed to creating experiences that are accessible for everyone. Check out our accessibility guidelines and principles.',
    borderColor: COLORS.teal[200]
  },
  {
    heading: 'Principles',
    to: '/about/principles',
    text: 'Read about the set of principles that underpins our design decisions.',
    borderColor: COLORS.teal[400]
  },
  {
    heading: 'Contribute',
    to: '/about/contribute',
    text: 'Do you have research that backs up existing styles or findings that show we should make changes? Let us know!',
    borderColor: COLORS.blue[400]
  },
  { 
    heading: 'The team',
    to: '/about/design-system-team',
    text: 'Find out who’s responsible for the styles, components, and patterns published in our design system.',
    borderColor: COLORS.orange[400]
  },
  { 
    heading: 'Office hours',
    to: '/about/design-system-team#office-hours',
    text: 'Contact us for an appointment, meet the team, and ask questions. We are in ScholarSpace every other Monday from 12 to 1pm.',
    borderColor: COLORS.blue[200]
  } 
]

const FeaturesContainer = styled('ul')({
  marginTop: SPACING['XL'],
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gridGap: SPACING['L'],
    marginTop: SPACING['2XL'],
  }
})

const Card = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  marginBottom: SPACING['L'],
  [MEDIA_QUERIES.LARGESCREEN]: {
    marginBottom: 0
  }
})

const CardHeading = styled('h2')({
  marginTop: '0',
  fontSize: '24px',
  lineHeight: '30px',
  fontWeight: '600',
  paddingBottom: SPACING['M']
})

const CardLink = styled(Link)({
  height: '100%',
  background: COLORS.blue[100],
  borderLeft: `solid 8px ${COLORS.blue[300]}`,
  padding: SPACING['L'],
  textDecoration: 'none',
  color: COLORS.neutral[400],
  ':hover': {
    [CardHeading]: {
      textDecoration: 'underline'
    }
  }
})

const Title = styled('h1')({
  display: 'none',
  position: 'absolute',
  fontSize: '24px',
  letterSpacing: '14px',
  lineHeight: '52px',
  fontWeight: '800',
  textTransform: 'uppercase',
  color: COLORS.blue[400],
  top: 'calc(50% - 40px)',
  textAlign: 'center',
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    fontSize: '52px',
    top: 'calc(50% - 29px)',
  },
  padding: `0 ${SPACING['XL']}`
})

const Feature = ({ heading, to, text, borderColor }) => {
  return (
    <Card>
      <CardLink
        to={to}
        style={{
          borderColor
        }}
      >
        <CardHeading
          level={2}
          size="large"
        >{heading}</CardHeading>
        <p>{text}</p>
      </CardLink>
    </Card>
  )
}

export default () => {
  return (
    <Layout>
      <SEO />
      <div style={{
        position: 'relative'
      }}>
        <Title>Design System</Title>
        <img src={homeImage} alt="" role="presentation" css={{
          maxWidth: '100%'
        }} />
      </div>
      <Margins>
        <FeaturesContainer>
          {features.map(f => <Feature {...f} />)}
        </FeaturesContainer>
      </Margins>
    </Layout>
  )
}
