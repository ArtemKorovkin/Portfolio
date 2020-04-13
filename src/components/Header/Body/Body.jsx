import React from 'react'
import s from './body.module.scss'
import Social from './Social/Social'
import Btn from '../Button/Button'

const Body = (props) => {
  return (
      <div className={s.body}>
        <h1 className={s.title}>Я Коровкин Артем.</h1>
        <p className={s.text}>
          Я - ученик IT школы. Прохожу курсы на позицию <span>frontend developer.</span> Очень увлекся этой специальностью, особенно интересна разработка на React. На учебу стараюсь выделять все свободное время. Изучаю много новой информации, но я знаю, что все старания не зря и <span>я буду полезен людям!</span>
        </p>
        <Social/>
      </div>
)
}

export default Body
