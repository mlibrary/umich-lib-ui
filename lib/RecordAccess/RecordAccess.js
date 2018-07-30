var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import './RecordAccess.css';
import Expandable, { ExpandableChildren, ExpandableButton } from '../Expandable';

var Cell = function Cell(_ref) {
  var cell = _ref.cell,
      renderAnchor = _ref.renderAnchor;

  if (cell.href) {
    return React.createElement(
      'a',
      { href: cell.href },
      cell.text
    );
  }

  if (cell.to) {
    return renderAnchor(cell);
  }

  if (cell.status) {
    // TODO: Add an optional icon.
    return React.createElement(
      'span',
      { className: 'record-access__cell--' + cell.status },
      cell.text
    );
  }

  return React.createElement(
    React.Fragment,
    null,
    cell.text
  );
};

var RecordAccess = function (_React$Component) {
  _inherits(RecordAccess, _React$Component);

  function RecordAccess(props) {
    _classCallCheck(this, RecordAccess);

    var _this = _possibleConstructorReturn(this, (RecordAccess.__proto__ || Object.getPrototypeOf(RecordAccess)).call(this, props));

    _this.state = {
      tabindex: null
    };
    _this.captionId = 'caption-' + Math.random().toString(36).substr(2, 9);
    _this.containerRef = React.createRef();
    return _this;
  }

  _createClass(RecordAccess, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var container = this.containerRef.current;
      var scrollable = container.scrollWidth > container.clientWidth;
      this.setState({
        tabindex: scrollable ? '0' : null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          notes = _props.notes,
          location = _props.location,
          headings = _props.headings,
          rows = _props.rows,
          count = _props.count,
          name = _props.name,
          renderAnchor = _props.renderAnchor;


      return React.createElement(
        'div',
        {
          className: 'record-access__container',
          tabIndex: this.state.tabindex,
          'aria-labelledby': this.captionId,
          ref: this.containerRef,
          role: 'group'
        },
        React.createElement(
          Expandable,
          null,
          React.createElement(
            'table',
            { className: 'record-access__table' },
            React.createElement(
              'caption',
              { id: this.captionId, className: 'record-access__caption' },
              React.createElement(
                'span',
                { className: 'record-access__caption-text' },
                caption
              ),
              location && React.createElement(
                'a',
                { href: location.href, className: 'record-access__caption-location' },
                location.text
              ),
              notes && React.createElement(
                React.Fragment,
                null,
                notes.map(function (note) {
                  return React.createElement(
                    'span',
                    { className: 'record-access__caption-note' },
                    note
                  );
                })
              ),
              this.state.tabindex === '0' && React.createElement(
                'small',
                { className: 'record-access__caption-scroll-text' },
                '(scroll to see more)'
              )
            ),
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                headings.map(function (heading, i) {
                  return React.createElement(
                    'th',
                    { scope: 'col', key: i },
                    heading
                  );
                })
              )
            ),
            React.createElement(
              'tbody',
              null,
              React.createElement(
                ExpandableChildren,
                { show: 1 },
                rows.map(function (row, i) {
                  return React.createElement(
                    'tr',
                    { key: i },
                    row.map(function (cell, t) {
                      return React.createElement(
                        'td',
                        { key: t },
                        React.createElement(Cell, { cell: cell, renderAnchor: renderAnchor })
                      );
                    })
                  );
                })
              )
            )
          ),
          React.createElement(ExpandableButton, { kind: 'tertiary', small: true, count: count ? rows.length : '', name: name })
        )
      );
    }
  }]);

  return RecordAccess;
}(React.Component);

RecordAccess.propTypes = {
  caption: PropTypes.string.isRequired,
  notes: PropTypes.array,
  headings: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  name: PropTypes.string,
  count: PropTypes.bool,
  renderAnchor: PropTypes.func
};

export default RecordAccess;