import React from 'react'
import {
  SPACING,
  COLORS
} from '../../styles'
import Icon from '../../icon'
import Heading from '../../heading'

function Link({ to, children, ...rest }) {
  return (
    <a href={to} {...rest}>{children}</a>
  )
}

function SideNavigation({ data, path }) {
  const { title } = data
  const items = data.items.map((item, i) => {
    item.key = item.title + item.to + i

    return item
  })

  return (
    <nav aria-labelledby="side-nav-heading">
      {title && (<Heading size="S" level={2} id="side-nav-heading" css={{
        marginBottom: SPACING['XS'],
      }}>{title}</Heading>)}
      <ol css={{
        marginBottom: SPACING['M'],
        '> li:not(:last-of-type)': {
          borderBottom: `solid 1px ${COLORS.neutral['100']}`
        }
      }}>
        {items.map(item =>
          <li key={item.key}>
            <SideNavLink
              path={path}
              item={item}
            >
              {item.text}
            </SideNavLink>
          </li>
        )}
      </ol>
    </nav>
  )
}

function SideNavLink({ path, item, children, ...rest }) {
  const hasChildren = item.children ? true : false
  const renderChildren = hasChildren && path.includes(item.to)
  const isActive = path === item.to

  return (
    <React.Fragment>
      <Link
        kind="list"
        to={item.to}
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: SPACING['S'],
          color: isActive ? COLORS.teal['400'] : 'inherit',
          fontWeight: isActive ? '700' : 'inherit',
          ':hover': {
            textDecoration: 'underline'
          },
          paddingTop: SPACING['M'],
          paddingBottom: renderChildren ? SPACING['XS'] : SPACING['M']
        }}
        {...rest}
      >
        {children}
        {hasChildren && (
          <span
            aria-hidden="true"
            css={{
              paddingLeft: SPACING['XS'],
              lineHeight: '1',
              color: COLORS.neutral['400']
            }}>
            <Icon icon="expand_more" />
          </span>
        )}
      </Link>
      {renderChildren && (
        <ol css={{
          paddingBottom: SPACING['XS'],
        }}>
          {item.children.map(child => (
            <li>
              <SideNavLink
                path={path}
                item={child}
                css={{
                  padding: `${SPACING['XS']} 0`,
                  paddingLeft: SPACING['M'],
                }}
              >{child.text}</SideNavLink>
            </li>
          ))}
        </ol>
      )}
    </React.Fragment>
  )
}

export default SideNavigation