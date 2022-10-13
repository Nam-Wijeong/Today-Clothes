import { useState } from 'react';
import axios from 'axios';
import Header from '../../header/Header';
import Clothes1 from '../clothes/Clothes1';
import Clothes2 from '../clothes/Clothes2';
import Clothes3 from '../clothes/Clothes3';
import Clothes4 from '../clothes/Clothes4';
import Clothes5 from '../clothes/Clothes5';
import Clothes6 from '../clothes/Clothes6';
import Clothes7 from '../clothes/Clothes7';
import Clothes8 from '../clothes/Clothes8';
import { 
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
  ClothesBtn
} from './style';

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
        alert('정확한 지역명을 입력해주세요!')
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
                    <WeatherList>지역<span>{result.data.city.name}</span></WeatherList>
                    <WeatherList>체감<span>{result.data.list[1].main.feels_like.toFixed(1)}°C</span></WeatherList>
                    <WeatherList>습도<span>{result.data.list[1].main.humidity}%</span></WeatherList>
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

