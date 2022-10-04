import React, { useState } from 'react';
import Header from '../../header/Header';
import styled from 'styled-components'
import axios from 'axios';
import Clothes1 from '../clothes/Clothes1';
import Clothes2 from '../clothes/Clothes2';
import Clothes3 from '../clothes/Clothes3';
import Clothes4 from '../clothes/Clothes4';
import Clothes5 from '../clothes/Clothes5';
import Clothes6 from '../clothes/Clothes6';
import Clothes7 from '../clothes/Clothes7';
import Clothes8 from '../clothes/Clothes8';

export default function Weather() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const [visible, setVisible] = useState(false);

  const API_KEY = '914f9c70d886880e8efa0d5c84fadb98'
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&lang=kr&units=metric&cnt=7`;
  
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method : 'get',
          url : url,
        })        
        setResult(data)
      } catch(err) {
        alert(err)
      }
    }
  }
  return (
    <WeatherWrap>
      <Header/>
      <div>
        <SearchInput
          type="text" 
          placeholder='원하는 지역을 입력해주세요!' 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchWeather}
          />
          {
            Object.keys(result).length !== 0 && (
              <ResultWrap>
                <WeatherInfo>
                  <WeatherTitle>우리 동네의 현재 날씨는 ?</WeatherTitle>
                  <WeatherIcon src={`https://openweathermap.org/img/wn/${result.data.list[1].weather[0].icon}@2x.png`} alt="날씨 아이콘"  />
                  <Temperature>{Math.floor(result.data.list[1].main.temp)}°C / {result.data.list[1].weather[0].description}</Temperature>
                  <WeatherListWrap>
                    <WeatherList>지역 <span>{result.data.city.name}</span></WeatherList>
                    <WeatherList>체감 <span>{result.data.list[1].main.feels_like.toFixed(1)}°C</span></WeatherList>
                    <WeatherList>습도 <span>{result.data.list[1].main.humidity}%</span></WeatherList>
                  </WeatherListWrap>
                  <HourlyWeatherWrap>
                    {result.data.list.map((res, i) => 
                      <li key={i}>
                        <p>
                          {(res.dt_txt).slice(11, 13)}시
                        </p>
                        <img src={`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                        <strong>
                          {(res.main.temp).toFixed(1)}°C
                        </strong>
                      </li>)}
                  </HourlyWeatherWrap>
                  <ClothesBtn onClick={() => {setVisible(!visible)}}>옷 추천</ClothesBtn>
                </WeatherInfo>
                {visible && <ClothesInfo>
                  {
                    Math.floor(result.data.list[1].main.temp) <= 4 ? 
                      <Clothes1/>
                    : Math.floor(result.data.list[1].main.temp) >= 5 && Math.floor(result.data.list[1].main.temp) <= 8 ?
                      <Clothes2/>
                    : Math.floor(result.data.list[1].main.temp) >= 9 && Math.floor(result.data.list[1].main.temp) <= 11 ?
                      <Clothes3/>
                    : Math.floor(result.data.list[1].main.temp) >= 12 && Math.floor(result.data.list[1].main.temp) <= 16 ?
                      <Clothes4/>
                    : Math.floor(result.data.list[1].main.temp) >= 17 && Math.floor(result.data.list[1].main.temp) <= 19 ?
                      <Clothes5/>
                    : Math.floor(result.data.list[1].main.temp) >= 20 && Math.floor(result.data.list[1].main.temp) <= 22 ?
                      <Clothes6/>
                    : Math.floor(result.data.list[1].main.temp) >= 23 && Math.floor(result.data.list[1].main.temp) <= 27 ?
                      <Clothes7/>
                    : <Clothes8/>
                  }
                </ClothesInfo>
                }
              </ResultWrap>
            )
          }
      </div>
    </WeatherWrap>
  )
}

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
  overflow: hidden;
  padding: 20px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
`

const SearchInput = styled.input`
    font-family: 'SCDream4';
    background-color: var(--color-white);
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid var(--color-lightgrey);
    outline: none;
    font-size: 16px;
`
const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding: 20px;
  border-radius: 8px;
`

const WeatherTitle = styled.h1`
  font-family: 'SCDream5';
  font-size: 22px;
  text-align: center;
`

const WeatherIcon = styled.img`
  display: block;
  margin: 0 auto;
`

const Temperature = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`

const WeatherInfo = styled.article`
  margin-bottom: 20px;
`

const WeatherListWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin: 24px 0;
`

const WeatherList = styled.li`
  background-color: var(--color-darkwhite);
  padding: 8px;
  border-radius: 10px;
  font-size: 13px;
`

const ClothesInfo = styled.article`
  img {
    width : 100%;
  }
`
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
`

const ClothesBtn = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-family: 'SCDream4';
  font-size: 14px;
  border: 1px solid var(--color-lightgrey);
  border-radius: 5px;
`


