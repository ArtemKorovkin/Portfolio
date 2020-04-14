import React from 'react'
import style from './burger.module.scss'
import s from '../MenuList/menuList.module.scss'
import MenuList from '../MenuList/MenuList'


const Burger = (props) => {
  let burgerMenu = React.createRef()
  let activeBurger = () => {
    burgerMenu.current.classList.toggle(style.active)
    burgerMenu.current.nextElementSibling.classList.toggle(s.active)
  }
  return (
      <div>
        <div className={style.menuBurger}
             onClick={activeBurger}
             ref={burgerMenu}>
          <span></span>
        </div>
        <MenuList burgerMenu/>
      </div>
  )
}
export default Burger
