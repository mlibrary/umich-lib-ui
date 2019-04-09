import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { COLORS } from '@umich-lib/styles'

export const sizes = {
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
    marginTop: '1.875em',
    fontSize: '1.2rem'
  },
  'subtitle': {
    fontSize: '28px',
    lineHeight: '35px',
    fontWeight: '600',
  },
  'title': {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '800',
  },
  'large': {
    fontFamily: 'Crimson Text',
    fontSize: '36px',
    lineHeight: '45px',
    fontWeight: '400',
  },
  'xlarge': {
    fontFamily: 'Crimson Text',
    fontSize: '56px',
    lineHeight: '70px',
    fontWeight: '400',
  }
}

/*
  Start with base styles and then bring in the
  styles specific to the size of the heading.
*/
const StyledHeading = styled.h1(
  {
    display: 'block',
    fontWeight: '700',
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
  ...other
}) => (
  <StyledHeading
    as={'h' + level}
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