import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel({imgSrc1, imgSrc2, imgSrc3, imgSrc4}) {
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
          <img src={imgSrc1} alt="옷 이미지" />
        </div>
        <div>
          <img src={imgSrc2} alt="옷 이미지" />
        </div>
        <div>
          <img src={imgSrc3} alt="옷 이미지" />
        </div>
        <div>
          <img src={imgSrc4} alt="옷 이미지" />
        </div>
      </Slider>
    </CarouselWrap>
  )
}

const CarouselWrap = styled.div`
  margin-bottom: 30px;  
  img {
    height: 240px;
    object-fit: contain;
  }
  .slick-prev:before, .slick-next:before {
    color: #A6A0C3;
  }
`
