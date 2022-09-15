import React from 'react'
import './clothes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes7() {
  return (
    <ul className='clothesWrap'>
      <li><FontAwesomeIcon icon={faShirt}/></li>
      <li>반팔</li>
      <li>얇은 셔츠</li>
      <li>반바지</li>
      <li>면바지</li>
    </ul>
  )
}
