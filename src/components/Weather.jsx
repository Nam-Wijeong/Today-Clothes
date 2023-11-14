import React from 'react'
import HourlyWeatherCard from './HourlyWeatherCard';
import { useNavigate } from 'react-router-dom';

export default function Weather({ result, weatherList }) {
  const navigate = useNavigate();
  const { name, main: { temp, feels_like, humidity }, weather } = result;

  return (
    <div className='w-4/5 md:w-full flex flex-col items-center mt-4 px-4'>
      <div className='w-4/5 md:w-full flex flex-col items-center text-neutral-600'>
        <h2 className='sm:text-xl font-bold'>우리 동네의 현재 날씨는 ?</h2>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}
        />
        <p className='text-sm md:text-lg'>
          {`${Math.floor(temp)}°C / ${weather[0].description}`} 
        </p>
        <ul className='flex flex-col md:flex-row gap-2 mt-4 text-small md:text-base'>
          <li>
            지역<span className='ml-1 bg-neutral-100 rounded-full px-2 py-1'>{name}</span>
          </li>
          <li>
            체감<span className='ml-1 bg-neutral-100 rounded-full px-3 py-1'>{`${Math.floor(feels_like)}°C`}</span>
          </li>
          <li>
            습도<span className='ml-1 bg-neutral-100 rounded-full px-3 py-1'>{`${humidity}%`}</span>
          </li>
        </ul>
      </div>
      <ul className='w-4/5 md:w-full mt-2 px-6 py-4 flex justify-center gap-4 overflow-x-auto overflow-y-hidden'>
        { weatherList && weatherList.list.map((item) => <HourlyWeatherCard key={item.dt} result={item} />) }
      </ul>
      <button onClick={() => navigate('/clothes', { state: { temp }})} className='w-1/2 text-white text-sm md:text-base font-semibold mt-4 bg-zinc-700 hover:bg-zinc-900 py-2 md:py-3 rounded-lg'>옷 추천 받기</button>
    </div>
  )
}
