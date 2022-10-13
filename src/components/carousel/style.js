import styled from 'styled-components';

const CarouselWrap = styled.div`
  margin-bottom: 30px;  
  img {
    height: 240px;
    object-fit: contain;
  }
  .slick-prev:before, .slick-next:before {
    color: #A6A0C3;
  }
`

export { CarouselWrap }