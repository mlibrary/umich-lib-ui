import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import UMichBlockM from './UMichBlockM';
import UMichLibrary from './UMichLibrary';

var NavItem = function NavItem(_ref) {
  var item = _ref.item,
      renderAnchor = _ref.renderAnchor;

  if (item.href) {
    return React.createElement(
      'a',
      { href: item.href },
      item.text
    );
  }

  if (item.to) {
    return renderAnchor(item);
  }
};

var Header = function Header(_ref2) {
  var name = _ref2.name,
      baseUrl = _ref2.baseUrl,
      nav = _ref2.nav,
      renderAnchor = _ref2.renderAnchor;

  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement(
      'div',
      { className: 'header__inner' },
      React.createElement(
        'div',
        { className: 'logo' },
        React.createElement(
          'a',
          { href: 'https://umich.edu/', className: 'logo__blockm' },
          React.createElement(UMichBlockM, { className: 'logo__svg' })
        ),
        React.createElement(
          'a',
          { href: 'https://www.lib.umich.edu/', className: 'logo__library' },
          React.createElement(UMichLibrary, { className: 'logo__svg' })
        ),
        React.createElement(
          'a',
          { href: '/', className: 'logo__site-name-link' },
          name
        )
      ),
      nav.length && React.createElement(
        'nav',
        { className: 'header__nav' },
        React.createElement(
          'ul',
          { className: 'header__nav-list' },
          nav.map(function (item, key) {
            return React.createElement(
              'li',
              { key: key, className: 'header__nav-list-item' },
              React.createElement(NavItem, { item: item, renderAnchor: renderAnchor })
            );
          })
        )
      )
    )
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  renderAnchor: PropTypes.func
};

Header.defaultProps = {
  baseUrl: '/'
};

export default Header;