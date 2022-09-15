import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes2() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>코트</li>
      <li>히트텍</li>
      <li>니트</li>
      <li>청바지</li>
      <li>레깅스</li>
    </ul>
  )
}
