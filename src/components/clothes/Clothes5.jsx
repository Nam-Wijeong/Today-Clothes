import Carousel from '../carousel/Carousel';
import clothes17_1 from '../../assets/images/17W_1.png';
import clothes17_2 from '../../assets/images/17W_2.png';
import clothes17_3 from '../../assets/images/17M_1.png';
import clothes17_4 from '../../assets/images/17M_2.png';
import { ClothesWrap } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

export default function Clothes5() {
  return (
    <>
      <Carousel
        imgSrc1={clothes17_1}
        imgSrc2={clothes17_2}
        imgSrc3={clothes17_3}
        imgSrc4={clothes17_4}
      />
      <ClothesWrap>
        <li>
          <FontAwesomeIcon icon={faShirt} />
        </li>
        <li>얇은 니트</li>
        <li>가디건</li>
        <li>맨투맨</li>
        <li>얇은 자켓</li>
        <li>면바지</li>
        <li>청바지</li>
      </ClothesWrap>
    </>
  );
}
