import React from 'react'
import { getHourlyWeather } from '../api/weather';
import HourlyWeatherCard from './HourlyWeatherCard';
import { Link, useNavigate } from 'react-router-dom';

export default function Weather({ result, weatherList }) {
  const navigate = useNavigate();
  const { name, main: { temp, feels_like, humidity }, weather } = result;

  console.log(temp);
  return (
    <div className='w-full flex flex-col items-center mt-6 px-4'>
      <div className='flex flex-col items-center w-full text-neutral-600'>
        <h2 className='text-xl font-bold'>우리 동네의 현재 날씨는 ?</h2>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}
        />
        <p className='text-lg'>
          {`${Math.floor(temp)}°C / ${weather[0].description}`} 
        </p>
        <ul className='flex gap-6 mt-6'>
          <li>
            지역<span className='ml-1 bg-neutral-100 rounded-full px-3 py-1'>{name}</span>
          </li>
          <li>
            체감<span className='ml-1 bg-neutral-100 rounded-full px-3 py-1'>{`${Math.floor(feels_like)}°C`}</span>
          </li>
          <li>
            습도<span className='ml-1 bg-neutral-100 rounded-full px-3 py-1'>{`${humidity}%`}</span>
          </li>
        </ul>
      </div>
      <ul className='w-full mt-6 px-6 py-2 flex justify-center gap-4 overflow-x-auto overflow-y-hidden'>
        { weatherList && weatherList.list.map((item) => <HourlyWeatherCard key={item.dt} result={item} />) }
      </ul>
      <button onClick={() => navigate('/clothes', { state: { temp }})} className='w-1/2 text-white font-semibold mt-6 bg-zinc-700 hover:bg-zinc-900 py-3 rounded-lg'>옷 추천 받기</button>
    </div>
  )
}
