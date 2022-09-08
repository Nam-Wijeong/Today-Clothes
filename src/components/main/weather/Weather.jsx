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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=kr`
  // const API_KEY2 = 'b3a8176206ca49da8978eefacdd98593'
  // const url2 = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${API_KEY2}&lang=kr`
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method : 'get',
          url : url,
        })
        console.log(data);
        setResult(data);
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
                  <h1 className='cityTitle'>{result.data.name}의 현재 날씨는 ?</h1>
                  <img className="weatherIcon" src={`https://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`} alt="날씨 아이콘"  />
                  <p className='temperature'>{Math.floor(result.data.main.temp)}°C</p>
                  <p className='city'>지역 : {result.data.name}</p>
                  <p className='feelLikeTemp'>체감 온도 : {Math.floor(result.data.main.feels_like)}°C</p>
                  <p className='humidity'>습도 : {result.data.main.humidity}%</p>
                  <p className='sky'>날씨 : {result.data.weather[0].description}</p>
                  <ClothesBtn onClick={() => {setVisible(!visible)}}>옷 추천</ClothesBtn>
                </WeatherInfo>
                {visible && <ClothesInfo>
                  {
                    Math.floor(result.data.main.temp) <= 4 ? 
                      <Clothes1/>
                    : Math.floor(result.data.main.temp) >= 5 && Math.floor(result.data.main.temp) <= 8 ?
                      <Clothes2/>
                    : Math.floor(result.data.main.temp) >= 9 && Math.floor(result.data.main.temp) <= 11 ?
                      <Clothes3/>
                    : Math.floor(result.data.main.temp) >= 12 && Math.floor(result.data.main.temp) <= 16 ?
                      <Clothes4/>
                    : Math.floor(result.data.main.temp) >= 17 && Math.floor(result.data.main.temp) <= 19 ?
                      <Clothes5/>
                    : Math.floor(result.data.main.temp) >= 20 && Math.floor(result.data.main.temp) <= 22 ?
                      <Clothes6/>
                    : Math.floor(result.data.main.temp) >= 23 && Math.floor(result.data.main.temp) <= 27 ?
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
  width: 100vw;
  height: 100vh;
  .weatherContentWrap {   
    width: 500px;
    min-width: 390px;
    margin: 0 auto;
    padding: 20px;
  }
  .searchInp {
    padding: 8px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #c4c4c4;
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
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .weatherIcon {
    display: block;
    margin: 0 auto;
  }
  .temperature {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`

const WeatherInfo = styled.article`
  width: 100%;
  margin-bottom: 20px;
  p {
    font-size: 18px;
    line-height: 24px;
  }
`

const ClothesInfo = styled.article`
  width: 100%;
  button {
    width: 50%;
  }
  img {
    /* display: grid; */
    width : 50%;
  }
`

const ClothesBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  /* color: #c4c4c4; */
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
`
