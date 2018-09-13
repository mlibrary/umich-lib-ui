import React from 'react'
import { Link } from 'gatsby'
import Heading from '../../../packages/heading'
import styled from 'react-emotion'
import { css } from 'emotion'

const StyledList = styled('ul')({
  marginBottom: '2rem'
})

const cssActiveNavLink = css`
  font-weight: 600;
`

const StyledNavLink = styled(Link)({
  textDecoration: 'none'
})

const SideNav = ({ data }) => {
  return (
    <nav>
      <StyledList>
        {data.map((section, s) => (
          <li key={s}>
            {section.to ? (
              <StyledNavLink to={section.to} activeClassName={cssActiveNavLink}>{section.title}</StyledNavLink>
            ) : (
              <Heading size="small" level={2}>{section.title}</Heading>
            )}
            {section.items && (
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}><StyledNavLink to={item.to} activeClassName={cssActiveNavLink}>{item.title}</StyledNavLink></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </StyledList>
    </nav>
  )
}

export default SideNav
