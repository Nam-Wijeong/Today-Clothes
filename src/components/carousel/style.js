import styled from 'styled-components';

const CarouselWrap = styled.div`
  margin-bottom: 30px;
  img {
    height: 240px;
    object-fit: contain;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #a6a0c3;
  }
`;

export { CarouselWrap };
