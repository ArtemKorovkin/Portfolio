import React from 'react'
import style from './resume.module.scss'
import Work from './Work/Work'
import Education from './Education/Education'
import Skills from './Skills/Skill'

const Resume  = (props) => {
  return (
    <section className={style.resume}>
      <div className="container">
      <Education/>
      <Work/>
      <Skills/>
      </div>
    </section>
  )
}

export default Resume
