import React from 'react';
import Carousel from '../../carousel/Carousel';
import clothes9_1 from '../../../assets/images/9W_1.png';
import clothes9_2 from '../../../assets/images/9W_2.png';
import clothes9_3 from '../../../assets/images/9M_1.png';
import clothes9_4 from '../../../assets/images/9M_2.png';
import { ClothesWrap } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes3() {
  return (
    <>
      <Carousel
        imgSrc1={clothes9_1}
        imgSrc2={clothes9_2}
        imgSrc3={clothes9_3}
        imgSrc4={clothes9_4}
      />
      <ClothesWrap>
        <li>
          <FontAwesomeIcon icon={faShirt} />
        </li>
        <li>자켓</li>
        <li>트렌치 코트</li>
        <li>야상</li>
        <li>니트</li>
        <li>스타킹</li>
        <li>청바지</li>
        <li>면바지</li>
      </ClothesWrap>
    </>
  );
}
