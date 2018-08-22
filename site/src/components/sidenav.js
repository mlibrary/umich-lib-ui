import React from 'react'
import { Heading } from 'umich-lib-components-react'
import { Link } from 'gatsby'

const SideNav = ({ nodes }) => {
  return (
    <nav className='docs__side-nav'>
      {nodes.map(({ node }, i) => (
        <React.Fragment key={i}>
          <Heading level={2} size="small">{node.title}</Heading>
          <ul>
            {node.items.map((item, k) => (
              <li key={k}>{item}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default SideNav
