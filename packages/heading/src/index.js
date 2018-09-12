import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion'
import { base } from '@umich-lib-ui/styles'

const cssHeadingBase = css(base, {
  display: 'block',
  fontWeight: '700',
  lineHeight: '1.25'
})

const cssHeadingSize = {
  'xsmall': {
    marginBottom: '0.25em',
    marginTop: '1.5em',
    fontSize: '1rem'
  },
  'small': {
    marginBottom: '0.25em',
    marginTop: '1.5em',
    fontSize: '1rem'
  },
  'medium': {
    marginBottom: '0.83333em',
    marginTop: '1.875rem',
    fontSize: '1.2rem'
  },
  'large': {
    marginBottom: '0.555em',
    marginTop: '1.25rem',
    fontSize: '1.5rem'
  },
  'xlarge': {
    marginBottom: '0.625em',
    marginTop: '1.25rem',
    fontSize: '2.4rem'
  }
}

/**
  Use headings consistently to create a clear content hierarchy.
*/
const Heading = ({
  children,
  size,
  level,
  ...other
}) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={cx(cssHeadingBase, css(cssHeadingSize[size]))}>{children}</HeadingTag>
  )
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
    Avoid skipping heading levels: always start the page from level 1, next use level 2 and so on. Avoid using level 1 more than once on a page.
  */
  level: PropTypes.oneOf([1,2,3,4,5,6]),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]).isRequired
};

Heading.defaultProps = {
  level: 1,
  size: 'small'
};

export default Heading;