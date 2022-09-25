import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes9_1 from '../../../assets/images/9_1.jpg'
import clothes9_2 from '../../../assets/images/9_2.jpg'
import clothes9_3 from '../../../assets/images/9_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes3() {
  return (
    <>
      <Carousel 
              imgSrc1={clothes9_1} 
              imgSrc2={clothes9_2} 
              imgSrc3={clothes9_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>자켓</li>
        <li>트렌치 코트</li>
        <li>야상</li>
        <li>니트</li>
        <li>스타킹</li>
        <li>청바지</li>
        <li>면바지</li>
      </ul>
    </>
    
  )
}
