import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes8() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>민소매</li>
      <li>반팔</li>
      <li>반바지</li>
      <li>치마</li>
    </ul>
  )
}
