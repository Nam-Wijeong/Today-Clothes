import styled from 'styled-components';

const WeatherWrap = styled.div`
  font-family: 'SCDream4';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  overflow: auto;
  padding: 20px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const SearchInput = styled.input`
  font-family: 'SCDream4';
  background-color: var(--color-white);
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid var(--color-lightgrey);
  outline: none;
  font-size: 16px;
`;
const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding: 20px 20px 0;
  border-radius: 8px;
`;

const WeatherTitle = styled.h1`
  font-family: 'SCDream5';
  font-size: 22px;
  text-align: center;
`;

const WeatherIcon = styled.img`
  display: block;
  margin: 0 auto;
`;

const Temperature = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const WeatherInfo = styled.article`
  margin-bottom: 20px;
`;

const WeatherListWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin: 24px 0;
`;

const WeatherList = styled.li`
  background-color: var(--color-darkwhite);
  padding: 8px 5px;
  border-radius: 10px;
  font-size: 13px;
`;

const ClothesInfo = styled.article`
  img {
    width: 100%;
  }
`;
const HourlyWeatherWrap = styled.ul`
  display: flex;
  overflow: auto;
  overflow-y: hidden;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px 10px;
    padding: 6px;
    font-size: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    img {
      width: 60px;
    }
  }
`;

const ClothesBtn = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  color: #000;
  font-family: 'SCDream4';
  font-size: 14px;
  border: 1px solid var(--color-lightgrey);
  border-radius: 5px;
`;

export {
  WeatherWrap,
  SearchInput,
  ResultWrap,
  WeatherTitle,
  WeatherIcon,
  Temperature,
  WeatherInfo,
  WeatherListWrap,
  WeatherList,
  ClothesInfo,
  HourlyWeatherWrap,
  ClothesBtn,
};
