import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import {
  color__blue_2,
  color__blue_3
} from '@umich-lib-ui/styles'

const baseButtonCSS = css({
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer'
})

const primaryButtonCSS = css(
  baseButtonCSS,
  {
    background: color__blue_3,
    color: 'white',
    borderBottom: color__blue_2,
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid'
  }
)

const startButtonCSS = css(
  baseButtonCSS,
  primaryButtonCSS,
  {
    fontSize: '1.25rem'
  },
)

/**
 * Use buttons to move though a transaction, aim to use only one primary button per page.
 */
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
  /*
  const buttonClasses = classNames({
    [buttonBaseClass]: true,
    'button--small': small,
    'button--start': kind === 'start',
    'button--primary': kind === 'primary',
    'button--secondary': kind === 'secondary',
    'button--tertiary': kind === 'tertiary',
  }, className);
  */

  const buttonClassName = `${startButtonCSS}`

  const button = (
    <button {...other} className={buttonClassName} disabled={disabled} type={type}>
      {children}
    </button>
  );

  const anchor = (
    <a {...other} href={href} role="button">
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

export default Button;
