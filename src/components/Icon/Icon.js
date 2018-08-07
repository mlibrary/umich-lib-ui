import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Icon.css'
import icons from './icons'

/**
  Use this to render SVG icons.
*/
const Icon = ({
  icon,
  size,
  title,
  className
}) => {
  if (!icons.hasOwnProperty(icon)) {
    console.warn(`[Icon] "${icon}" is not a valid icon name.`)
  }

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    }
  };

  const iconClasses = classNames({
    'icon': true,
  }, className);

  return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 48 48"
      className={iconClasses}
    >
      {title && <title>{title}</title>}
      <path
        style={styles.path}
        d={icons[icon]}
      ></path>
    </svg>
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
  size: 16,
};

export default Icon
