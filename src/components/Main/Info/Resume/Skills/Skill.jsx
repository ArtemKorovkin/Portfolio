import React from 'react'
import style from './skill.module.scss'

const Skills  = (props) => {
  return (
    <div className={style.skills} id='mySkills'>
      <div className={style.title}>
        <h3>Skills</h3>
      </div>
      <div className={style.demonstration}>
        <p className={style.text}>
          Как и все начинающие веб-разработчики, свой путь я начал с изучения HTML и CSS. Практиковался сначала просто на одной страничке, применял разные свойства и смотрел за их поведением. После я начал изучать основы JavaScript и я столкнулся с React. Очень понравился данный framework, сейчас много времени уделяю именно React. Мне нравится компонентный подход  ив принципе процесс разработки. На этом я не остановлюсь и начну развиваться дальше.
        </p>
        <span>HTML</span>
        <div className={`${style.progressBar} ${style.html}`}>

        </div>
        <span>CSS</span>
        <div className={`${style.progressBar} ${style.css}`}>

        </div>
        <span>JavaScript</span>
        <div className={`${style.progressBar} ${style.javaScript}`}>

        </div>
        <span>React</span>
        <div className={`${style.progressBar} ${style.react}`}>

        </div>
        <span>(SASS/SCSS)</span>
        <div className={`${style.progressBar} ${style.scss}`}>

        </div>
        <span>(Figma/PhotoShop/Avocode/Sketch)</span>
        <div className={`${style.progressBar} ${style.photoRedactors}`}>

        </div>
      </div>
    </div>
  )
}

export default Skills
