import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ImgSplash from '../../assets/images/splashImg.jpg';

export default function Splash() {
  const [display, setDisplay] = useState('flex');
  setTimeout(() => {
    setDisplay('none')
  }, 2000);
  return (
      <SplaschSec display={display}>
        <SplashH1>옷늘의 날씨</SplashH1>
        <SplashImg src={ImgSplash} alt="로고 이미지" />
        <SplashP>스플래쉬 화면입니다 :)</SplashP>
      </SplaschSec>    
  )
}

const ImageFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
const SplaschSec = styled.section`
  z-index: 1;
  background-color: whitesmoke;
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 375px; 
  animation: 0.7s ease-in-out ${ImageFadeOut} forwards;
  animation-delay: 0.7s;
`
const SplashH1 = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`
const SplashImg = styled.img`
  width: 300px;
  margin-bottom: 10px;
`
const SplashP = styled.p`
  font-size: 20px;
`