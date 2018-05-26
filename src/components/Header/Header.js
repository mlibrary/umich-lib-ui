import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Header.css'

import umich_block_m from './umich_block_m.png'

const Header = ({
  name,
  baseUrl
}) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <a href="/" className="logo__link"><img className="logo__image" src={umich_block_m} alt="University of Michigan" /><span className="logo__library">Library</span><span className="logo__name">{name}</span></a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

Header.defaultProps = {
  baseUrl: '/',
};

export default Header
