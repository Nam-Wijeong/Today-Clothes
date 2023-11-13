import React from 'react'

export default function HourlyWeatherCard({ result }) {
  const { dt_txt, weather, main: { temp }} = result;
  return (
    <li className='text-neutral-600 shrink-0 flex flex-col items-center shadow-md border-2 border-zinc-400 rounded-lg py-2'>
      <p>{`${dt_txt.slice(11, 13)}시`}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt='날씨 아이콘'
      />
      <p>{`${Math.floor(temp)}°C`}</p>
    </li>
  )
}
