import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes1() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>패딩</li>
      <li>두꺼운 코트</li>
      <li>목도리</li>
      <li>기모 제품</li>
    </ul>
  )
}
