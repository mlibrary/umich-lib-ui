import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
  COLORS,
  MEDIA_QUERIES,
  SPACING,
  Margins,
  TYPOGRAPHY
} from '@umich-lib/styles'
import Icon from '@umich-lib/icon'

import useESC from './use-esc'

const StyledHeader = styled('header')({
  display: 'block',
  background: 'white',
  borderBottom: `solid 1px ${COLORS.neutral['100']}`
})

const HeaderInnerContainer = styled('div')({
  position: 'relative'
})

const StyledLogoNameContainer = styled('div')({
  fontSize: '1.4rem',
  lineHeight: '1',
  marginRight: '1rem',
  '> *:not(:last-child)': {
    marginBottom: '0.5rem'
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    alignItems: 'center',
    '> *:not(:last-child)': {
      marginBottom: '0'
    }
  }
})

const StyledLogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: `${SPACING['M']} 0`
})

const UMichBlockM = () => (
  <svg
    viewBox="0 0 202 144"
    style={{
      display: 'inherit',
      height: '2.2rem',
    }}
  >
    <title>University of Michigan</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#EBBF28">
        <polyline points="100.595 118.772 59.392 62.459 59.392 103.42 75.776 103.42 75.776 143.871 0 143.871 0 103.42 15.354 103.42 15.354 40.443 0 40.443 0 0 59.525 0 100.595 56.719 141.665 0 201.176 0 201.176 40.443 185.813 40.443 185.813 103.42 201.176 103.42 201.176 143.871 125.41 143.871 125.41 103.42 141.781 103.42 141.781 62.459 100.595 118.772"></polyline>
      </g>
    </g>
  </svg>
)

const UMichLibrary = () => (
  <svg
    viewBox="0 0 715 144"
    style={{
      display: 'inherit',
      height: '2.2rem',
    }}
  >
    <title>Library</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-281.000000, 0.000000)" fill={COLORS.blue['400']}>
        <polyline points="281.497 144 281.497 0.202 299.817 0.202 299.817 128.067 352.598 128.067 352.598 144 281.497 144"></polyline>
        <polygon points="374.194 143.94 392.511 143.94 392.511 0.202 374.194 0.202"></polygon>
        <path d="M436.948,128.067 L462.84,128.067 C482.357,128.067 489.334,114.123 489.334,103.573 C489.334,80.665 475.187,76.682 456.472,76.682 L436.948,76.682 L436.948,128.067 Z M436.948,60.747 L463.64,60.747 C477.974,60.547 484.954,51.788 484.954,37.845 C484.954,25.896 478.174,16.135 462.84,16.135 L436.948,16.135 L436.948,60.747 Z M418.625,144 L418.625,0.202 L465.433,0.202 C485.349,0.202 492.119,6.972 497.495,14.942 C502.481,22.71 503.275,31.276 503.275,34.059 C503.275,51.984 497.102,63.939 478.576,68.117 L478.576,69.117 C499.096,71.507 508.054,83.854 508.054,103.573 C508.054,140.417 481.165,144 464.833,144 L418.625,144 L418.625,144 Z"></path>
        <path d="M546.109,61.943 L573.603,61.943 C586.751,61.943 593.124,50.591 593.124,38.04 C593.124,27.686 587.932,16.135 573.795,16.135 L546.109,16.135 L546.109,61.943 Z M546.109,77.878 L546.109,144 L527.791,144 L527.791,0.202 L577.386,0.202 C602.88,0.202 611.835,18.131 611.835,36.053 C611.835,52.981 602.476,65.927 585.543,68.916 L585.543,69.312 C602.069,71.902 608.042,77.478 609.048,106.354 C609.25,112.529 611.237,135.036 614.036,144 L594.916,144 C589.73,134.042 590.921,115.323 589.33,96.201 C587.932,78.676 573.795,77.878 567.63,77.878 L546.109,77.878 L546.109,77.878 Z"></path>
        <path d="M687.232,17.125 L686.832,17.125 L664.325,93.811 L710.349,93.811 L687.232,17.125 Z M676.072,0.202 L699.379,0.202 L746.19,144 L725.673,144 L715.322,109.738 L659.755,109.738 L648.995,144 L630.476,144 L676.072,0.202 L676.072,0.202 Z"></path>
        <path d="M782.298,61.943 L809.782,61.943 C822.923,61.943 829.292,50.591 829.292,38.04 C829.292,27.686 824.118,16.135 809.979,16.135 L782.298,16.135 L782.298,61.943 Z M782.298,77.878 L782.298,144 L763.965,144 L763.965,0.202 L813.56,0.202 C839.048,0.202 848.019,18.131 848.019,36.053 C848.019,52.981 838.657,65.927 821.725,68.916 L821.725,69.312 C838.255,71.902 844.229,77.478 845.222,106.354 C845.436,112.529 847.423,135.036 850.204,144 L831.082,144 C825.91,134.042 827.11,115.323 825.513,96.201 C824.118,78.676 809.979,77.878 803.806,77.878 L782.298,77.878 L782.298,77.878 Z"></path>
        <polyline points="935.419 0.202 953.942 0.202 914.701 89.231 914.701 144 896.374 144 896.374 89.231 857.737 0.202 878.249 0.202 906.336 69.709 935.419 0.202"></polyline>
      </g>
    </g>
  </svg>
)

