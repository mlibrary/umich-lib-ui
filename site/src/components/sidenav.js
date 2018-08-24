import React from 'react'
import { Link } from 'gatsby'
import { Heading } from 'umich-lib-components-react'

const SideNav = ({ data }) => {
  return (
    <nav className='docs__side-nav'>
      <ul>
        {data.map(section => (
          <li>
            {section.to ? (
              <Link to={section.to}>{section.title}</Link>
            ) : (
              <Heading size="small" level={2}>{section.title}</Heading>
            )}
            {section.items && (
              <ul>
                {section.items.map(item => (
                  <li><Link to={item.to}>{item.title}</Link></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNav
