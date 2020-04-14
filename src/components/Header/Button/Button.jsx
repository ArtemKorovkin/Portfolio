import React from 'react'
import {Link} from 'react-scroll'

import s from './button.module.scss'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Btn  = (props) => {
  return (
      <div className={s.btn}>
        <span>
          <Link className={s.text}
                to='aboutMe'
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
          >узнать больше</Link>
        </span>
        <Link to='aboutMe'
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
        >
          <IoIosArrowDropdownCircle size='40px'/>
        </Link>
      </div>
  )
}

export default Btn
