import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

export default function Carousel({imgSrc1, imgSrc2, imgSrc3}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <CarouselWrap>
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
    </CarouselWrap>
  )
}

const CarouselWrap = styled.div`
  margin-bottom: 30px;  
  img {
    width: 100%;
    height: 230px;
  }
`
