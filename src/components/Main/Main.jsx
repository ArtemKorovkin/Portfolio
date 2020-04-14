import React from 'react'
import style from './main.module.scss'
import SectionInfo from './Info/SectionInfo'
import Resume from './Info/Resume/Resume'
import Works from './Info/Works/Work'
import Article from './Article/Article'

const Main  = (props) => {
  return (
    <main className={style.content}>
        <SectionInfo/>
        <Resume/>
        <Works/>
        <Article/>
    </main>
  )
}

export default Main
