import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { app } from '_config'

import './Header.scss'

import { Container } from 'layouts'

// icons:
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'

const menuLinks = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About',
    alias: '/about',
  },
]

const menuItem = menuLinks.map((item) => (
  <li key={item.alias}>
    <NavLink to={item.alias}>
      <div className='ui-button isLink'>{item.title}</div>
    </NavLink>
  </li>
))

const menuList = <ul className='HeaderList'>{menuItem}</ul>

const Header = ({ isLogo, isFixed, className, ...attrs }) => {
  const classes = classNames('Header', className, {
    isFixed,
  })

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between py-2 mb-4'>
          <div className='Logo'>
            {isLogo && <LogoIcon />}
            <span>{app.name}</span>
          </div>
          {menuList}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
}

Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: '',
}

export default Header
