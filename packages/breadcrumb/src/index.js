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
  const numberOfBreadcrumbs = React.Children.count(children)
  const parentBreadcrumbIndex = numberOfBreadcrumbs > 1 ? numberOfBreadcrumbs - 2 : 0

  function isParent(i) {
    console.log('isParent', i, parentBreadcrumbIndex, parentBreadcrumbIndex === i)

    return parentBreadcrumbIndex === i
  }

  return (
    <nav aria-label="Breadcrumb" {...rest} css={{
      paddingTop: SPACING['2XL'],
      paddingBottom: SPACING['XL']
    }}>
      <ol css={{
        [MEDIA_QUERIES.LARGESCREEN]: {
          '> li': {
            display: 'inline-block',
            marginRight: SPACING['2XS']
          }
        }
      }}>
        {React.Children.map(children, (child, i) => (
          <li css={{
            display: isParent(i) ? 'block' : 'none',
            [MEDIA_QUERIES.LARGESCREEN]: {
              display: 'block'
            }
          }}>
            <span
              aria-hidden="true"
              css={{
                marginRight: SPACING['2XS']
              }}>
                <Icon
                  icon="navigate_next"
                  size={14}
                  css={{
                    display: 'none',
                    [MEDIA_QUERIES.LARGESCREEN]: {
                      display: i === 0 ? 'none' : 'inline-block'
                    }
                  }}
                />
                <Icon
                  icon="navigate_before"
                  size={14}
                  css={{
                    display: 'inline-block',
                    [MEDIA_QUERIES.LARGESCREEN]: {
                      display: 'none'
                    }
                  }}
                />
              </span>
            {React.cloneElement(child, {
              isCurrent: i === numberOfBreadcrumbs - 1
            })}
          </li>
        ))}
      </ol>
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
  const currentLinkProps = isCurrent ? {
    'aria-current': 'page',
    'kind': 'subtle'
  } : {}

  if (typeof children === 'string' && href) {
    return (
      <Link href={href} {...rest} {...currentLinkProps}>
        {children}
      </Link>
    );
  }

  return (
    {children}
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