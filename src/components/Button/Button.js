import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({
  children,
  href,
  disabled,
  className,
  kind,
  type,
  small,
  ...other
}) => {
  const buttonClasses = classNames(className, {
    'button': true,
    'button--small': small,
    'button--start': kind === 'start',
    'button--primary': kind === 'primary',
    'button--secondary': kind === 'secondary',
    'button--tertiary': kind === 'tertiary',
  });

  const commonProps = {
    className: buttonClasses,
  };

  const button = (
    <button {...other} {...commonProps} disabled={disabled} type={type}>
      {children}
    </button>
  );

  const anchor = (
    <a {...other} {...commonProps} href={href} role="button">
      {children}
    </a>
  );

  return href ? anchor : button;
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf([
    'start',
    'primary',
    'secondary',
    'tertiary',
  ]).isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};

export default Button
