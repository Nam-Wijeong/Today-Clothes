import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes6() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>얇은 가디건</li>
      <li>긴팔 티</li>
      <li>면바지</li>
      <li>청바지</li>
    </ul>
  )
}
