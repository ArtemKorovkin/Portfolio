import React from 'react'
import style from './skill.module.scss'

const Skills  = (props) => {
  return (
    <div className={style.skills}>
      <div className={style.title}>
        Skills
      </div>
      <div className={style.demonstration}>
        <p className={style.text}>

        </p>
        <span className={style.html}>HTML</span>
        <div></div>
        <span className={style.css}>CSS</span>
        <div></div>
        <span className={style.javaScript}>JavaScript</span>
        <div></div>
        <span className={style.react}>React</span>
      </div>
    </div>
  )
}

export default Skills
