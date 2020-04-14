import React from 'react'
import style from './works.module.scss'
import pr1 from './project1.jpg'
import pr2 from './project2.jpg'
import pr3 from './project3.jpg'


const Works  = (props) => {
  return (
    <section className={style.works} id='myWorks'>
      <div className="container">
        <h3>Мои первые работы</h3>
        <p>Со временем работы будут пополняться, на этом я не останавливаюсь</p>
        <div className={style.worksInner}>
          <div className={style.projects}>
            <img src={pr1} alt=''/>
          </div>
          <div className={style.projects}>
            <img src={pr2} alt=''/>
          </div>
          <div className={style.projects}>
            <img src={pr3} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
