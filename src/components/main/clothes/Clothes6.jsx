import React from 'react'
import Carousel from '../../carousel/Carousel'
import clothes20_1 from '../../../assets/images/20_1.jpg'
import clothes20_2 from '../../../assets/images/20_2.jpg'
import clothes20_3 from '../../../assets/images/20_3.jpg'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes6() {
  return (
    <>
      <Carousel 
                imgSrc1={clothes20_1} 
                imgSrc2={clothes20_2} 
                imgSrc3={clothes20_3}/>
      <ul className='clothesWrap'>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>얇은 가디건</li>
        <li>긴팔 티</li>
        <li>면바지</li>
        <li>청바지</li>
      </ul>
    </>
    
  )
}
