import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Icon.css'


const icons = {
  'check-circle': 'M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z'
};

const Icon = ({
  icon,
  size,
  title,
  className
}) => {
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
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string
}

Icon.defaultProps = {
  size: 16,
};

export default Icon
