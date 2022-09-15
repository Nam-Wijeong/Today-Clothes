import React, { useState } from 'react';
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
        console.log(data);
        setResult(data)
      } catch(err) {
        alert(err)
      }
    }
  }
  return (
    <WeatherWrap>
      <div className='weatherContentWrap'>
        <input 
          className='searchInp'
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
                  <h1 className='cityTitle'>우리 동네의 현재 날씨는 ?</h1>
                  <img className="weatherIcon" src={`https://openweathermap.org/img/wn/${result.data.list[1].weather[0].icon}@2x.png`} alt="날씨 아이콘"  />
                  <p className='temperature'>{Math.floor(result.data.list[1].main.temp)}°C / {result.data.list[1].weather[0].description}</p>
                  <ul className='weatherList'>
                    <li>지역 <span>{result.data.city.name}</span></li>
                    <li>체감 <span>{result.data.list[1].main.feels_like.toFixed(1)}°C</span></li>
                    <li>습도 <span>{result.data.list[1].main.humidity}%</span></li>
                  </ul>
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
  top:50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  overflow: hidden;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .searchInp {
    font-family: 'SCDream4';
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    outline: none;
    font-size: 16px;
  }
`

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  .cityTitle {
    font-family: 'SCDream5';
    font-size: 22px;
    text-align: center;
  }
  .weatherIcon {
    display: block;
    margin: 0 auto;
  }
  .temperature {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
`

const WeatherInfo = styled.article`
  margin-bottom: 20px;
  .weatherList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    margin: 30px 0;
  }
`

const ClothesInfo = styled.article`
  img {
    width : 50%;
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
    margin: 0 10px 30px;
    font-size: 12px;
    img {
      width: 60px;
    }
  }
`

const ClothesBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-family: 'SCDream4';
  font-size: 14px;
  border: 1px solid;
  border-radius: 5px;
`


