import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons'
import styled from 'react-emotion'

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
  if (!icons.hasOwnProperty(icon)) {
    console.warn(`[Icon] "${icon}" is not a valid icon name.`)
  }

  return (
    <StyledSVG
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      className={className}
      {...other}
    >
      {title && <title>{title}</title>}
      <path d={d || icons[icon]} />
    </StyledSVG>
  )
}

Icon.propTypes = {
  /** Icon name. */
  icon: PropTypes.string.isRequired,
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