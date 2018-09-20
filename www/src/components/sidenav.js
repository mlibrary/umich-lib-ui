import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Icon from '../../../packages/icon'
import {
  RESET_BUTTON
} from '../../../packages/styles'

const SectionNav = styled('nav')({
  gridArea: 'side',
  marginTop: '2rem',
  'a': {
    textDecoration: 'none'
  }
})

const StyledList = styled('ul')({
  marginBottom: '2rem'
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

const NestedList = styled('ul')({
  marginBottom: '3rem'
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
          <NestedList>
            {items.map((item, i) => (
              <StyledNavListItem key={i}>
                <Link to={item.to}>{item.title}</Link>
              </StyledNavListItem>
            ))}
          </NestedList>
        )}
      </React.Fragment>
    )
  }
}

const SideNav = ({ data }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default SideNav
