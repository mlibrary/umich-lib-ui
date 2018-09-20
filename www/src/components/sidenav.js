import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Icon from '../../../packages/icon'
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
  background: `${colors.grey[200]}`,
  borderTop: `solid 1px ${colors.grey[500]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'side',
    borderRight: `solid 1px ${colors.grey[500]}`,
  },
})

const StyledList = styled('ul')({
  padding: '1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '2rem'
  }
})

const cssNavListItem = {
  display: 'block',
  padding: '0.25rem 0',
  ['&:hover']: {
    textDecoration: 'underline'
  }
}

const StyledNavListItem = styled('li')({
  lineHeight: '1.5',
  ['a']: cssNavListItem,
  ['button']: cssNavListItem
})

const BasicButton = ({ className, children, ...other }) => (
  <button className={className} {...other}>{children}</button>
)

const StyledButton = styled(BasicButton)(
  RESET_BUTTON,
  {
    display: 'block',
    width: '100%',
    cursor: 'pointer',
    marginTop: '1rem'
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

class NavSection extends React.Component {
  state = {
    expanded: false
  }

  render() {
    const { title, items } = this.props
    const { expanded } = this.state

    return (
      <React.Fragment>
        <StyledButton
          onClick={() => this.setState({ expanded: !expanded })}
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
          <ul>
            {items.map((item, i) => (
              <StyledNavListItem key={i}>
                <Link to={item.to}>{item.title}</Link>
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
              <Link to={section.to}>{section.title}</Link>
            )}
          </StyledNavListItem>
        ))}
      </StyledList>
    </SectionNav>
  )
}

export default SideNav
