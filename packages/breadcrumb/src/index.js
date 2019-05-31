import React from 'react'
import PropTypes from 'prop-types';
import {
  MEDIA_QUERIES,
  SPACING
} from '@umich-lib/styles'
import Link from '@umich-lib/link'
import Icon from '@umich-lib/icon'


const Breadcrumb = ({
  children,
  ...rest
}) => {
  return (
    <nav aria-label="breadcrumb" {...rest} css={{
      paddingTop: SPACING['2XL'],
      paddingBottom: SPACING['XL']
    }}>
      <ul css={{
        display: 'none',
        [MEDIA_QUERIES.LARGESCREEN]: {
          display: 'block'
        },
        '> li': {
          display: 'inline-block',
          marginRight: SPACING['2XS']
        }
      }}>
        {React.Children.map(children, (child, i) => (
          <React.Fragment>
            {i > 0 && (<span css={{
              marginRight: SPACING['2XS']
            }}><Icon icon="navigate_next" size={16} /></span> )}
            {child}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node,
};

const BreadcrumbItem = ({
  children,
  href,
  isCurrent,
  ...rest
}) => {
  if (typeof children === 'string' && href) {
    return (
      <li {...rest}>
        <Link href={href}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li {...rest}>
      {children}
    </li>
  );
}

BreadcrumbItem.propTypes = {
  /**
   * Pass in content that will be inside of the BreadcrumbItem
   */
  children: PropTypes.node,

  /**
   * Optional string representing the link location for the BreadcrumbItem
   */
  href: PropTypes.string
};

export { Breadcrumb, BreadcrumbItem }