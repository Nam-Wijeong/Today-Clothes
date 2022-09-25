import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes4_1 from '../../../assets/images/4_1.jpg'
import clothes4_2 from '../../../assets/images/4_2.jpg'
import clothes4_3 from '../../../assets/images/4_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes1() {
  return (
    <>
      <Carousel 
          imgSrc1={clothes4_1} 
          imgSrc2={clothes4_2} 
          imgSrc3={clothes4_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>패딩</li>
        <li>두꺼운 코트</li>
        <li>목도리</li>
        <li>기모 제품</li>
      </ul>
    </>
  )
}
