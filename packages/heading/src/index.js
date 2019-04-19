import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

import {
  TYPOGRAPHY
} from '@umich-lib/styles'

export const sizes = {
  'xsmall': TYPOGRAPHY['XS'],
  'small': TYPOGRAPHY['S'],
  'medium': TYPOGRAPHY['M'],
  'large': TYPOGRAPHY['L'],
  'xlarge': TYPOGRAPHY['XL'],
  'display-xlarge': {
    fontFamily: "Crimson Text",
    fontSize: '56px',
    lineHeight: '70px',
  },
  'display-large': TYPOGRAPHY['3XL']
}

/*
  Start with base styles and then bring in the
  styles specific to the size of the heading.
*/
const StyledHeading = styled.h1(
  {
    display: 'block',
    lineHeight: '1.25'
  },
  ({ size }) => sizes[size]
)

/**
  Use headings consistently to create a clear content hierarchy.
*/
const Heading = ({
  children,
  level,
  className,
  ...other
}) => (
  <StyledHeading
    as={'h' + level}
    className={className}
    {...other}
  >{children}</StyledHeading>
)

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