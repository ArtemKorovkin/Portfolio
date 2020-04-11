import React from 'react'
import style from './body.module.scss'
import Social from './Social/Social'

const Body = (props) => {
  return (
      <div className={style.body}>
        <h1 className={style.title}>Я Коровкин Артем.</h1>
        <p className={style.text}></p>
        <Social/>
      </div>
)
}

export default Body
