import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Header.css'

import umich_block_m from './umich_block_m.png'

const Header = ({
  name,
  baseUrl,
  children
}) => {
  return (
    <header class="header">
      <div class="header__inner">
        <div class="logo">
          <a href="/" class="logo__link"><img class="logo__image" src={umich_block_m} alt="University of Michigan" /><span class="logo__library">Library</span><span class="logo__name">{name}</span></a>
        </div>

        {children}
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
