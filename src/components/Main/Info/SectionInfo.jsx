import React from 'react'
import style from './sectionInfo.module.scss'
import About from './About/About'
const SectionInfo = (props) => {
  return (
      <section className={style.info}>
        <div className="container">
          <About/>
        </div>
      </section>
  )
}

export default SectionInfo
