import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel({imgSrc1, imgSrc2, imgSrc3}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  }
  return (
    <div className='carousel'>
      <Slider {...settings}>
        <div>
          <img src={imgSrc1} alt="" />
        </div>
        <div>
          <img src={imgSrc2} alt="" />
        </div>
        <div>
          <img src={imgSrc3} alt="" />
        </div>
      </Slider>
    </div>
  )
}
