import React from 'react';
import style from './nav.module.scss'
import Burger from './BurgerMenu/Burger'


const Navigation  = (props) => {
  return (
    <nav className={style.nav}>
      <ul className={style.menuList}>
        <li className={style.menuItem}><a href=''>Главная</a></li>
        <li className={style.menuItem}><a href=''>О себе</a></li>
        <li className={style.menuItem}><a href=''>Резюме</a></li>
        <li className={style.menuItem}><a href=''>Работы</a></li>
      </ul>
      <Burger/>
    </nav>
  )
}

export default Navigation
