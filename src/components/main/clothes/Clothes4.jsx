import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes12_1 from '../../../assets/images/12_1.jpg'
import clothes12_2 from '../../../assets/images/12_2.jpg'
import clothes12_3 from '../../../assets/images/12_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes4() {
  return (
    <>
      <Carousel 
                imgSrc1={clothes12_1} 
                imgSrc2={clothes12_2} 
                imgSrc3={clothes12_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>자켓</li>
        <li>가디건</li>
        <li>야상</li>
        <li>맨투맨</li>
        <li>니트</li>
        <li>청바지</li>
        <li>면바지</li>
      </ul>
    </>
    
  )
}
