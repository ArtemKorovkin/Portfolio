import React from 'react'
import style from './menuList.module.scss'

const MenuList  = (props) => {
  return (
    <div className={style.menu}

    >
      <ul className={style.list}>
        <li className={style.listItem}><a href=''>Главная</a></li>
        <li className={style.listItem}><a href=''>О себе</a></li>
        <li className={style.listItem}><a href=''>Резюме</a></li>
        <li className={style.listItem}><a href=''>Работы</a></li>
      </ul>
    </div>
  )
}

export default MenuList
