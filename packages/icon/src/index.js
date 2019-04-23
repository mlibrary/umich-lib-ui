import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons'
import styled from '@emotion/styled'

const StyledSVG = styled('svg')({
  display: 'inline-block',
  verticalAlign: 'middle',
  fill: 'currentColor'
})

/**
  Use this to render SVG icons.
*/
const Icon = ({
  icon,
  size,
  title,
  className,
  d,
  ...other
}) => {
  // If no title, then hide for AD.
  let isHidden = title ? true : false

  return (
    <StyledSVG
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={isHidden}
      {...other}
    >
      {title && <title>{title}</title>}
      <path d={d || icons[icon]} />
    </StyledSVG>
  )
}

Icon.propTypes = {
  /** Icon name. */
  icon: PropTypes.string,
  /** Size of the icon in pixels. */
  size: PropTypes.number,
  /** Include a title if this icon requires a text alternative. */
  title: PropTypes.string
}

Icon.defaultProps = {
  size: 18,
};

export { icons }
export default Icon