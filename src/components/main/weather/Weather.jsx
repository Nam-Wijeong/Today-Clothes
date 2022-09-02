import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom';
import clothesTwenty from '../../../assets/images/clothes_1.png'
import clothesTwenty2 from '../../../assets/images/clothes_2.png'
import clothesTwenty3 from '../../../assets/images/clothes_3.png'

export default function Weather() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const [visible, setVisible] = useState(false);

  const API_KEY = '914f9c70d886880e8efa0d5c84fadb98'
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&lang=kr&units=metric`  

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
                  <p className='city'>지역 : {result.data.name}</p>
                  <p className='temperature'>기온 : {Math.floor(result.data.main.temp)}°C</p>
                  <p className='sky'>날씨 : {result.data.weather[0].description}</p>
                  <ClothesBtn onClick={() => {setVisible(!visible)}}>옷 추천</ClothesBtn>
                </WeatherInfo>
                {visible && <ClothesInfo>
                  {
                    Math.floor(result.data.main.temp) >= 20 && Math.floor(result.data.main.temp) <= 22 ? 
                    <>
                      <img src={clothesTwenty2} alt='옷 사진'/>
                      <img src={clothesTwenty} alt='옷 사진'/>
                      <img src={clothesTwenty3} alt='옷 사진'/>
                    </>
                    : '?'
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
    width: 390px;
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
  img {
    /* display: grid; */
    width : 50%;
    &:first-of-type {
      
    }
    &:last-of-type {
      
    }
  }
`

const ClothesBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  color: lightskyblue;
  background-color: transparent;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: lightskyblue;
  }
`
