import React from 'react'
import s from './button.module.scss'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Btn  = (props) => {
  return (
      <div className={s.btn}>
        <span><a className={s.text} href=''>узнать больше</a></span>
        <a href=''><IoIosArrowDropdownCircle size='30px'/></a>
      </div>
  )
}

export default Btn
