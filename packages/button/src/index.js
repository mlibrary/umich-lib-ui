import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  COLORS,
  RESET_BUTTON
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
    case 'start':
      styles = {
        ...styles,
        background: COLORS.blue[500],
        color: 'white',
        borderBottom: COLORS.blue[600],
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        padding: '0.5rem 1.15rem',
        fontSize: '1.25rem',
        fontWeight: '600',
      }
      break;
    case 'primary':
      styles = {
        ...styles,
        background: COLORS.blue[500],
        color: 'white',
        borderBottom: COLORS.blue[600],
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        fontWeight: '600',
      }
      break;
    case 'secondary':
      styles = {
        ...styles,
        background: 'transparent',
        color: COLORS.grey[600],
        borderColor: COLORS.grey[500],
        borderWidth: '1px',
        borderStyle: 'solid'
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
  { ...RESET_BUTTON },
  props => createButtonStyles(props)
)

const StyledAnchor = styled('a')(
  { ...RESET_BUTTON },
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
    'start',
    'primary',
    'secondary',
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
