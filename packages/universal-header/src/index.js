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
  SmallScreen
} from '@umich-lib/styles'
import Icon from '@umich-lib/icon'

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
  justifyContent: 'space-between'
})

/*
  A root component to share the styling of
  text used.
*/
const HeaderText = styled('span')({
  ...TYPOGRAPHY['3XS'],
  color: COLORS.neutral[400]
})

/*
  Link has a larger touch target and
  selects the span when hovered to 
  apply the "border". Using box shadow
  to avoid the box model resizing.
*/
const Link = styled('a')({
  display: 'block',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: `${SPACING['XS']} 0`,
  ':hover': {
    'span': {
      boxShadow: `inset 0 -2px ${COLORS.teal[400]}`
    }
  }
})

/*
  Same goals as the Link, but
  semantically a button.
*/
const SitesButton = styled('button')({
  cursor: 'pointer',
  padding: `${SPACING['XS']} 0`,
  ':hover': {
    'span': {
      boxShadow: `inset 0 -2px ${COLORS.teal[400]}`
    }
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
  zIndex: '1',
  padding: SPACING['M'],
  [MEDIA_QUERIES.LARGESCREEN]: {
    position: `absolute`,
    left: `auto`,
    right: `0`,
    width: `862px`,
    maxWidth: `92vw`,
    border: `solid 1px ${COLORS.neutral[100]}`,
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.1)`,
    padding: SPACING['XL'],
    marginLeft: SPACING['XL'],
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
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const LinkItem = styled('li')({
  maxWidth: '32rem',
  marginBottom: '1rem'
})

const LinkTitle = styled('span')({
  ...TYPOGRAPHY['3XS'],
  display: 'inline-block',
  color: COLORS.neutral['400']
})

const LinkLink = styled('a')({
  display: 'block',
  textDecoration: 'none',
  ':hover': {
    ['span']: {
      boxShadow: `inset 0 -2px ${COLORS.teal[400]}`
    }
  }
})

const LinkDescription = styled('p')({
  color: COLORS.neutral['300']
})

/*
  Reshape the data from Drupal
  so that it can better suited for
  rendering.
*/
function transformData(data) {
  return {
    label: "Explore",
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
          <LinkLink href={d.link}>
            <LinkTitle>
              {d.title}
            </LinkTitle>
            {d.description && (
              <LinkDescription>
                {d.description}
              </LinkDescription>
            )}
          </LinkLink>
        </LinkItem>
      ))}
    </ul>
  )
}

function Sites() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

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
      ><HeaderText>Explore</HeaderText> {open ? (<Icon icon="expand_less" />) : (<Icon icon="expand_more" />)}</SitesButton>
      {open && (
        <Overlay>
          <SitesLede><Highlight>Explore</Highlight> what the library has to offer.</SitesLede>
          {data && (
            <React.Fragment>
              <LinksContainer>
                <SiteLinks data={data.primary} />
                <SiteLinks data={data.secondary} />
              </LinksContainer>
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
            <Link href="https://www.lib.umich.edu/"><HeaderText>University of Michigan Library</HeaderText></Link>
          </LargeScreen>
          <SmallScreen>
          <Link href="https://www.lib.umich.edu/"><HeaderText>U-M Library</HeaderText></Link>
          </SmallScreen>
          <Sites />
        </HeaderContent>
      </Margins>
    </HeaderContainer>
  )
}

export default UniversalHeader