const PrimaryNavItem = styled('li')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'inline-block'
  }
})

const primary_nav_item_styles = {
  ...TYPOGRAPHY['XS'],
  paddingBottom: `calc(${SPACING['S']} - 3px)`, // less border spacing.
  marginRight: SPACING['M'],
  cursor: 'pointer',
  borderBottom: `solid 3px transparent`
}

const nav_primary_item_active_styles = {
  borderBottom: `solid 3px ${COLORS.teal['400']}`
}

const PrimaryNavButton = styled('button')(
  {
    ...primary_nav_item_styles,
  }, ({ open }) => {

    if (open) {
      return {
        ...nav_primary_item_active_styles
      }
    }
  })

// TODO: Pass in component to use. Render prop?
const PrimaryNavLink = styled('a')({
  ...primary_nav_item_styles
})

const DropdownList = styled('ul')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    columns: '2',
    columnGap: SPACING['XL']
  }
})

const DropdownListItem = styled('li')({
  breakInside: 'avoid',
  padding: `${SPACING['S']} ${SPACING['L']}`,
  maxWidth: '38rem'
})

const DropdownListItemLink = styled('a')({
  fontWeight: '800',
  textDecoration: 'none',
  color: COLORS.neutral['400'],
  padding: `${SPACING['XS']} 0`,
  'span': {
    padding: `${SPACING['3XS']} 0`,
  },
  ':hover span': {
    boxShadow: `inset 0 -2px ${COLORS.teal[400]}`
  },
})

function DropdownListItemLinkContainer({
  text,
  to,
  linkAs
}) {
  if (linkAs) {
    return (
      <DropdownListItemLink to={to} as={linkAs}>
        <span>{text}</span>
      </DropdownListItemLink>
    )
  }
  return (
    <DropdownListItemLink href={to}>
      <span>{text}</span>
    </DropdownListItemLink>
  )
}

function NavPrimaryItem({
  children,
  text,
  to,
  open,
  onClick,
  linkAs
}) {
  return (
    <PrimaryNavItem>
      {children ? (
        <React.Fragment>
          <PrimaryNavButton
            onClick={onClick}
            open={open}
            aria-expanded={open}
          >
            <span className="text">{text}</span>
          </PrimaryNavButton>
          {open && (
            <Dropdown onClose={onClick}>
              <DropdownList>
                {children.map(item => (
                  <DropdownListItem>
                    <DropdownListItemLinkContainer linkAs={linkAs} {...item} />
                    {item.description && (
                      <p style={{
                        color: COLORS.neutral['300']
                      }}>{item.description}</p>
                    )}
                  </DropdownListItem>
                ))}
              </DropdownList>
            </Dropdown>
          )}
        </React.Fragment>
      ) : (
        <PrimaryNavLink href={to}><span>{text}</span></PrimaryNavLink>
      )}
    </PrimaryNavItem>
  )
}

