import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TextInput.css'

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
  const textInputClasses = classNames('input', 'text-input', className);
  const labelClasses = classNames('label', {
    'visually-hidden': hideLabel,
  });

  const formItemClasses = classNames('form-item', {
    'form-item--error': invalid
  })

  const description = descriptionText ? (
    <span className="text-input__description">
      {descriptionText}
    </span>
  ) : null;

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      <span className="label-text">{labelText}</span>
      {description}
    </label>
  ) : null;

  const error = invalid ? (
    <p className="form-item__error-message" id={errorId}>
      {invalidText}
    </p>
  ) : null;

  const input = invalid ? (
    <input
      {...other}
      {...textInputProps}
      data-invalid
      aria-invalid
      aria-describedby={errorId}
      className={textInputClasses}
    />
  ) : (
    <input {...other} {...textInputProps} className={textInputClasses} />
  );

  return (
    <div className={formItemClasses}>
      {label}
      {input}
      {error}
    </div>
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
