import React from 'react'
import { Link } from 'gatsby'
import { Heading } from 'umich-lib-components-react'

const SideNav = ({ data, largeScreen }) => {
  const cn = largeScreen ? "docs__side-nav docs__side-nav--large-screens" : "docs__side-nav"

  return (
    <nav className={cn}>
      <ul>
        {data.map((section, s) => (
          <li key={s}>
            {section.to ? (
              <Link to={section.to}>{section.title}</Link>
            ) : (
              <Heading size="small" level={2}>{section.title}</Heading>
            )}
            {section.items && (
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}><Link to={item.to}>{item.title}</Link></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const SideNavContainer = ({ data, largeScreen }) => {
  if (largeScreen) {
    return <SideNav data={data} largeScreen={largeScreen} />
  } else {
    return (
      <details className="docs__side-nav-details">
        <summary>Menu</summary>

        <SideNav data={data} largeScreen={largeScreen} />
      </details>
    )
  }
}

export default SideNavContainer