function NavPrimary({
  primary,
  linkAs
}) {
  const [open, setOpen] = useState(null)

  /*
    If the user clicks on an already opened item
    then they are trying to close it.

    Otherwise set the new thing to open.
  */
  function handleOpen(i) {
    if (open === i) {
      setOpen(null)
    } else {
      setOpen(i)
    }
  }

  return (
    <nav role="navigation">
      <ul>
        {primary.map((item, i) => (
          <NavPrimaryItem
            {...item}
            linkAs={linkAs}
            key={item.text + i}
            open={i === open}
            onClick={() => handleOpen(i)}
          />
        ))}
      </ul>
    </nav>
  )
}

// Weirdness to get full width.
const DropdownContainer = styled('div')({
  border: `solid 1px ${COLORS.neutral[100]}`,
  borderTop: 'none',
  position: 'absolute',
  width: '100%',
  background: 'white',
  left: '0',
  marginTop: '1px', // Otherwise covers the header bottom border.
  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.1)`,
  zIndex: '1'
})

const DropdownInnerContainer = styled('div')({
  padding: `${SPACING['M']}`
})

function Dropdown({ children, onClose }) {
  const [ node ] = useESC(onClose)

  return (
    <DropdownContainer ref={node}>
      <DropdownInnerContainer>
        {children}
      </DropdownInnerContainer>
    </DropdownContainer>
  )
}

const NavSecondaryContainer = styled('nav')({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: SPACING['M'],
  paddingRight: '0'
})

const nav_secondary_item_styles = {
  ...TYPOGRAPHY['3XS']
}

const NavSecondaryItem = styled('li')({
  display: 'inline-block'
})

const NavSecondaryLink = styled('a')({
  ...nav_secondary_item_styles,
  paddingBottom: SPACING['S'],
  marginLeft: SPACING['L'],
  cursor: 'pointer',
  color: COLORS.neutral['300'],
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

function NavSecondaryLinkContainer({
  to,
  text,
  linkAs
}) {
  if (linkAs) {
    return (
      <NavSecondaryLink to={to} as={linkAs}>{text}</NavSecondaryLink>
    )
  }

  return (
    <NavSecondaryLink href={to}>{text}</NavSecondaryLink>
  )
}

function NavSecondary({
  secondary,
  linkAs
}) {
  return (
    <NavSecondaryContainer>
      <ul>
        {secondary.map(item => (
          <NavSecondaryItem key={item.to}>
            <NavSecondaryLinkContainer {...item} linkAs={linkAs}/>
          </NavSecondaryItem>
        ))}
      </ul>
    </NavSecondaryContainer>
  )
}

/**
  Keep your header as simple as possible. Use a header for critical navigation elements.
*/
const Header = ({
  name,
  primary,
  secondary,
  linkAs
}) => {
  return (
    <StyledHeader>
      <Margins>
        <HeaderInnerContainer>
          <StyledLogoContainer>
            <a href="https://umich.edu/"><UMichBlockM className="logo__svg" /></a>
            <a
              href="https://www.lib.umich.edu/"
              style={{
                marginLeft: '0.5rem',
                paddingLeft: '0.5rem',
                borderLeft: `solid 1px ${COLORS.blue['400']}`,
                marginRight: '0.5rem'
              }}
            ><UMichLibrary className="logo__svg" /></a>
          </StyledLogoContainer>
          {primary && (
            <NavPrimary
              primary={primary}
              linkAs={linkAs}
            />
          )}

          {secondary && (
            <NavSecondary
              secondary={secondary}
              linkAs={linkAs}
            />
          )}
        </HeaderInnerContainer>
      </Margins>
    </StyledHeader>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  siteUrl: PropTypes.string,
  primary: PropTypes.array,
  secondary: PropTypes.array,
  linkAs: PropTypes.any
};

Header.defaultProps = {
  siteUrl: '/',
};

export default Header