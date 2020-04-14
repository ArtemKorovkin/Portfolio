import React  from 'react'
import {Link} from 'react-scroll'
import style from './footer.module.scss'
import Social from '../Header/Body/Social/Social'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Footer  = (props) => {
  return (
    <footer className={style.footer}>
      <div className={style.btn}>
        <Link to='mainPage'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
        >
          <IoIosArrowDropdownCircle size={50}/>
        </Link>
      </div>
      <div className={style.social}>
        <Social/>
      </div>
      <div className={style.copyrigth}>
        © Copyright 2020 Artem Korovkin - Design by Styleshout
      </div>
    </footer>
  )
}

export default Footer
