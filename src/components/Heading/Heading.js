import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Heading.css'

/**
  Use headings consistently to create a clear content hierarchy.
*/
const Heading = ({
  children,
  size,
  level,
  className,
  ...other
}) => {


  const headingClasses = classNames({
    'heading': true,
    [`heading--${size}`]: true
  }, className);

  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={headingClasses}>{children}</HeadingTag>
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
