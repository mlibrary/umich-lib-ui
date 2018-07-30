var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Expandable.css';

var ExpandableContext = React.createContext();

var Expandable = function (_Component) {
  _inherits(Expandable, _Component);

  function Expandable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Expandable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Expandable.__proto__ || Object.getPrototypeOf(Expandable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      toggleExpanded: function toggleExpanded() {
        _this.setState({
          expanded: !_this.state.expanded
        });
      },
      disabled: false,
      disable: function disable() {
        _this.setState({
          disabled: true
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Expandable, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ExpandableContext.Provider,
        { value: this.state },
        this.props.children
      );
    }
  }]);

  return Expandable;
}(Component);

Expandable.propTypes = {
  expanded: PropTypes.bool,
  disabled: PropTypes.bool
};

Expandable.defaultProps = {
  expanded: false
};

export default Expandable;
export { ExpandableContext };