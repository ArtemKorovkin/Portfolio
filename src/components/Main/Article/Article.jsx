import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'

import style from './article.module.scss'
import bg from './testimonials-bg.jpg'
import Slick from './Slider/Slider'

const Article = (props) => {
  return (
      <section className={style.article} style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
          <div className={style.inner}>
            <div>
              <FaQuoteLeft size='60' color='white'/>
            </div>
            <div>
              <Slick/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Article
