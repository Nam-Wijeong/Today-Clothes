import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes23_1 from '../../../assets/images/23_1.jpg'
import clothes23_2 from '../../../assets/images/23_2.jpg'
import clothes23_3 from '../../../assets/images/23_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes7() {
  return (
    <>
      <Carousel 
                  imgSrc1={clothes23_1} 
                  imgSrc2={clothes23_2} 
                  imgSrc3={clothes23_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>반팔</li>
        <li>얇은 셔츠</li>
        <li>반바지</li>
        <li>면바지</li>
      </ul>
    </>
    
  )
}
