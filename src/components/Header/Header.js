import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

import UMichBlockM from './UMichBlockM'
import UMichLibrary from './UMichLibrary'

const NavItem = ({
  item,
  renderAnchor
}) => {
  if (item.href) {
    return (
      <a href={item.href}>{ item.text }</a>
    )
  }

  if (item.to) {
    return (
      renderAnchor(item)
    )
  }
}

/**
  Keep your header as simple as possible. Use a header for critical navigation elements.
*/
const Header = ({
  name,
  siteUrl,
  nav,
  renderAnchor
}) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <a href="https://umich.edu/" className="logo__blockm"><UMichBlockM className="logo__svg" /></a>
          <a href="https://www.lib.umich.edu/" className="logo__library"><UMichLibrary className="logo__svg" /></a>
          {name && siteUrl && (<a href={siteUrl} className="logo__site-name-link">{name}</a>)}
        </div>

        {nav && nav.length && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              {nav.map((item, key) => (
                <li key={key} className="header__nav-list-item"><NavItem item={item} renderAnchor={renderAnchor} /></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  /**
    Site name
  */
  name: PropTypes.string.isRequired,
  /**
    The url to go to when a user clicks the site name.
  */
  siteUrl: PropTypes.string.isRequired,
  /**
    The nav is an array of objects. The objects can have `text` and `href` or `to` attributes.
  */
  nav: PropTypes.array,
  /**
    A render prop to handle the nav object `to` prop.
  */
  renderAnchor: PropTypes.func
};

Header.defaultProps = {
  siteUrl: '/',
};

export default Header
