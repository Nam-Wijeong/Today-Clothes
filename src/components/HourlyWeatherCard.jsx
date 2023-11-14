import React from 'react'

export default function HourlyWeatherCard({ result }) {
  const { dt_txt, weather, main: { temp }} = result;
  return (
    <li className='text-neutral-600 md:shrink shrink-0 basis-1/3 md:basis-full flex flex-col items-center shadow-md border-2 border-zinc-400 rounded-lg py-2 h-30 sm:h-auto'>
      <p className='text-sm sm:text-base'>{`${dt_txt.slice(11, 13)}시`}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt='날씨 아이콘'
      />
      <p className='text-sm sm:text-base'>{`${Math.floor(temp)}°C`}</p>
    </li>
  )
}
