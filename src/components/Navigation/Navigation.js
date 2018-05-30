import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Navigation.css'

const Navigation = ({
  items,
  className
}) => {
  const navigationClasses = classNames(className, 'navigation')

  return (
    <React.Fragment>
      <ul className={navigationClasses}>
        {items.map((item, key) => <li key={key}><a href={item[1]}>{item[0]}</a></li>)}
      </ul>

      {items.map((item, key) => (
        <section id={item[1]} key={key}>
          {item[0]}
        </section>
      ))}
    </React.Fragment>
  )
}

export default Navigation
