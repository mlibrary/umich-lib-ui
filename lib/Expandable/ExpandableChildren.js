var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import './Expandable.css';
import { ExpandableContext } from './Expandable';

var ExpandableChildren = function (_Component) {
  _inherits(ExpandableChildren, _Component);

  function ExpandableChildren() {
    _classCallCheck(this, ExpandableChildren);

    return _possibleConstructorReturn(this, (ExpandableChildren.__proto__ || Object.getPrototypeOf(ExpandableChildren)).apply(this, arguments));
  }

  _createClass(ExpandableChildren, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          context = _props.context,
          children = _props.children;

      var show = this.props.show || 3;

      if (children.length <= show && !context.disabled) {
        context.disable();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          context = _props2.context,
          children = _props2.children;

      var show = this.props.show || 3;

      return React.createElement(
        React.Fragment,
        null,
        context.expanded ? children : children.slice(0, show)
      );
    }
  }]);

  return ExpandableChildren;
}(Component);

export default (function (props) {
  return React.createElement(
    ExpandableContext.Consumer,
    null,
    function (context) {
      return React.createElement(ExpandableChildren, Object.assign({}, props, { context: context }));
    }
  );
});