import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothesImg1 from '../../../assets/images/clothes_1.png'
import clothesImg2 from '../../../assets/images/clothes_5.png'
import clothesImg3 from '../../../assets/images/clothes_3.png'
import clothesImg4 from '../../../assets/images/clothes_4.png'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes5() {
  return (
    <>
      <Carousel 
        imgSrc1={clothesImg1} 
        imgSrc2={clothesImg2} 
        imgSrc3={clothesImg4}/>
        
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>얇은 니트</li>
        <li>가디건</li>
        <li>맨투맨</li>
        <li>얇은 자켓</li>
        <li>면바지</li>
        <li>청바지</li>
      </ul>
    </>
    
  )
}
