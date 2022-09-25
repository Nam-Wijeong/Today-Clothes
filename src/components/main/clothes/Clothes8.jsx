import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes28_1 from '../../../assets/images/28_1.jpg'
import clothes28_2 from '../../../assets/images/28_2.jpg'
import clothes28_3 from '../../../assets/images/28_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes8() {
  return (
    <>
      <Carousel 
                  imgSrc1={clothes28_1} 
                  imgSrc2={clothes28_2} 
                  imgSrc3={clothes28_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>민소매</li>
        <li>반팔</li>
        <li>반바지</li>
        <li>치마</li>
      </ul>
    </>
  )
}
