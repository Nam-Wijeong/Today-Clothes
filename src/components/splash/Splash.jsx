import { useState } from 'react';
import ImgSplash from '../../assets/images/splashImg.jpg';
import {
  SplaschSec,
  SplashH1,
  SplashImg,
  SplashP
} from './style';

export default function Splash() {
  const [display, setDisplay] = useState('flex');
  setTimeout(() => {
    setDisplay('none')
  }, 2000);
  return (
      <SplaschSec display={display}>
        <SplashH1>옷늘의 날씨</SplashH1>
        <SplashImg src={ImgSplash} alt="로고 이미지" />
        <SplashP>잠시만 기다려주세요 :)</SplashP>
      </SplaschSec>    
  )
}

