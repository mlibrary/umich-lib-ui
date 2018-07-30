function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

var Button = function Button(_ref) {
  var children = _ref.children,
      href = _ref.href,
      disabled = _ref.disabled,
      className = _ref.className,
      kind = _ref.kind,
      type = _ref.type,
      small = _ref.small,
      other = _objectWithoutProperties(_ref, ['children', 'href', 'disabled', 'className', 'kind', 'type', 'small']);

  var buttonClasses = classNames(className, {
    'button': true,
    'button--small': small,
    'button--start': kind === 'start',
    'button--primary': kind === 'primary',
    'button--secondary': kind === 'secondary',
    'button--tertiary': kind === 'tertiary'
  });

  var commonProps = {
    className: buttonClasses
  };

  var button = React.createElement(
    'button',
    Object.assign({}, other, commonProps, { disabled: disabled, type: type }),
    children
  );

  var anchor = React.createElement(
    'a',
    Object.assign({}, other, commonProps, { href: href, role: 'button' }),
    children
  );

  return href ? anchor : button;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf(['start', 'primary', 'secondary', 'tertiary']).isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};

export default Button;