import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes17_1 from '../../../assets/images/17_1.jpg'
import clothes17_2 from '../../../assets/images/17_2.jpg'
import clothes17_3 from '../../../assets/images/17_3.jpg'

import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes5() {
  return (
    <>
      <Carousel 
        imgSrc1={clothes17_1} 
        imgSrc2={clothes17_2} 
        imgSrc3={clothes17_3}/>
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
