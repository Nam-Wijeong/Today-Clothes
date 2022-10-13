import Carousel from '../../carousel/Carousel'
import clothes4_1 from '../../../assets/images/4W_1.png'
import clothes4_2 from '../../../assets/images/4W_2.png'
import clothes4_3 from '../../../assets/images/4M_1.png'
import clothes4_4 from '../../../assets/images/4M_1.png'
import { ClothesWrap } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes1() {
  return (
    <>
      <Carousel 
          imgSrc1={clothes4_1} 
          imgSrc2={clothes4_2} 
          imgSrc3={clothes4_3}
          imgSrc4={clothes4_4}/>
      <ClothesWrap>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>패딩</li>
        <li>두꺼운 코트</li>
        <li>목도리</li>
        <li>기모 제품</li>
      </ClothesWrap>
    </>
  )
}
