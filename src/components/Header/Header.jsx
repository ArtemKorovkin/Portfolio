import React from 'react';
import '../../Styles/App.scss';
import style from './header.module.scss'
import Navigation from './Navigation/Nav'
import Body from './Body/Body'

const Header = (props) =>{
  return(
      <header className={style.header}>
        <div className="container">
        <Navigation/>
        <Body/>
        </div>
      </header>
  )
}

export default Header
