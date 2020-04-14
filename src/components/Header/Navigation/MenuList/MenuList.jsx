import React from 'react'
import style from './menuList.module.scss'
import {Link} from 'react-scroll'

const MenuList  = (props) => {
  return (
    <div className={style.menu}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link to='mainPage'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass={style.activeLink}
          >Главная</Link>
        </li>
        <li className={style.listItem}>
          <Link
              to='aboutMe'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass={style.activeLink}
          >О себе</Link>
        </li>
        <li className={style.listItem}>
          <Link
              to='myResume'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass={style.activeLink}
          >Резюме</Link>
          </li>
        <li className={style.listItem}>
          <Link
              to='myWorks'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass={style.activeLink}
          >Работы</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuList
