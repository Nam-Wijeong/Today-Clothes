import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes4() {
  return (
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
  )
}
