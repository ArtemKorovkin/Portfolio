import React from 'react'
import s from './button.module.scss'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Btn  = (props) => {
  return (
      <div className={s.btn}>
        <span><a href=''>узнать больше</a></span>
        <IoIosArrowDropdownCircle size='30px' color='white' style={{cursor: 'pointer'}}/>
      </div>
  )
}

export default Btn
