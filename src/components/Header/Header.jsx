import React from 'react'
import '../../Styles/App.scss'
import s from './header.module.scss'
import Navigation from './Navigation/Nav'
import Body from './Body/Body'
import Btn from './Button/Button'

const Header = (props) => {
  return (
      <header className={s.header}>
        <div className="container">
          <Navigation/>
          <Body/>
          <Btn/>
        </div>
      </header>
  )
}

export default Header
