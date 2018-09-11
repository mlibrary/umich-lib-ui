import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import {
  base,
  colors
} from '@umich-lib-ui/styles'

const baseButtonCSS = css(
  base,
  {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  }
)

const primaryButtonCSS = css(
  baseButtonCSS,
  {
    background: colors.blue[500],
    color: 'white',
    borderBottom: colors.blue[600],
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid'
  }
)

const secondaryButtonCSS = css(
  baseButtonCSS,
  {
    background: 'transparent',
    color: colors.grey[700],
    border: colors.grey[600],
    borderWidth: '1px',
    borderStyle: 'solid'
  }
)

const tertiaryButtonCSS = css(
  baseButtonCSS,
  {
    textDecoration: 'underline',
    color: colors.grey[700],
    padding: '0',
  }
)

const startButtonCSS = css(
  baseButtonCSS,
  primaryButtonCSS,
  {
    fontWeight: '600',
    fontSize: '1.25rem'
  },
)

const smallButtonCSS = css({
  fontSize: '0.875rem',
  padding: '0.25rem 0.5rem'
})

const smallTertiaryCSS = css({
  padding: '0'
})

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
  const buttonClassName = cx({
    [startButtonCSS]: kind === 'start',
    [primaryButtonCSS]: kind === 'primary',
    [secondaryButtonCSS]: kind === 'secondary',
    [tertiaryButtonCSS]: kind === 'tertiary',
    [smallButtonCSS]: small,
    [smallTertiaryCSS]: kind === 'tertiary' && small,
    className
  });

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
