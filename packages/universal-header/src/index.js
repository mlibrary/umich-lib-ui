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
  LINK_STYLES,
  Z_SPACE
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
  ...LINK_STYLES['special'],
  ':hover': {
    'span': LINK_STYLES['special'][':hover']
  },
  padding: `${SPACING['XS']} 0`
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
  padding: SPACING['L'],
  marginLeft: SPACING['XL'],
  marginBottom: SPACING['L'],
  padding: '0',
  borderRight: '0',
  width: '20rem',
  marginRight: `-${SPACING['M']}`,
  ...Z_SPACE[8],
  [MEDIA_QUERIES.LARGESCREEN]: {
    marginRight: '0',
    padding: SPACING['XL'],
    width: `862px`,
    maxWidth: `calc(100vw - ${SPACING['2XL']} * 2)`, // less the margins
  }
})

/*
  Apply appropriate typography styling
  to the overlay lede line.
*/
const SitesLede = styled('p')({
  display: 'none',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    ...TYPOGRAPHY['L'],
    fontWeight: '700',
    padding: 0,
    marginBottom: SPACING['L'],
  }
})

/*
  Styling for link items
*/
const LinksContainer = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    'ul:first-of-type': {
      marginBottom: SPACING['M']
    },
    display: 'flex',
    justifyContent: 'space-between',
    'ul:last-of-type': {
      minWidth: '16rem',
      margin: '0',
      marginLeft: SPACING['XL'],
      paddingLeft: SPACING['XL'],
      borderLeft: `solid 1px ${COLORS.neutral[100]}`,
      'li': {
        marginBottom: SPACING['S'],
      }
    }
  },
  'ul:last-of-type li:last-of-type': {
    border: 'none'
  }
})

const LinkItem = styled('li')({
  borderBottom: `solid 1px ${COLORS.neutral[100]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    border: 'none',
    position: 'relative',
    maxWidth: '32rem',
    ':not(:last-child)': {
      marginBottom: '1rem'
    }
  }
})

const LinkDescription = styled('p')({
  display: 'none',
  color: COLORS.neutral['300'],
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block'
  }
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
          <Link kind="list-medium" href={d.link} css={{
            display: 'block',
            padding: SPACING['M'],
            ':hover': {
              boxShadow: 'none'
            },
            ':hover span': LINK_STYLES['list-medium'][':hover'],
            [MEDIA_QUERIES.LARGESCREEN]: {
              display: 'inline',
              padding: '0'
            }
          }}>
            <span>{d.title}</span>
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

  const handlePostMessage = e => {
    if (e.data == "focus") {
      // any iframe sending a "focus" message will close the header
      setOpen(false);
    }
  };

  useEffect(() => {
    // Make sure to only run this once.
    if (!data) {
      axios.get("https://cms.dev.lib.umich.edu/api/universalheader")
        .then(result => setData(transformData(result.data)))
        .catch(error => setError(true))
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("message", handlePostMessage);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("message", handlePostMessage);
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
          <SitesLede aria-role="heading">Explore what the library has to offer.</SitesLede>
          {error ? (
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

function HomeLink({ children }) {
  return (
    <a
      href="https://www.lib.umich.edu/"
      css={{
        display: 'inline-block',
        ...LINK_STYLES['special'],
        padding: `${SPACING['XS']} 0`,
        ':hover': {},
        ':hover > span': LINK_STYLES['special'][':hover']
      }}
    >
      <span>{children}</span>
    </a>
  )
}

function UMichLibraryLink() {
  //LINK_STYLES
  return (
    <React.Fragment>
      <LargeScreen>
        <HomeLink>University of Michigan Library</HomeLink>
      </LargeScreen>
      <SmallScreen>
        <HomeLink><abbr title="University of Michigan">U-M</abbr> Library</HomeLink>
      </SmallScreen>
    </React.Fragment>
    
  )
}

function UniversalHeader() {
  return (
    <HeaderContainer
      aria-label="View our other U-M Library sites"
    >
      <Margins>
        <HeaderContent>
          <UMichLibraryLink />
          <Sites />
        </HeaderContent>
      </Margins>
    </HeaderContainer>
  )
}

export default UniversalHeader
