import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes3() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>자켓</li>
      <li>트렌치 코트</li>
      <li>야상</li>
      <li>니트</li>
      <li>스타킹</li>
      <li>청바지</li>
      <li>면바지</li>
    </ul>
  )
}
