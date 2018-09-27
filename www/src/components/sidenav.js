import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Icon from '../../../packages/icon'
import { css } from 'emotion'
import {
  RESET_BUTTON,
  colors,
  MEDIA_QUERIES
} from '../../../packages/styles'

const SectionNav = styled('nav')({
  gridArea: 'footer',
  'a': {
    textDecoration: 'none'
  },
  background: `${colors.grey[100]}`,
  borderTop: `solid 1px ${colors.grey[400]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'side',
    borderTop: 'none',
    borderRight: `solid 1px ${colors.grey[400]}`,
  },
})

const StyledList = styled('ul')({
  margin: '2rem 0',
  [MEDIA_QUERIES.LARGESCREEN]: {
    top: '1rem',
    position: 'sticky'
  }
})

const cssNavListItem = {
  display: 'block',
  padding: '0.25rem 1rem',
  '&:hover': {
    textDecoration: 'underline'
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '0.25rem 2rem'
  }
}

const StyledNavListItem = styled('li')({
  lineHeight: '1.5',
  'a': cssNavListItem,
  'button': cssNavListItem
})

const BasicButton = ({ className, children, ...other }) => (
  <button className={className} {...other}>{children}</button>
)

const StyledButton = styled(BasicButton)(
  RESET_BUTTON,
  {
    margin: '1rem 0',
    display: 'block',
    width: '100%',
    cursor: 'pointer'
  }
)

const StyledButtonHeading = styled('h2')({
  fontWeight: '700'
})

const StyledInnerButton = styled('span')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const cssActiveLink = css({
  fontWeight: '600',
  borderLeft: `solid 3px ${colors.blue[500]}`,
  background: colors.grey[200]
})

const windowGlobal = typeof window !== 'undefined' && window

class NavSection extends React.Component {
  state = {}
  
  isExpanded = (key) => {
    if (windowGlobal) {
      return localStorage.getItem(key) == 'true' ? true : false
    }

    return this.state[key]
  }

  updateState = (key, value) => {
    this.setState({ [key]: value })

    if (windowGlobal) {
      localStorage.setItem(key, value)
    }
  }

  getKey = (title) => {
    return `openSection#${title}`
  }

  render() {
    const { title, items } = this.props
    const key = this.getKey(title)
    const expanded = this.isExpanded(key)

    return (
      <React.Fragment>
        <StyledButton
          onClick={() => this.updateState(key, !expanded)}
          aria-expanded={expanded}
        >
          <StyledInnerButton>
            <StyledButtonHeading>{title}</StyledButtonHeading>
            {expanded ? (
              <Icon icon="expand-up" size={32} />
            ) : (
              <Icon icon="expand-down" size={32} />
            )}
          </StyledInnerButton>
        </StyledButton>
        {expanded && (
          <ul style={{ marginTop: '-1rem', marginBottom: '1rem' }}>
            {items.map((item, i) => (
              <StyledNavListItem key={i}>
                <Link to={item.to} activeClassName={cssActiveLink}>{item.title}</Link>
              </StyledNavListItem>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

const SideNav = ({ data }) => {
  return (
    <SectionNav>
      <StyledList>
        {data.map((section, s) => (
          <StyledNavListItem key={s}>
            {section.items ? (
              <NavSection key={s} title={section.title} items={section.items} />
            ) : (
              <Link to={section.to} activeClassName={cssActiveLink}>{section.title}</Link>
            )}
          </StyledNavListItem>
        ))}
      </StyledList>
    </SectionNav>
  )
}

export default SideNav
