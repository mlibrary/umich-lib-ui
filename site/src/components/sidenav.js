import React from 'react'
import { Link } from 'gatsby'
import { Heading } from 'umich-lib-components-react'

const SideNav = ({ data }) => {
  return (
    <nav className='docs__side-nav'>
      {data.map(section => (
        <React.Fragment>
          <Heading size="small" level={2}>{section.title}</Heading>
          <ul>
            {section.items.map(item => (
              <li><Link to={item.to}>{item.title}</Link></li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default SideNav
