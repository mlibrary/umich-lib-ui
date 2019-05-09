import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  MEDIA_QUERIES,
  Margins,
  LargeScreen,
  SmallScreen,
  LINK_STYLES
} from '@umich-lib/styles'
import Icon from '@umich-lib/icon'
import Loading from '@umich-lib/loading'
import Alert from '@umich-lib/alert'
import Link from '@umich-lib/link'

/*
  Add background color and flex the title
  and dropdown label to the start and end
  with space-between.
*/
const HeaderContainer = styled('header')({
  background: COLORS.blue[100]
})

const HeaderContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: `${SPACING['2XS']} 0`
})

/*
  A root component to share the styling of
  text used.
*/
const HeaderText = styled('span')({
  ...TYPOGRAPHY['3XS'],
  color: COLORS.neutral[300]
})

/*
  Same goals as the Link, but
  semantically a button.
*/
const SitesButton = styled('button')({
  ...LINK_STYLES['special-subtle'],
  ':hover': {
    'span': LINK_STYLES['special-subtle'][':hover']
  }
})

/*
  Need a relative parent for the Overlay
  to be positioned to.
*/
const SitesContainer = styled('div')({
  display: 'inline-block',
  position: 'relative'
})

const Overlay = styled('div')({
  background: 'white',
  zIndex: '10',
  position: `absolute`,
  left: `auto`,
  right: `0`,
  width: `862px`,
  maxWidth: `calc(100vw - ${SPACING['XL']})`,
  border: `solid 1px ${COLORS.neutral[100]}`,
  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.1)`,
  padding: SPACING['L'],
  marginLeft: SPACING['XL'],
  marginBottom: SPACING['L'],
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: SPACING['XL'],
    maxWidth: `calc(100vw - ${SPACING['2XL']} * 2)` // less the margins
  }
})

/*
  The yellow underline/highlight used with the
  "Explore" lede.
*/
const Highlight = styled('span')({
  fontWeight: '800',
  boxShadow: `inset 0 -14px ${COLORS.maize[400]}`
})

/*
  Apply appropriate typography styling
  to the overlay lede line.
*/
const SitesLede = styled('p')({
  ...TYPOGRAPHY['L'],
  marginBottom: SPACING['L']
})

/*
  Styling for link items
*/
const LinksContainer = styled('div')({
  'ul:first-of-type': {
    marginBottom: SPACING['M']
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    justifyContent: 'space-between',
    'ul:last-of-type': {
      minWidth: '16rem',
      margin: '0',
      marginLeft: SPACING['XL'],
      paddingLeft: SPACING['XL'],
      borderLeft: `solid 1px ${COLORS.neutral[100]}`,
      'li': {
        marginBottom: SPACING['S']
      }
    }
  }
})

const LinkItem = styled('li')({
  position: 'relative',
  maxWidth: '32rem',
  ':not(:last-child)': {
    marginBottom: '1rem'
  }
})

const LinkDescription = styled('p')({
  color: COLORS.neutral['300']
})

const LoadingContainer = styled('div')({
  height: '380px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

/*
  Reshape the data from Drupal
  so that it can better suited for
  rendering.
*/
function transformData(data) {
  return {
    primary: data.filter(item => item.level === "1"),
    secondary: data.filter(item => item.level === "2")
  };
}

/*
  Handle rendering of the Links
  and descriptions.
*/
function SiteLinks({ data }) {
  return (
    <ul>
      {data.map((d, i) => (
        <LinkItem key={i + d.title}>
          <Link kind="list-strong" href={d.link}>
            {d.title}
          </Link>
          {d.description && (
            <LinkDescription>
              {d.description}
            </LinkDescription>
          )}
        </LinkItem>
      ))}
    </ul>
  )
}

function Sites() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }

    // outside click
    setOpen(false);
  };

  const handleKeydown = e => {
    if (e.keyCode === 27) {
      // ESC key
      setOpen(false);
    }
  };

  useEffect(() => {
    // Make sure to only run this once.
    if (!data) {
      axios.get("https://dev.lib.umich.edu/api/universalheader")
        .then(result => setData(transformData(result.data)))
        .catch(error => setError(true))
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <SitesContainer ref={node}>
      <SitesButton
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      ><HeaderText>Explore</HeaderText> <Icon icon="expand_more" /></SitesButton>
      
      {open && (
        <Overlay>
          <SitesLede><Highlight>Explore</Highlight> what the library has to offer.</SitesLede>
          {true ? (
            <Alert intent="warning">
              <p style={{ maxWidth: '36rem' }}><strong style={{ fontWeight: '800' }}>Error</strong>: We are temporarily having trouble loading our list of library sites. Please try refreshing your page. You can also contact <Link href="https://www.lib.umich.edu/ask" kind="subtle">Ask a Librarian</Link> for help.</p>
            </Alert>
          ) : (
            <React.Fragment>
              {data ? (
                <LinksContainer>
                  <SiteLinks data={data.primary} />
                  <SiteLinks data={data.secondary} />
                </LinksContainer>
              ) : (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              )}
            </React.Fragment>
          )}
          
        </Overlay>
      )}
    </SitesContainer>
  )
}

function UniversalHeader() {
  return (
    <HeaderContainer
      aria-label="View our other U-M Library sites"
    >
      <Margins>
        <HeaderContent>
          <LargeScreen>
            <Link href="https://www.lib.umich.edu/" kind="special-subtle">
              University of Michigan library
            </Link>
          </LargeScreen>
          <SmallScreen>
            <Link href="https://www.lib.umich.edu/" kind="special-subtle">
              <abbr title="University of Michigan">U-M</abbr> Library
            </Link>
          </SmallScreen>
          <Sites />
        </HeaderContent>
      </Margins>
    </HeaderContainer>
  )
}

export default UniversalHeader