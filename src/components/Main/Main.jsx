import React from 'react'
import style from './main.module.scss'
import SectionInfo from './Info/SectionInfo'
import Resume from './Info/Resume/Resume'

const Main  = (props) => {
  return (
    <main className={style.content}>
        <SectionInfo/>
        <Resume/>
    </main>
  )
}

export default Main
