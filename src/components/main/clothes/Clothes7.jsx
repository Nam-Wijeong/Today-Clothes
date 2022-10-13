import Carousel from '../../carousel/Carousel'
import clothes23_1 from '../../../assets/images/23W_1.png'
import clothes23_2 from '../../../assets/images/23W_2.png'
import clothes23_3 from '../../../assets/images/23M_1.png'
import clothes23_4 from '../../../assets/images/23M_2.png'
import { ClothesWrap } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes7() {
  return (
    <>
      <Carousel 
                  imgSrc1={clothes23_1} 
                  imgSrc2={clothes23_2} 
                  imgSrc3={clothes23_3}
                  imgSrc4={clothes23_4}/>
      <ClothesWrap>
        <li><FontAwesomeIcon icon={faShirt}/></li>
        <li>반팔</li>
        <li>얇은 셔츠</li>
        <li>반바지</li>
        <li>면바지</li>
      </ClothesWrap>
    </>
    
  )
}
