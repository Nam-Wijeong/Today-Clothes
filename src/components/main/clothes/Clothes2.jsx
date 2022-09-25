import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes5_1 from '../../../assets/images/5_1.jpg'
import clothes5_2 from '../../../assets/images/5_2.jpg'
import clothes5_3 from '../../../assets/images/5_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes2() {
  return (
    <>
      <Carousel 
            imgSrc1={clothes5_1} 
            imgSrc2={clothes5_2} 
            imgSrc3={clothes5_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>코트</li>
        <li>히트텍</li>
        <li>니트</li>
        <li>청바지</li>
        <li>레깅스</li>
      </ul>
    </>
  )
}
