import React from 'react'
import { Link } from 'gatsby'
import {
  COLORS,
  SPACING,
  MEDIA_QUERIES
} from '@umich-lib/core'
import Layout from '../components/layout'
import Container from '../components/container'
import AbstractImage from '../components/abstract-image'
import styled from '@emotion/styled'

const features = [
  {
    heading: 'Introduction',
    to: '/introduction',
    text: 'Onboarding for designers and developers using the design system for the first time.',
    borderColor: COLORS.coral[200]
  },
  {
    heading: 'Install',
    to: '/install',
    text: 'Using React? Install our package and import the components you need to start using the Design System.',
    borderColor: COLORS.maize[400]
  },
  {
    heading: 'Accessibility',
    to: '/accessibility',
    text: 'We’re committed to creating experiences that are accessible for everyone. Check out our accessibility guidelines and principles.',
    borderColor: COLORS.teal[200]
  },
  {
    heading: 'Principles',
    to: '/principles',
    text: 'Read about the set of principles that underpins our design decisions.',
    borderColor: COLORS.teal[400]
  },
  {
    heading: 'Contribute',
    to: '/contribute',
    text: 'Do you have research that backs up existing styles or findings that show we should make changes? Let us know!',
    borderColor: COLORS.blue[400]
  },
  { 
    heading: 'The team',
    to: '/desing-system-team',
    text: 'Find out who’s responsible for the styles, components, and patterns published in our design system.',
    borderColor: COLORS.coral[400]
  } 
]

const FeaturesContainer = styled('ul')({
  marginTop: SPACING['2XL'],
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(430px, 1fr))',
  gridGap: SPACING['L']
})

const Card = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%'
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
  position: 'absolute',
  fontSize: '32px',
  letterSpacing: '14px',
  lineHeight: '52px',
  fontWeight: '800',
  textTransform: 'uppercase',
  color: COLORS.blue[400],
  top: 'calc(50% - 40px)',
  textAlign: 'center',
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: '46px',
    top: 'calc(50% - 29px)',
  }
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
      <div style={{
        position: 'relative'
      }}>
        <Title>Design System</Title>
        <AbstractImage />
      </div>
      <Container>
        <FeaturesContainer>
          {features.map(f => <Feature {...f} />)}
        </FeaturesContainer>
      </Container>
    </Layout>
  )
}
