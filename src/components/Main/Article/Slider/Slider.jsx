import React from 'react'
import Slider from 'react-slick'
import './slick.scss'

const Slick = (props) => {
  let setSlider = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
  }
  return (
        <Slider {...setSlider}>
          <div>
            <article>
              Разберитесь в себе и поймите, что же вы любите. Это имеет такое же прямое отношение к вашей работе, как и к вашей личной жизни. Работа займёт большую часть вашей жизни, и единственный путь к самоуважению — делать то, что вы считаете стоящим больших усилий. А единственный способ выполнить такую работу — это любить то, чем вы заняты. Не раскисайте!
              <span>-Steven Jobs</span>
            </article>
          </div>
          <div>
            <article>
              Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования.
              <span>-Linus Torvalds</span>
            </article>
          </div>
          <div>
            <article>
              Лучше идти к цели со скоростью черепахи, чем со скоростью света придумывать оправдания, почему ты стоишь на месте.
              <span>-Bodo Schaefer</span>
            </article>
          </div>
        </Slider>
  )
}

export default Slick
