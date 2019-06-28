import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  COLORS
} from '@umich-lib/styles'

const createButtonStyles = (props) => {
  const { kind, small, disabled } = props
  let styles = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    background: 'none',
    fontFamily: 'inherit',
    textDecoration: 'none',
    opacity: disabled ? '0.6' : ''
  }

  switch (kind) {
    case 'default':
      styles = {
        ...styles,
        background: COLORS.neutral[100],
      }
      break;
    case 'primary':
      styles = {
        ...styles,
        background: COLORS.maize[400],
        fontWeight: '600',
      }
      break;
  }

  if (small) {
    styles = {
      ...styles,
      fontSize: '0.875rem',
      padding: '0.25rem 0.5rem'
    }
  }

  return styles
}

const StyledButton = styled('button')(
  props => createButtonStyles(props)
)

const StyledAnchor = styled('a')(
  props => createButtonStyles(props)
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
  const button = (
    <StyledButton
      {...other}
      kind={kind}
      small={small}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </StyledButton>
  );

  const anchor = (
    <StyledAnchor
      href={href}
      kind={kind}
      small={small}
      disabled={disabled}
      type={type}
      className={className}
      {...other}
    >
      {children}
    </StyledAnchor>
  );

  return href ? anchor : button;
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf([
    'default',
    'primary'
  ]).isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  small: false,
  kind: 'default',
};

export default Button;
