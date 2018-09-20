import React from 'react'
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { colors, base } from '@umich-lib-ui/styles'
import Input from '@umich-lib-ui/input'

const StyledFormItem = styled('div')(
  {
    width: '100%',
    boxSizing: 'border-box'
  },
  ({ invalid }) => ({
    borderLeft: invalid && `solid 4px ${colors.red[600]}`,
    paddingLeft: invalid && '1rem'
  })
)

const StyledLabel = styled('label')({
  base,
  display: 'block',
  marginBottom: '0.5rem',
  boxSizing: 'border-box'
})

const StyledFormItemDescription = styled('span')(
  {
    display: 'block',
    color: colors.grey[600]
  }
)

const StyledInput = styled('input')(
  base,
  {
    fontSize: '1rem',
    color: colors.grey[700],
    margin: '0',
    padding: '0',
    border: 'solid 1px rgba(0,0,0,0.5)',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    width: '100%',
    appearance: 'textfield',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  ({ invalid }) => ({
    borderColor: invalid && colors.red[600],
    borderWidth: invalid && '2px'
  })
)

const StyledFormItemErrorMessage = styled('p')(
  {
    marginTop: '0.5rem',
    color: colors.red[600],
    fontWeight: '600'
  }
)

/**
  Use this when you need to let users enter text that's no longer than a single line.
*/
const TextInput = ({
  labelText,
  descriptionText,
  className,
  id,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  invalid,
  invalidText,
  ...other
}) => {
  const textInputProps = {
    id,
    onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type,
  };

  const errorId = id + '-error-msg';

  const description = descriptionText ? (
    <StyledFormItemDescription>
      {descriptionText}
    </StyledFormItemDescription>
  ) : null;

  // TODO: add hidden style
  const label = labelText ? (
    <StyledLabel htmlFor={id}>
      <span>{labelText}</span>
      {description}
    </StyledLabel>
  ) : null;

  const error = invalid ? (
    <StyledFormItemErrorMessage id={errorId}>
      {invalidText}
    </StyledFormItemErrorMessage>
  ) : null;

  const input = invalid ? (
    <Input
      {...other}
      {...textInputProps}
      invalid
      data-invalid
      aria-invalid
      aria-describedby={errorId}
    />
  ) : (
    <Input
      {...other}
      {...textInputProps}
    />
  );

  return (
    <StyledFormItem invalid={invalid}>
      {label}
      {input}
      {error}
    </StyledFormItem>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  invalid: PropTypes.bool,
  invalidText: PropTypes.string
};

TextInput.defaultProps = {
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: ''
};

export default TextInput;