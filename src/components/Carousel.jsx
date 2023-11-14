import React from 'react'
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className='w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3'>
        { images && images.map((image, index) => (
          <img key={index} className='w-full' src={image} alt='코디 이미지' />
        ))}
      </Slider>
    </>
  )
}
